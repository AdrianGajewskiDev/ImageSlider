const images = document.getElementsByClassName("img");
const navigationButtonsContainer = document.querySelector(".nav-list")
const navigationButtons = document.getElementsByClassName("nav-btn");
const leftArrowButton = document.querySelector(".left");
const rightArrowButton = document.querySelector(".right");
let currentImageIndex = 0;


var imagesArray = [];

function addNavigationBtns() {
    let count = images.length;

    for (let i = 0; i < count; i++) {
        navigationButtonsContainer.innerHTML += `<li class='nav-list-item'><button class='nav-btn' id='nav-${i}'></button></li>`;
    }
}

function setCurrentActivElements() {
    imagesArray[0].element.classList.add("img-active")
    navigationButtons[0].classList.add("active");
}

function fetchImagesToArray() {
    for (let i = 0; i < images.length; i++) {
        imagesArray.push({ index: i, element: images[i], navBtn: document.getElementById(`nav-${i}`) });
    }
}

function switchImage(index) {
    for (let i = 0; i < images.length; i++) {
        if (imagesArray[i].index == index) {
            imagesArray[i].element.classList.add("img-active");
            imagesArray[i].navBtn.classList.add("active");
        }
        else {
            imagesArray[i].element.classList.remove("img-active");
            imagesArray[i].navBtn.classList.remove("active");
        }
    }
}

rightArrowButton.addEventListener("click", () => {
    if (currentImageIndex == images.length - 1)
        return;

    currentImageIndex += 1;
    switchImage(currentImageIndex);
});

leftArrowButton.addEventListener("click", () => {
    if (currentImageIndex == 0)
        return;

    currentImageIndex -= 1;
    switchImage(currentImageIndex);
});


addNavigationBtns();
fetchImagesToArray();
setCurrentActivElements();

for (let i = 0; i < navigationButtons.length; i++) {
    navigationButtons[i].addEventListener("click", () => {
        let currentIndex = Number.parseInt(navigationButtons[i].id.split("-")[1]);
        currentImageIndex = currentIndex;
        switchImage(currentIndex);
    });
}