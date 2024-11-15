const header = document.querySelector("header");

window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky",window.scrollY>0);
})

// vedio slider nagation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".vedio-slide");
const hometext = document.querySelectorAll(".content");

var sliderNav = function(manual){ 
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    hometext.forEach((content) => {
        content.classList.remove("active");
    });
    
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    hometext[manual].classList.add("active");
}

btns.forEach((btn,i) =>{
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});