const cards = document.querySelectorAll('.tc');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll', () => {
    cards.forEach(tc => {
        if (isInViewport(tc)) {
            tc.classList.add('active');
        }
    });
});


const aboutImg = document.querySelector('.about-img');
const aboutText = document.querySelector('.about-text');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll', () => {
    if (isInViewport(aboutImg)) {
        aboutImg.classList.add('active');
    }
    if (isInViewport(aboutText)) {
        aboutText.classList.add('active');
    }
});

