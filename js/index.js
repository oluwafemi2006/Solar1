let menu = document.querySelector('#menu-icon')
let navlink = document.querySelector('#head1')

menu.onclick = () => {
    if(menu.classList.contains("bx-bar")){
      menu.classList.add("bx-barshow")
      menu.classList.remove("bx-bar")
      navlink.classList.add('navlink')
        navlink.classList.remove('close')
    }else{
        menu.classList.add("bx-bar")
        menu.classList.remove("bx-barshow")
        navlink.classList.remove('navlink')
        navlink.classList.add('close')
    }

    // navlink.classList.toggle('open')
}