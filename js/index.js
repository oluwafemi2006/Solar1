let menu = document.querySelector('#menu-icon')
let navlink = document.querySelector('.navlink')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlink.classList.toggle('open')
}