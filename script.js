function generate() {
  const bitcoin = window.bitcoinjsLib;
  const keyPair = bitcoin.ECPair.makeRandom();
  const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
  const privkey = keyPair.toWIF();

  // Tampilkan data ke user
  document.getElementById('address').textContent = address;
  document.getElementById('privkey').textContent = privkey;

  // Buat QR Code ke canvas
  QRCode.toCanvas(document.getElementById('qrAddress'), address, { width: 200 });
  QRCode.toCanvas(document.getElementById('qrPrivkey'), privkey, { width: 200 });
}

function downloadQR(canvasId, filename) {
  const canvas = document.getElementById(canvasId);
  const link = document.createElement('a');
  link.download = filename + '.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
