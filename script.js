function loadImage() {
  const date = new Date();
  const hours = date.getHours();

  const containerContent = document.querySelector("main");

  let showImage = document.createElement("img");
  showImage.classList.add("img-hours");
  showImage.src = "";

  let showMessage = document.createElement("h2");
  showMessage.classList.add("message");
  showMessage.textContent = "";

  containerContent.appendChild(showImage);
  containerContent.appendChild(showMessage);

  if (hours >= 6 && hours < 12) {
    showImage.src = "./assets/sun-morning.jpg";
    showMessage.textContent = "Bom Dia";
  } else if (hours >= 12 && hours < 18) {
    showImage.src = "./assets/img-afternoon.jpg";
    showMessage.textContent = "Boa Tarde";
  } else if (hours >= 18 && hours < 24) {
    showImage.src = "./assets/img-night.jpg";
    showMessage.textContent = "Boa Noite";
  } else {
    showImage.src = "./assets/img-dawn.jpg";
    showMessage.textContent = "Está de madrugada vá dormir";
  }
}
