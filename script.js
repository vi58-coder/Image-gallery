
const imageContainerEl = document.querySelector(".image-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let x = 0;
let timer;

prevButton.addEventListener("click", () => {
    x -= 45;
    clearTimeout(timer)
    updateGallery();
});

nextButton.addEventListener("click", () => {
    x += 45;
    clearTimeout(timer)
    updateGallery();
});

function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(()=>{
      x = x -45
      updateGallery()
    }, 3000)
}

// Initialize the gallery with the first image
updateGallery();