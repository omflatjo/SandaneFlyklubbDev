document.addEventListener('DOMContentLoaded', function() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    const texts = ['Welcome to Flight Club', 'Experience the Freedom', 'Join Us Today'];
    let currentIndex = 0;

    const hero = document.querySelector('.hero');
    const heroText = document.getElementById('hero-text');
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    
    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        hero.style.backgroundImage = `url('${images[currentIndex]}')`;
        heroText.innerText = texts[currentIndex];
        heroText.style.animation = 'fadeIn 2s';
    }
    
    setInterval(changeImage, 5000);

    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            header.style.top = '-60px';
        } else {
            header.style.top = '0';
        }
        lastScrollY = currentScrollY;

        const scrollSpeed = 0.5;
        const heroHeight = hero.offsetHeight;
        const scrolled = window.scrollY;
        hero.style.transform = `translateY(${scrolled * scrollSpeed}px)`;
    });

    let mouseTimer;
    document.addEventListener('mousemove', () => {
        clearTimeout(mouseTimer);
        header.style.top = '0';
        mouseTimer = setTimeout(() => {
            header.style.top = '-60px';
        }, 2000);
    });

    hamburger.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });
});
