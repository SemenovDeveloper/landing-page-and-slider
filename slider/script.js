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
let width;
const imagesQuantity = images.length;
let isSliding = false;

function init() {
  images.forEach((image, index) => {
    imgCreate(image.src, image.alt, image.id, index);
    buttonCreate(index);
  })
};

init();

function imgCreate(src, alt, id, index) {
  const img = document.createElement('img');
  const imageViewport = document.getElementById('viewport');
  img.src = src;
  img.id = id;
  img.className = "slider__image";

  if (alt != null ) img.alt = alt;

  if (index === 0) img.classList.add("slider__image_active")

  imageViewport.appendChild(img);
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

  if(isSliding || imageIndex == evt.target.value) {

    return
  } else {
    const pervImageIndex = imageIndex;
    imageIndex = Number(evt.target.value);
    const pervImage = document.getElementById("content" + pervImageIndex);
    const nextImage = document.getElementById("content" + imageIndex);
    activeSlideButton (imageIndex);

    if(imageIndex > pervImageIndex ) {
      slideToLeft(pervImage, nextImage);
    } else {
      slideToRight(pervImage, nextImage);
    }
  }
}

function nextSlide() {
  if(isSliding) {

    return
  } else {
    const pervImage = document.getElementById("content" + imageIndex);
    const nextImage = document.getElementById("content" + (imageIndex+1)%imagesQuantity);
    imageIndex = (imageIndex+1)%imagesQuantity;
    activeSlideButton (imageIndex);
    slideToLeft(pervImage, nextImage);
  }
}

function pervSlide () {
  if(isSliding) {

    return
  } else {
    const pervImage = document.getElementById("content" + imageIndex);
    const nextImage = document.getElementById("content" + ((imagesQuantity+imageIndex-1)%imagesQuantity));
    imageIndex = (imagesQuantity + imageIndex - 1)%imagesQuantity;
    activeSlideButton (imageIndex);
    slideToRight(pervImage, nextImage);
  }
}

function slideToLeft(pervImage, nextImage) {
  let i = 1;
  isSliding = true;  
  nextImage.classList.add("slider__image_active");    
  nextImage.style.transform = "translateX(100%)";
  pervImage.classList.add("slider__image_active");

  let startSliding = setInterval(function () {
    i++;
    pervImage.style.transform = "translateX(-" + i + "%)";
    nextImage.style.transform = "translateX(calc(100% - " + i + "%))";
    if (i >= 100) {
      clearInterval(startSliding);
      isSliding = false;
      pervImage.classList.remove("slider__image_active");
    }
  }, 10)
}

function slideToRight(pervImage, nextImage) {
  let i = 1;
  isSliding = true;  
  nextImage.classList.add("slider__image_active");    
  nextImage.style.transform = "translateX(-100%)";
  pervImage.classList.add("slider__image_active");

  let startSliding = setInterval(function () {
    i++;
    pervImage.style.transform = "translateX(" + i + "%)";
    nextImage.style.transform = "translateX(calc(-100% + " + i + "%))";
    if (i >= 100) {
      clearInterval(startSliding);
      isSliding = false;
      pervImage.classList.remove("slider__image_active");
    }
  }, 10)
}

function activeSlideButton (index) {
  const sliderButtons = document.querySelectorAll(".slider__dot-button");
  
  sliderButtons.forEach( button => {
    button.style.backgroundColor = "transparent"
  });
  document.getElementById("button" + index ).style.backgroundColor = "#283044"
}