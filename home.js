window.onscroll = function () {
    scrollDown()
    animation_XandX50m()
    animation_XandX2km()
    animationY()
    animation_XandXm()
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

function animation_XandX50m() {
    const conSec_aniX = document.querySelector('.img-intro');
    const conSec_ani_X = document.querySelector('.text-intro');

    if (document.documentElement.scrollTop > 50) {
        conSec_aniX.classList.add('textORimg_aniX');
        conSec_ani_X.classList.add('textORimg_ani-X');
    }
}

function animation_XandX2km() {
    const conFourth_aniX = document.querySelector('.text-story');
    const conFourth_ani_X = document.querySelector('.img-story');

    if (document.documentElement.scrollTop > 2100) {
        conFourth_aniX.classList.add('textORimg_aniX');
        conFourth_ani_X.classList.add('textORimg_ani-X');
    }
}

function animationY() {
    const conThird_aniY = document.querySelector('.popular-menu');
    const conFifth_aniY = document.querySelector('.meet_chef');
    const conSeventh_aniY = document.querySelector('.customer-feedback');

    if (document.documentElement.scrollTop > 900) {
        conThird_aniY.classList.add('elements_aniY');
    }

    if (document.documentElement.scrollTop > 2850) {
        conFifth_aniY.classList.add('elements_aniY');
    }

    if (document.documentElement.scrollTop > 4225) {
        conSeventh_aniY.classList.add('elements_aniY');
    }
}

function animation_XandXm() {
    const conSix_ani_X = document.querySelector('.book-form');
    const conSix_aniX = document.querySelector('.img-book');

    if (document.documentElement.scrollTop > 3600) {
        conSix_aniX.classList.add('textORimg_aniX');
        conSix_ani_X.classList.add('textORimg_ani-X');
    }
}


let slide = 0;
autoslide();

function autoslide() {
    let allslides = document.querySelectorAll('.feedback');

    for (let i = 0; i < allslides.length; i++) {
        allslides[i].style.display = 'none';
    }

    slide++;
    if (slide > allslides.length) {
        slide = 1;
    }
    allslides[slide - 1].style.display = 'grid';
    setTimeout(autoslide, 8000);
}