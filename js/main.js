import mudaProjeto from "./muda-projeto.js";

const botaoNavbar = document.getElementById('hamburger-menu');
const linksNavbar = document.getElementById('navbar');
const tags = document.querySelectorAll('.tag');

tags.forEach((tag) => {
    tag.addEventListener('click', () => clicaProjeto(tag));
});

function clicaProjeto(tag) {
    mudaProjeto(tag);
}


/* Função para ativar o Menu Hamburger (Mobile) */
botaoNavbar.addEventListener('click', () => {
    if (linksNavbar.classList.contains("toggle")) {
        linksNavbar.classList.remove("toggle");
    } else {
        linksNavbar.classList.add("toggle");
    }
});