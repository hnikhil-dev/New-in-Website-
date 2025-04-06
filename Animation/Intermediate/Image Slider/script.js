// Slider Logic
const slider = document.querySelector('.slider');
let index = 0;
const totalImages = document.querySelectorAll('.slider img').length;

function slideImages() {
    index++;
    if (index >= totalImages) {
        index = 0;
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(slideImages, 3000);

// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');

// Check saved mode in localStorage
const currentMode = localStorage.getItem('theme');
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    modeIcon.textContent = '☀️'; // Sun icon for Light Mode
}

// Toggle Mode
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.textContent = '☀️'; // Switch to Light Mode
        localStorage.setItem('theme', 'dark');
    } else {
        modeIcon.textContent = '🌙'; // Switch to Dark Mode
        localStorage.setItem('theme', 'light');
    }
});
