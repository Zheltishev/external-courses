const arrayImage = [
  { imageName: "forest.jpg", alt: "morning in the pine forest" },
  { imageName: "sunset-on-the-hills.jpg" },
  { imageName: "lake-in-the-mountains.jpg" },
  { imageName: "mountains-in-the-fog.jpg" },
  { imageName: "heron-on-the-lake.jpg" },
  { imageName: "sunset-in-the-mountains.jpg" },
];
const sliderImage = document.querySelector(".slider-image-block");
const controlPanel = document.querySelector(".control-panel");
const buttonBack = document.querySelector(".button-back");
const buttonNext = document.querySelector(".button-next");
const sliderImageTitle = document.querySelector(".slider-image-title");
const timeShowImage = 3000;
let numberImage = 0;
let pauseImageSwitching = false;

// creating a control panel with buttons
for (let i = 0; i < arrayImage.length; i++) {
  controlPanel.insertAdjacentHTML(
    "beforeend",
    `<button class="choice-image"></button>`
  );
}

// creating a variable after icluding an element in the DOM
let buttonChoiceImage = document.querySelectorAll(".choice-image");

for (let j = 0; j < buttonChoiceImage.length; j++) {
  buttonChoiceImage[j].addEventListener("click", () => {
    numberImage = j;
    clearTimeout(timer);
    changeImage();
  });
}

//stop scrolling when hovering over an image
sliderImage.addEventListener("mouseover", () => {
  pauseImageSwitching = true;
});

sliderImage.addEventListener("mouseout", () => {
  pauseImageSwitching = false;
});

function nextImage() {
  ++numberImage;

  if (numberImage > arrayImage.length - 1) {
    numberImage = 0;
  }

  clearTimeout(timer);
  changeImage();

  return;
}

function backImage() {
  --numberImage;

  if (numberImage < 0) {
    numberImage = arrayImage.length - 1;
  }

  clearTimeout(timer);
  changeImage();

  return;
}

buttonNext.addEventListener("click", nextImage);
buttonBack.addEventListener("click", backImage);

function changeImage() {
  // adding an ALT image if it was not specified in the array
  if (arrayImage[numberImage].alt === undefined) {
    let regex = /(\.)([A-Za-z0-9]*)/;

    arrayImage[numberImage].alt = `
      ${arrayImage[numberImage].imageName.replace(regex, "")}
    `;
  }

  // v2 deleting the previous image and adding the next
  while (sliderImage.firstChild) {
    sliderImage.removeChild(sliderImage.firstChild);
  }

  sliderImage.insertAdjacentHTML(
    "afterbegin",
    `
      <img class="animation-image" src="asset/${arrayImage[numberImage].imageName}"
      alt="${arrayImage[numberImage].alt}" />
    `
  );

  // deleting the previous title and adding the next
  while (sliderImageTitle.firstChild) {
    sliderImageTitle.removeChild(sliderImageTitle.firstChild);
  }

  sliderImageTitle.insertAdjacentHTML(
    "afterbegin",
    arrayImage[numberImage].alt
  );

  // switching styles for the active control panel button
  buttonChoiceImage.forEach(function (elem, index) {
    if (index === numberImage) {
      elem.classList.add("active-choice-image");
    } else {
      elem.classList.remove("active-choice-image");
    }
  });

  return;
}

changeImage();

let timer = setTimeout(function tick() {
  if (pauseImageSwitching === true) {
    timer = setTimeout(tick, timeShowImage);
  } else {
    nextImage();
    changeImage();
    timer = setTimeout(tick, timeShowImage);
  }

  return;
}, timeShowImage);
