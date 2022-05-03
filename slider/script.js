const images = [
  {
    id: "content0",
    src: "/slider/src/images/image1.jpg",
    alt: "Owl"
  },
  {
    id: "content1",
    src: "/slider/src/images/image2.jpg",
    alt: "Autumn"
  },
  {
    id: "content2",
    src: "/slider/src/images/image3.jpg",
    alt: "Waterflow"
  },
  {
    id: "content3",
    src: "/slider/src/images/image4.jpg",
    alt: "Palm"
  },
  {
    id: "content4",
    src: "/slider/src/images/image5.jpg",
    alt: "Naked forest"
  },
  {
    id: "content5",
    src: "/slider/src/images/image6.jpg",
    alt: "Stroll"
  },
  {
    id: "content6",
    src: "/slider/src/images/image7.jpg",
    alt: "Seaside"
  },
  {
    id: "content7",
    src: "/slider/src/images/image8.jpg",
    alt: "Autumn Park"
  },
  {
    id: "content8",
    src: "/slider/src/images/image9.jpg",
    alt: "Mountain View"
  },
  {
    id: "content9",
    src: "/slider/src/images/image10.jpg",
    alt: "Monochrome Sky"
  }
];
let imageIndex = 0;
const imagesQuantity = images.length;

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
}

function buttonCreate(index) {
  const button = document.createElement("button");
  const container = document.getElementById("dot-buttons-container");  
  button.className = "slider__dot-button";
  button.id = "button" + index;
  button.value = index;
  if (index === 0) button.style.backgroundColor = "#283044";  
  container.appendChild(button);
  button.addEventListener("click", changeSlide, false);
}

function changeSlide (evt) {
  imageIndex = Number(evt.target.value);
  const slides = document.querySelectorAll(".slider__image");  
  slides.forEach( slide => {
    slide.classList.remove("slider__image_active");
  })
  document.getElementById("content" + imageIndex).classList.add("slider__image_active");
  activeSlideButton(imageIndex);
  console.log(imageIndex);
}

function pervImage () {
  document.getElementById("content" + (imageIndex )).classList.remove("slider__image_active"); 
  imageIndex = (imageIndex + imagesQuantity - 1) % imagesQuantity;
  document.getElementById("content" + (imageIndex)).classList.add("slider__image_active");
  activeSlideButton (imageIndex);
  console.log(imageIndex);
}

function nextImage() { 
  document.getElementById("content" + (imageIndex)).classList.remove("slider__image_active");
  imageIndex = (imageIndex+1)%imagesQuantity;
  document.getElementById("content" + (imageIndex)).classList.add("slider__image_active");
  activeSlideButton (imageIndex);
  console.log(imageIndex, imagesQuantity);
}

function activeSlideButton (index) {
  const sliderButtons = document.querySelectorAll(".slider__dot-button");
  sliderButtons.forEach( button => {
    button.style.backgroundColor = "transparent"
  });
  document.getElementById("button" + index ).style.backgroundColor = "#283044"
}


