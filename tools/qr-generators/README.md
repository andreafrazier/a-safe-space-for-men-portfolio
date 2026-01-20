# QR Code Generators

## Files

- `qr-event-registration.html` - Generates QR code for /events/register page

## How to Use

1. Open HTML file in browser (double-click or `start tools/qr-generators/qr-event-registration.html`)
2. QR code generates automatically
3. Click "Download" to save PNG
4. Save to `public/images/qr-codes/events/`

## When to Regenerate

- Only if the registration URL changes
- Since you're using /events/register (no date), this QR code is reusable!

# QR Code Generator for Donations

Standalone utility for generating branded QR codes that direct to donation pages with source tracking.

## Quick Start

1. **Run a local server** in the project root:

```bash
   # Using Python
   python -m http.server 5500
   
   # OR using Node.js http-server
   npx http-server -p 5500
   
   # OR using VS Code Live Server extension
   # Right-click qr-code-generator.html → "Open with Live Server"
```

1. **Open in browser**:

```
   http://localhost:5500/tools/qr-generators/qr-code-generator.html
```

1. **Download QR codes** by clicking the button under each one

2. **Test** by scanning with your phone before using in production

## Generated QR Codes

Each QR code directs to the donation page with a unique source parameter:

| QR Code | URL | Use Case |
|---------|-----|----------|
| General | `asafespaceformen.org/donate?source=qr-code-general` | General marketing, business cards |
| Event | `asafespaceformen.org/donate?source=qr-code-event` | Event flyers, workshop handouts |
| Social | `asafespaceformen.org/donate?source=qr-code-social` | Social media posts, Instagram stories |
| Email | `asafespaceformen.org/donate?source=qr-code-email` | Email signatures, newsletters |

## Technical Specifications

- **Size**: 512x512 pixels
- **Format**: PNG
- **Error Correction**: Level H (30%) - highest available
- **Logo Size**: 100x100 pixels (centered)
- **Print Recommendation**: Up to 3-4 inches
- **Library**: QRious 4.0.2 (MIT License)

## Print Guidelines

### Recommended Sizes

- **Business cards**: 0.75" - 1"
- **Flyers**: 1.5" - 2.5"
- **Posters**: 2.5" - 4"
- **Banners**: Scale proportionally

### Best Practices

- Maintain aspect ratio (square)
- Ensure high contrast when printing
- Test scan before mass printing
- Leave quiet zone (white space) around QR code
- Include call-to-action text: "Scan to donate"

## Customization

### Adding New QR Codes

To add a new campaign-specific QR code:

1. Open `qr-code-generator.html`
2. Copy an existing QR container section
3. Update the canvas ID, URL source parameter, and download filename
4. Add the new QR code to the `generateAllQRCodes()` function

Example:

```html
<div class="qr-container">
  <h2>Holiday Campaign QR Code</h2>
  <div class="qr-wrapper">
    <canvas id="qr-holiday" width="512" height="512"></canvas>
  </div>
  <div class="url">
    https://asafespaceformen.org/donate?source=qr-code-holiday
  </div>
  <button onclick="downloadQR('qr-holiday', 'Donate-QR-Holiday.png')">
    Download QR Code
  </button>
</div>
```

Then in the `<script>` section:

```javascript
function generateAllQRCodes() {
  // ... existing codes
  generateQRWithLogo(
    "qr-holiday",
    "https://asafespaceformen.org/donate?source=qr-code-holiday"
  );
}
```

### Changing the Logo

Replace `handshake-wordcloud.png` with your new logo:

- Keep filename the same OR update `logo.src` in the HTML
- Recommended: Square image, transparent background
- Size: At least 200x200px for quality
- Format: PNG preferred

## Troubleshooting

### QR codes don't appear

- **Solution**: Must run via local server, not opening file:// directly
- Check console for errors (F12)
- Verify `libs/qrious.min.js` exists

### Logo doesn't load

- **Solution**: Confirm `handshake-wordcloud.png` is in the same directory
- Check file name spelling/case sensitivity
- QR codes will generate without logo as fallback

### QR codes won't scan

- Test with multiple QR scanner apps
- Ensure good lighting
- Print larger (at least 1.5 inches)
- Check if logo is too large (reduce size in code)

### Downloaded PNG is corrupted

- Clear browser cache
- Try different browser
- Re-download QRious library

## Analytics Integration

QR code scans can be tracked in Google Analytics (when Phase 2 GA4 is implemented):

1. Source parameters automatically captured: `?source=qr-code-[type]`
2. View in GA4: Acquisitions → Traffic Acquisition → Source filter
3. Track conversions by source to measure QR code campaign effectiveness

## Maintenance

### When to Update

- Donation URL structure changes
- Logo/branding refresh
- Adding new campaigns
- Updating library for security patches

### Library Updates

Current version: QRious 4.0.2

To update:

1. Download latest from: <https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js>
2. Replace `libs/qrious.min.js`
3. Test all QR codes still generate correctly

---

**Created**: January 2026  
**Last Updated**: January 2026  
**Maintainer**: Andrea Frazier
