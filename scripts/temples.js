
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Footer - Current Year
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();


const lastModified = document.querySelector("#lastModified");
lastModified.textContent = "Last Modification: " + document.lastModified;
