/* const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function () {
    counter++;
    carousel();
});
prevBtn.addEventListener('click', function () {
    counter--;
    carousel();
});

function carousel() {
    //working with slides
    // if (counter === slides.length){
    //     counter= 0;
    // }
    // if (counter < 0){
    //     counter= slides.length -1;
    // }

    //working with buttons
    if (counter < slides.length -1) {
        nextBtn.style.display= "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display= "block";
    } else {
        prevBtn.style.display= "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

//prevBtn.style.display= "none";

*/

import familyPhoto1 from "images/man-with-parents-line-drawing.jpeg"
import familyPhoto2 from "images/man-with-parents-photo.jpeg"
import engagedCouple1 from "images/engaged-couple-coloured.jpeg"
import engagedCouple2 from "images/engaged-couple-photo.jpeg"

const images = [familyPhoto1, familyPhoto2, engagedCouple1, engagedCouple2];

export default function App() {
    return <ImageSlider imageUrls= {images} />
}

