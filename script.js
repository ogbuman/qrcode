function generateQR() {
    const input = document.getElementById("qr-input").value;
    if (!input) {
      alert("Please enter a URL or text!");
      return;
    }

    const qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";
    document.getElementById("download-btn").style.display = "none";

    new QRCode(qrContainer, {
      text: input,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    setTimeout(() => {
      document.getElementById("download-btn").style.display = "inline-block";
      document.getElementById("qrcode").style.display = "flex";
    }, 500);
  }

  function downloadQR() {
    const canvas = document.querySelector("#qrcode canvas");
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }