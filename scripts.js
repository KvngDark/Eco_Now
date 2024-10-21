
let navBar = document.querySelector('#header')

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add('rolar')
    } else(
        navBar.classList.remove('rolar')
    )
})

VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare:true,
    "max-glare":
     0.5
});

gsap.fromTo(".logo-name" , {
    y:50,
    opacity:0,
}, {
    y:0,
    opacity:1,
    duration:2,
    delay:0.5,
})
