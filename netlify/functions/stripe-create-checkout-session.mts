import type { Context, Config } from "@netlify/functions";
import Stripe from "stripe";

// Type declaration for global Netlify object
declare const Netlify: {
  env: {
    get(key: string): string | undefined;
  };
};

// Lazy initialization of Stripe client
let stripeInstance: Stripe | null = null;

function getStripeClient(): Stripe {
  if (stripeInstance) {
    return stripeInstance;
  }

  const secretKey = Netlify.env.get("STRIPE_SECRET_KEY");
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
  }

  stripeInstance = new Stripe(secretKey, {
    apiVersion: "2025-08-27.basil",
    typescript: true,
  });

  return stripeInstance;
}

export default async (req: Request, context: Context) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { amount, donationType, source } = await req.json();

    // Validate input
    if (!amount || amount <= 0) {
      return new Response(JSON.stringify({ error: "Invalid donation amount" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!donationType || !["one-time", "monthly"].includes(donationType)) {
      return new Response(JSON.stringify({ error: "Invalid donation type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const stripe = getStripeClient();

    // Get the base URL for redirects
    const baseUrl = Netlify.env.get("NEXT_PUBLIC_SITE_URL") || "http://localhost:3000";

    // Prepare source for URL and metadata
    const donationSource = source || "direct";

    // Create session parameters based on donation type
    let sessionParams: Stripe.Checkout.SessionCreateParams;

    if (donationType === "one-time") {
      // One-time donation
      sessionParams = {
        payment_method_types: ["card", "link"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Donation to A Safe Space For Men",
                description: "Supporting men's mental health and wellness",
              },
              unit_amount: Math.round(amount * 100), // Convert to cents
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${baseUrl}/donation-success?amount=${amount}&frequency=one-time&source=${donationSource}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/?donation=cancelled`,
        metadata: {
          donation_type: "one-time",
          amount: amount.toString(),
          source: donationSource,
        },
      };
    } else {
      // Monthly recurring donation
      sessionParams = {
        payment_method_types: ["card", "link"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Monthly Support - A Safe Space For Men",
                description: "Monthly recurring donation supporting men's mental health and wellness",
              },
              unit_amount: Math.round(amount * 100), // Convert to cents
              recurring: {
                interval: "month",
              },
            },
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `${baseUrl}/donation-success?amount=${amount}&frequency=monthly&source=${donationSource}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/?donation=cancelled`,
        metadata: {
          donation_type: "monthly",
          amount: amount.toString(),
          source: donationSource,
        },
      };
    }

    // Create the checkout session
    const session = await stripe.checkout.sessions.create(sessionParams);

    // Return the session URL
    return new Response(
      JSON.stringify({
        url: session.url,
        sessionId: session.id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Stripe Checkout Session Error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to create checkout session",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const config: Config = {
  path: "/api/stripe/create-checkout-session",
};
