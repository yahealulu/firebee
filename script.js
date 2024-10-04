function toggleAccordion(button) {
    const item = button.parentElement;
    const content = button.nextElementSibling;
    const symbol = button.querySelector(".symbol");

    if (item.classList.contains("active")) {
        item.classList.remove("active");
        symbol.textContent = "+";
    } else {
        item.classList.add("active");
        symbol.textContent = "-";
    }
}
function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("active");
}
