window.onscroll = () => {
    scrollDown()
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

let Menu = document.querySelector('#menulink');

Menu.addEventListener('click', function() {
    let menuDropDown = document.getElementById('menuDD');
    let listMenu = document.querySelectorAll('.list-menu')

    if (menuDropDown.style.transform === 'translateY(20%)') {
        menuDropDown.style.opacity = '1';
        menuDropDown.style.transform = 'translateY(0%)';
        listMenu.forEach(item => item.style.display = 'inline');
    } else {
        menuDropDown.style.opacity = '0';
        menuDropDown.style.transform = 'translateY(20%)';
        listMenu.forEach(item => item.style.display = 'none');
    }
})