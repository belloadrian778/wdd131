
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

function toggleMenu() {
    navigation.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");
    menuButton.setAttribute("aria-expanded", `${isOpen}`);
    menuButton.textContent = isOpen ? "✕" : "☰";
}

menuButton.addEventListener("click", toggleMenu);

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;
