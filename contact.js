window.onscroll = () => {
    scrollDown()
    contactAniY()
}

let pizzaMenu = document.querySelector('#menu');

function scrollDown() {
    const navibar = document.querySelector('#navibar');

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

pizzaMenu.addEventListener('click', function() {
    let menuDropDown = document.getElementById('menuDD');

    if (menuDropDown.style.transform === 'translateY(20%)') {
        menuDropDown.style.opacity = '1';
        menuDropDown.style.transform = 'translateY(0%)';
    } else {
        menuDropDown.style.opacity = '0';
        menuDropDown.style.transform = 'translateY(20%)';
    }
})

function contactAniY() {
    const contactUs = document.querySelector('#contactUS');

    if (document.documentElement.scrollTop > 50) {
        contactUs.classList.add('contact_aniY');

    }
}



