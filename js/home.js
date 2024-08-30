let index = 0;
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const totalSlides = slide.length;

// Duplicate the first slide and add it to the end
const firstClone = slide[0].cloneNode(true);
slides.appendChild(firstClone);

function showNextSlide() {
    index++;
    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;

    if (index === totalSlides) {
        // If it's the cloned slide (i.e., the copy of the first slide), reset back to the first slide
        setTimeout(() => {
            slides.style.transition = 'none';
            index = 0;
            slides.style.transform = `translateX(0)`;
        }, 1000); // Timeout must match the transition duration
    }
}

function showPreviousSlide() {
    index--;
    if (index < 0) {
        // Go to the last slide
        slides.style.transition = 'none';
        index = totalSlides - 1;
        slides.style.transform = `translateX(-${index * 100}%)`;
        setTimeout(() => {
            slides.style.transition = 'transform 1s ease-in-out';
            slides.style.transform = `translateX(-${index * 100}%)`;
        }, 50);
    } else {
        slides.style.transition = 'transform 1s ease-in-out';
        slides.style.transform = `translateX(-${index * 100}%)`;
    }
}

document.querySelector('.right-arrow').addEventListener('click', () => {
    showNextSlide();
    resetProgressBar();
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    showPreviousSlide();
    resetProgressBar();
});

function resetProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = '0';
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 50);
}

setInterval(showNextSlide, 5000); // Change slide every 5 seconds
