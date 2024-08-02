let menuIcon = document.querySelectorA('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections =document.querySelector('section');
let navLinks = document.querySelector('header navbar');

window.unscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}





menuIcon.onclick = () => {
    menuIcon.classList.togle('bx-x');
    navbar.classList.toggle('active');
}