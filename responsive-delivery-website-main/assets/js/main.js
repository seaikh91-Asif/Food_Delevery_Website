/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
            toggle = document.getElementById(toggleId)

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')
    })

}

showMenu('nav-menu', 'nav-toggle')

/*=============== REMOVE MENU MOBILE ===============*/
// 1. Use querySelectorAll to get a list of all links
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    // 2. Remove the dot ('.') inside getElementById
    const navMenu = document.getElementById('nav-menu')
    
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

// 3. This now works because navLink is a NodeList
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD SHADOW HEADER ===============*/


/*=============== SWIPER REVIEWS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
