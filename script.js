// script.js
document.addEventListener('DOMContentLoaded', () => {
    const learnBtn = document.getElementById('learnBtn');
    const fadeInBlock = document.querySelector('.fade-in');
    const slideInBlocks = document.querySelectorAll('.slide-in');

    learnBtn.addEventListener('click', () => {
        const pcSection = document.getElementById('pc');
        pcSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Для fade-in блока
    setTimeout(() => {
        fadeInBlock.classList.add('visible');
    }, 500);

    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    slideInBlocks.forEach(block => {
        observer.observe(block);
    });
});
