let mobileMenuButton = document.querySelector("#mobile-menu-btn");

let mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.onclick = function(){
    mobileMenu.classList.toggle("active");
}