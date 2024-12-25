window.onscroll = () => {
    scrollDown()
    animation_blogTwoY()
    animation_blogThreeY()
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

function animation_blogTwoY() {
    const blogTwo = document.querySelector('#blog_two');

    if (document.documentElement.scrollTop > 1050) {
        blogTwo.classList.add('elements_aniY');
    }
}

function animation_blogThreeY() {
    const blogTwo = document.querySelector('#blog_three');

    if (document.documentElement.scrollTop > 2150) {
        blogTwo.classList.add('elements_aniY');
    }
}