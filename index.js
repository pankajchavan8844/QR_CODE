const qr = require('qrcode');
const fs = require('fs');
// Data to be encoded in the QR code
const data = 'I AM DHANANJAY!';
// Configuration options for the QR code
const options = {
  errorCorrectionLevel: 'H', // Higher error correction level
  type: 'image/png', // Output format (you can also use 'image/jpeg' or others)
  rendererOpts: { quality: 0.3 } // Renderer options (optional)
};
// Generate the QR code as a data URL
qr.toDataURL(data, options, (err, url) => {
  if (err) throw err;
  // Save the QR code image to a file (optional)
  const outputPath = 'dhanu.png';
  qr.toFile(outputPath, data, options, (err) => {
    if (err) throw err;
    console.log(`QR code generated and saved to ${outputPath}`);
  });
  // Print the data URL (you can use this URL in an HTML img tag)
  console.log('QR code data URL:', url);
});
