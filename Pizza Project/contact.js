window.onscroll = () => {
    scrollDown()
    contactAniY()
}

function scrollDown() {
    const navibar = document.querySelector('#navibar');
    const pizzaMenu = document.querySelector('#menu');

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        navibar.style.top = '0px';
        navibar.style.backgroundColor = '#fff';
        navibar.style.padding = '1rem 4rem';
        pizzaMenu.style.paddingBottom = '1.85rem';
    } else {
        navibar.style.top = '0px';
        navibar.style.background = 'transparent';
        navibar.style.padding = '2rem 4rem';
        pizzaMenu.style.paddingBottom = '2.85rem';
    }
}

function contactAniY() {
    const contactUs = document.querySelector('#contactUS');

    if (document.documentElement.scrollTop > 50) {
        contactUs.classList.add('contact_aniY');
        
    }
}

let btnIcon = document.querySelector('.btnIcon');

btnIcon.addEventListener('click', () => {
    btnIcon.classList.toggle('change-icon');
})


