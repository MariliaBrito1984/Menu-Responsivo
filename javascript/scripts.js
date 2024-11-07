

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.getElementById("hamburguer-button");
    const menu = document.getElementById("menu");

    hamburgerButton.addEventListener("click", function () {
        menu.classList.toggle("active"); // Alterna a classe "active" para abrir/fechar o menu
        hamburgerButton.innerText = menu.classList.contains("active") ? "close" : "menu"; // Altera o ícone
    });
});



/*Configuração de todas as páginas*/

function toggleSection(element) {
  const allSections = document.querySelectorAll(".section-content");
  const sectionContent = element.nextElementSibling;

  // Fecha todas as outras seções antes de abrir a atual
  allSections.forEach(section => {
      if (section !== sectionContent) {
          section.style.display = "none";
      }
  });

  // Alterna a visibilidade do conteúdo atual
  if (sectionContent.style.display === "none" || sectionContent.style.display === "") {
      sectionContent.style.display = "block";
  } else {
      sectionContent.style.display = "none";
  }
}



  window.addEventListener("load", checkFooterPosition);
window.addEventListener("resize", checkFooterPosition);

function checkFooterPosition() {
    const footer = document.getElementById("footer");
    const main = document.querySelector("main");
    const footerHeight = footer.offsetHeight;
    const bodyHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;

    // Verifica se o conteúdo é menor que a altura da janela
    if (bodyHeight <= windowHeight) {
        footer.classList.add("footer-fixed");
    } else {
        footer.classList.remove("footer-fixed");
    }
}






/*Configuração rodapé*/