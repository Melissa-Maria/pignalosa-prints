// Image Slider

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initialiseSlider();
document.addEventListener("DOMContentLoaded", initialiseSlider);

function initialiseSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    }
}
function showSlide(index) {
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(slideIndex < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}





