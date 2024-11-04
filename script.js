const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const currentElement = document.getElementById("currentElement");

const items = ["Element 1", "Element 2", "Element 3", "Element 4"];
let currentIndex = 0;

function showCurrentElement() {
    currentElement.textContent = items[currentIndex];

}

function next() {
    currentIndex++;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    showCurrentElement();
}

function prev() {
    currentIndex--;

    if (currentIndex <0) {
        currentIndex = items.length - 1;
    }
    showCurrentElement();
}
nextButton.addEventListener("click", next);
previousButton.addEventListener("click", prev);

showCurrentElement();