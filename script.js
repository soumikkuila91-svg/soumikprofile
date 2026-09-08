
// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



// ================= SCROLL TO TOP =================

const scrollTopBtn =
    document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "block";

    }

    else {

        scrollTopBtn.style.display = "none";

    }

});


scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ================= CONTACT FORM =================

const form =
    document.querySelector(".contact-form");


form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});