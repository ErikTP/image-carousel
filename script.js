const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const images = document.querySelectorAll(".images img");
let currentIndex = 0;
function showCurrentImage() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
}
function next() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showCurrentImage();
}
function prev() {
    currentIndex--;
    if (currentIndex <0) {
        currentIndex = images.length - 1;
    }
    showCurrentImage();
}
nextButton.addEventListener("click", next);
previousButton.addEventListener("click", prev);
showCurrentImage();