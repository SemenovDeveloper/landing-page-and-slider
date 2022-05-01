let curentImageIndex = 0;
let imagesQuantity = 10;

function pervImage () {
  console.log(document.getElementById("content" + (curentImageIndex + 1)));
  document.getElementById("content" + (curentImageIndex + 1)).classList.remove("active");
  console.log((curentImageIndex + imagesQuantity- 1) % imagesQuantity);
  curentImageIndex = (curentImageIndex + imagesQuantity - 1) % imagesQuantity;
  document.getElementById("content" + (curentImageIndex + 1)).classList.add("active");
}

function nextImage() { 
  console.log(document.getElementById("content" + (curentImageIndex + 1)));
  document.getElementById("content" + (curentImageIndex + 1)).classList.remove("active");
  console.log(curentImageIndex % imagesQuantity + 1);
  curentImageIndex = curentImageIndex % imagesQuantity + 1;
  document.getElementById("content" + (curentImageIndex + 1)).classList.add("active");
}