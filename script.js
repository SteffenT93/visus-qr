// Elemente selektieren
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const urlInput = document.getElementById('urlInput');
const qrCodeContainer = document.getElementById('qr-code');
let qr;

// Event Listener für den "QR Code generieren"-Button
generateBtn.addEventListener('click', () => {
  const url = urlInput.value.trim();
  if (url === '') {
    alert('Bitte geben Sie eine gültige URL ein.');
    return;
  }
  // Vorherigen QR Code entfernen
  qrCodeContainer.innerHTML = '';
  
  // QR Code generieren
  qr = new QRCode(qrCodeContainer, {
    text: url,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
  
  downloadBtn.style.display = 'block';
});

// Event Listener für den "QR Code als JPG speichern"-Button
downloadBtn.addEventListener('click', () => {
  const canvas = qrCodeContainer.querySelector('canvas');
  if (canvas) {
    const imgData = canvas.toDataURL("image/jpeg");
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'qrcode.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert('QR Code konnte nicht gefunden werden.');
  }
});
