function generateQRCode() {
  let website = document.getElementById("website").value;
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRious({
      element: qrcodeContainer,
      value: website
    });
    /*With some styles*/
    let qrcodeContainer2 = document.getElementById("qrcode-2"); 
    qrcodeContainer2.innerHTML = "";
    new QRious({
      element: qrcodeContainer2, 
      background: '#ffffff',
      backgroundAlpha: 1,
      foreground: '#5868bf',
      foregroundAlpha: 1,
      level: 'H',
      padding: 0,
      size: 128,
      value: website
    });
    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Please enter a valid URL");
  }
}