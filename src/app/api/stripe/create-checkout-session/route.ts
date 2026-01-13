import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  try {
    const { amount, donationType } = await req.json();

    // Validate input
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    if (!donationType || !['one-time', 'monthly'].includes(donationType)) {
      return NextResponse.json(
        { error: 'Invalid donation type' },
        { status: 400 }
      );
    }

    // Get the base URL for redirects
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Prepare source for URL and metadata
    const donationSource = source || "direct";

    // Create session parameters based on donation type
    let sessionParams: Stripe.Checkout.SessionCreateParams;

    if (donationType === 'one-time') {
      // One-time donation
      sessionParams = {
        payment_method_types: ['card', 'link'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Donation to A Safe Space For Men',
                description: 'Supporting men\'s mental health and wellness',
              },
              unit_amount: Math.round(amount * 100), // Convert to cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${baseUrl}/donation-success?amount=${amount}&frequency=one-time&source=${donationSource}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/?donation=cancelled`,
        metadata: {
          donation_type: 'one-time',
          amount: amount.toString(),
          source: donationSource,
        },
      };
    } else {
      // Monthly recurring donation
      sessionParams = {
        payment_method_types: ['card', 'link'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Monthly Support - A Safe Space For Men',
                description: 'Monthly recurring donation supporting men\'s mental health and wellness',
              },
              unit_amount: Math.round(amount * 100), // Convert to cents
              recurring: {
                interval: 'month',
              },
            },
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${baseUrl}/donation-success?amount=${amount}&frequency=monthly&source=${donationSource}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/?donation=cancelled`,
        metadata: {
          donation_type: 'monthly',
          amount: amount.toString(),
          source: donationSource,
        },
      };
    }

    // Create the checkout session
    const session = await stripe.checkout.sessions.create(sessionParams);

    // Return the session URL
    return NextResponse.json({ 
      url: session.url,
      sessionId: session.id 
    });

  } catch (error) {
    console.error('Stripe Checkout Session Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to create checkout session',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}