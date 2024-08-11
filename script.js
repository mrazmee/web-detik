let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function changeSlide(index) {
    const carouselImages = document.querySelector('.carousel-images');
    
    // Determine the direction of the slide change
    let direction = index > currentIndex ? 'forward' : 'backward';

    // Adjust the index to loop within the slides
    currentIndex = (index + totalSlides) % totalSlides;

    // Apply CSS class for animation direction
    carouselImages.classList.add(direction);
    
    // Change slide
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Remove the animation class after animation is complete
    carouselImages.addEventListener('transitionend', () => {
        carouselImages.classList.remove('forward', 'backward');
    }, { once: true });
}

// Initialize carousel
changeSlide(currentIndex);
