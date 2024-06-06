let slideIndex = 0;

function mostrarSlides() {
    const slides = document.querySelectorAll('.carrossel .slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function mudarSlide(n) {
    const slides = document.querySelectorAll('.carrossel .slide');
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    mostrarSlides();
}

document.addEventListener('DOMContentLoaded', (event) => {
    mostrarSlides();
});
