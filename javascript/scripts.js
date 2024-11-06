

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburguer-button");
    const menu = document.getElementById("menu");

    hamburgerButton.addEventListener("click", function () {
        menu.classList.toggle("active"); // Alterna a classe "active" para abrir/fechar o menu
        hamburgerButton.innerText = menu.classList.contains("active") ? "close" : "menu"; // Altera o ícone
    });
});
