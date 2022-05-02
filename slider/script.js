const images = [
  {
    id: "content1",
    src: "/slider/src/images/image1.jpg",
    alt: "Owl"
  },
  {
    id: "content2",
    src: "/slider/src/images/image2.jpg",
    alt: "Autumn"
  },
  {
    id: "content3",
    src: "/slider/src/images/image3.jpg",
    alt: "Waterflow"
  }
];

let curentImageIndex = 0;
const imagesQuantity = images.length;

const changeSlide = (index) => {
  console.log(index);
  const slides = document.querySelectorAll(".slider__image");
  activeSlideButton(index+1);
  slides.forEach( slide => {
    slide.classList.remove("slider__image_active");
  })
  document.getElementById("content" + (index + 1)).classList.add("slider__image_active")
}
// const slides = document.querySelectorAll(".slider__image");
// const sliderButtons = document.querySelectorAll(".slider__dot-button");

window.onload = init();
function init() {
  images.forEach((image, index) => {
    imgCreate(image.src, image.alt, image.id, index);
    buttonCreate(index);
  })
};

function imgCreate(src, alt, id, index) {
  let img = document.createElement('img');
  img.src = src;
  img.id = id;
  img.className = "slider__image";
  if (alt != null ) img.alt = alt;
  if (index === 0) img.classList.add("slider__image_active")
  document.getElementById('viewport').appendChild(img);
  console.log(img);
  return img;
}

function buttonCreate(index) {
  let button = document.createElement("button");
  button.className = "slider__dot-button";
  // button.onclick = changeSlide(index);
  if (index === 0) button.style.backgroundColor = "#283044";
  let container = document.getElementById("dot-buttons-container");  
  container.appendChild(button);
  button.addEventListener("click", changeSlide);
  console.log(button);
  return button;
}

// const changeSlide = (index) => {
//   const slides = document.querySelectorAll(".slider__image");
//   activeSlideButton(index+1);
//   slides.forEach( slide => {
//     slide.classList.remove("slider__image_active");
//   })
//   document.getElementById("content" + (index + 1)).classList.add("slider__image_active")
// }


function pervImage () {  
  document.getElementById("content" + (curentImageIndex + 1)).classList.remove("slider__image_active"); 
  curentImageIndex = (curentImageIndex + imagesQuantity - 1) % imagesQuantity;
  document.getElementById("content" + (curentImageIndex + 1)).classList.add("slider__image_active");
  activeSlideButton (curentImageIndex+1);
}

function nextImage() { 
  document.getElementById("content" + (curentImageIndex + 1)).classList.remove("slider__image_active");
  curentImageIndex = (curentImageIndex + 1) % imagesQuantity;
  document.getElementById("content" + (curentImageIndex + 1)).classList.add("slider__image_active");
  activeSlideButton (curentImageIndex+1);
}

function activeSlideButton (index) {
  const sliderButtons = document.querySelectorAll(".slider__dot-button");
  sliderButtons.forEach( button => {
    button.style.backgroundColor = "transparent"
  })
  document.querySelector(".slider__dot-button:nth-child(" + index + ")").style.backgroundColor = "#283044"
}

// function changeSlide(index) {
//   console.log("hello")
//   // const slides = document.querySelectorAll(".slider__image");
//   // activeSlideButton(index+1);
//   // slides.forEach( slide => {
//   //   slide.classList.remove("slider__image_active");
//   // })
//   // document.getElementById("content" + (index + 1)).classList.add("slider__image_active")
// }
