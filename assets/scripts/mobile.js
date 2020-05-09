const navMenu = document.querySelector(".mobile-nav")
const buttonContainer = document.querySelector(".button-container")

buttonContainer.addEventListener("click", function() {
    buttonContainer.classList.toggle("active");
    if (buttonContainer.classList.contains("active")) {
        navMenu.classList.add("open")
    } else {
        navMenu.classList.remove("open")
    }
});


