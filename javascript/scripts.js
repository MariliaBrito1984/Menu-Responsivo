function ajustarAlturaBody() {
    // Define a altura do body para cobrir toda a tela
    document.body.style.minHeight = `${window.innerHeight}px`;
  }
  
  // Chama a função inicialmente para ajustar o tamanho
  ajustarAlturaBody();
  
  // Adiciona um ouvinte de evento para redimensionar a altura do body ao redimensionar a janela
  window.onresize = ajustarAlturaBody;




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

/*Configuração do carrossel*/

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
     nextImage();
}, 4000);

function nextImage(){
    count ++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true; 
}




/*Configuração rodapé*/


window.addEventListener("load", checkFooterPosition);
window.addEventListener("resize", checkFooterPosition);

function checkFooterPosition() {
    const footer = document.getElementById("footer");
    const main = document.querySelector("main");
    const footerHeight = footer.offsetHeight;
    const mainHeight = main.offsetHeight;
    const windowHeight = window.innerHeight;

    // Verifica se o main + footer são menores que a altura da janela
    if ((mainHeight + footerHeight) < windowHeight) {
        footer.classList.add("footer-fixed");
    } else {
        footer.classList.remove("footer-fixed");
    }
}






