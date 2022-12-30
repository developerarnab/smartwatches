
// ------navbar   

const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navbar.classList.toggle("active");

})


// ---------------swiper slider
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});

// ----------------------vanila tilt.js

VanillaTilt.init(document.querySelector(".watchgallery"), {
    max: 25,
    speed: 400
});

VanillaTilt.init(document.querySelectorAll(".watchgallery"));

// -------------- vertical js

let navigationicon = document.querySelector('.navigationicon');

let toggle = document.querySelector('.toggle');

toggle.onclick = function(){

    navigationicon.classList.toggle('active')



}

// ----------to top buttton

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {

        toTop.classList.add("active");

    } else {

        toTop.classList.remove("active");
    }

})

// -------------automatic show popup window

const popsup = document.querySelector('.popsup');

const closebox = document.querySelector('.closebox');
window.onload = function(){

  setTimeout(function(){

   popsup.style.display = "block";

  }, 1800)

}

closebox.addEventListener('click', () => {

    popsup.style.display = "none";


})
// ===========---------------cursorpath

var cursor = document.querySelector(".cursor"); 

var cursor2 = document.querySelector(".cursor2"); 

document.addEventListener("mousemove",function(e){

    cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX

+ "px; top:" + e.clientY + "px;";

})

// ----------preloader

function counter() {

    var count = setInterval(function () {

        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c == 100) {
            clearInterval(count);
            $('.counter').addClass('hide')
            $('.preloader').addClass('active')
        }

    }, 60)

}
counter()

// ----------------- chatbox


document.getElementsByClassName("showbtn")[0].addEventListener("click", function () {

    document.getElementsByClassName("chat-box")[0].style.display = "block";

    document.getElementsByClassName("showbtn")[0].style.display = "none";

    document.getElementsByClassName("closebtn")[0].style.display = "block";

});

document.getElementsByClassName("closebtn")[0].addEventListener("click", function () {

    document.getElementsByClassName("chat-box")[0].style.display = "none";

    document.getElementsByClassName("showbtn")[0].style.display = "block";

    document.getElementsByClassName("closebtn")[0].style.display = "none";

});












