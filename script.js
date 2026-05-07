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

// form page


const submit =document.querySelector(".form-submit-button");


submit.addEventListener("click", (e) => {

    e.preventDefault();

    const nameInput =document.querySelector("#name").value.trim();
    const companyInput =document.querySelector("#company").value.trim();
     const emailInput =document.querySelector("#email").value.trim();
    const subjectInput =document.querySelector("#subject").value;
    const messageInput =document.querySelector("#message").value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameInput === "") {
        alert("Please Enter Your Name");
        return;
    }

    if (!nameRegex.test(nameInput)) {
        alert(
            "Name should contain only alphabets"
        );
        return;
    }

    if (companyInput === "") {
        alert("Please Enter Company Name");
        return;
    }

    if (!nameRegex.test(companyInput)) {
        alert(
            "Company name should contain only alphabets");
        return;
    }

    if (emailInput === "") {
        alert("Please Enter Your Email");
        return;
    }

    if (!emailRegex.test(emailInput)) {
        alert("Please Enter Valid Email");
        return;
    }


    if (subjectInput === "") {
        alert("Please Select Subject");
        return;
    }


    if (messageInput === "") {
        alert("Please Enter Your Message");
        return;
    }

    alert("Submitted Successfully!");

    document.querySelector("#name").value = "";
    document.querySelector("#company").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#subject").selectedIndex = 0;
    document.querySelector("#message").value = "";
});


/* LOADER HIDE AFTER 3 SECONDS */

window.addEventListener("load", () => {

    let loader =
        document.querySelector(".loader-container");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2000);

});