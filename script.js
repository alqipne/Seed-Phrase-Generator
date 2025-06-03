let qr; // QRious instance

function generateSeed(wordCount) {
  const entropyBits = wordCount === 12 ? 128 : 256;
  const mnemonic = bip39.generateMnemonic(entropyBits);
  document.getElementById('output').value = mnemonic;

  generateQRCode(mnemonic);
}

function generateQRCode(text) {
  const qrContainer = document.getElementById('qrcode');
  qrContainer.innerHTML = ''; // clear existing

  const canvas = document.createElement('canvas');
  qrContainer.appendChild(canvas);

  qr = new QRious({
    element: canvas,
    value: text,
    size: 200,
    level: 'H'
  });

  document.getElementById('downloadBtn').style.display = 'inline-block';
}

function downloadQRCode() {
  if (!qr) return alert('Generate dulu seed phrase-nya!');

  const link = document.createElement('a');
  link.download = 'seed-qr.png';
  link.href = qr.toDataURL('image/png');
  link.click();
}
