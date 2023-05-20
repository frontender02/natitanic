document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const anchors = document.querySelectorAll('a[href*="#"]');

    // Menu
    const menu = document.querySelector('.menu__body');
    const menuBtn = document.querySelector('.menu__icon');
    if (menu && menuBtn){
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            body.classList.toggle('lock');
        })

        menu.querySelectorAll('.menu__link').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
                body.classList.remove('lock');
            })
        })
    }
    anchors.forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();

            const sectionID = anchor.getAttribute('href').substring(1);
            document.getElementById(sectionID).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })
        })
    })


    // Swiper
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })


    // GSAP    
    gsap.from('.home__hello', { opacity: 0, y: -60, duration: 0.8 })
    gsap.from('.home__title', { opacity: 0, y: -80, duration: 0.8 })
    gsap.from('.home__description', { opacity: 0, y: -100, duration: 0.8 })
    gsap.from('.home__link', { opacity: 0, y: 100, duration: 0.5 })
    gsap.from('.home__box', { opacity: 0, duration: 3 })
})