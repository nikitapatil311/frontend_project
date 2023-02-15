const allE1 = document.querySelector(".all");

const magnifierE1 = document.querySelector(".magnifier");

magnifierE1.addEventListener("click", () => {
    allE1.classList.toggle("active");
});