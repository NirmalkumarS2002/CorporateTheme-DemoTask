// menu toggle

// let doggle=document.querySelector(".menu-toggle");
    
//     let visible=false;

// doggle.addEventListener("click",()=>{

//     let nav=document.querySelector(".nav-menu");
//     let navbutton=document.querySelector(".navbutton");


//     if(visible){
//         nav.style.display="none";
//          navbutton.style.display="none";
//          visible=false;
//     }

//     else{
//     nav.style.display="flex";
//     nav.style.flexDirection="column";
//      navbutton.style.display="block";
//     visible=true;
//     }
// })

let toggle = document.querySelector(".menu-toggle");
let navMenu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// scroll animation

let reveals = document.querySelectorAll(".reveal");

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(el => {
    observer.observe(el);
});

// 