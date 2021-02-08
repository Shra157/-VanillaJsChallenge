const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixnav() {
    //console.log(topOfNav);
    //console.log(topOfNav,window.scrollY);
    document.body.style.pddingTop=nav    .offsetHeight='px';
    if (window.scrollY >=topOfNav) {
        document.body.classList.add('fixed-nav');
    }
    else {
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixnav);