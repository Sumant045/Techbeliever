var tablinks =document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 10) { // Change 50 to the scroll threshold you prefer
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});



document.addEventListener("DOMContentLoaded", function () {
    let img = document.querySelector(".width50 img");

    function revealImage() {
        let imgPosition = img.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if (imgPosition < screenPosition) {
            img.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealImage);
    revealImage(); // Run on load in case it's already in view
});


document.addEventListener("DOMContentLoaded", function () {
    // Select all product elements
    const products = document.querySelectorAll(".product_first, .product_first_right");

    products.forEach((product) => {
        product.addEventListener("mouseenter", () => {
            product.style.transform = "scale(1.05)";
            product.style.opacity = "0.9";
            product.style.transition = "transform 0.7s ease-in-out, opacity 0.7s ease-in-out";
        });

        product.addEventListener("mouseleave", () => {
            product.style.transform = "scale(1)";
            product.style.opacity = "1";
        });
    });
});




