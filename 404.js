/* LOADER HIDE AFTER 3 SECONDS */

window.addEventListener("load",()=>{

    let loader =
    document.querySelector(".loader-container");

    setTimeout(()=>{

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    },2000);

});