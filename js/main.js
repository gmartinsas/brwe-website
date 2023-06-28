const botaoNavbar = document.getElementById('hamburger-menu');
const linksNavbar = document.getElementById('navbar');

botaoNavbar.addEventListener('click', () => {
    if (linksNavbar.classList.contains("toggle")) {
        linksNavbar.classList.remove("toggle");
    } else {
        linksNavbar.classList.add("toggle");
    }
});


`
<div id="section__projetos_banners" class="pai">

<h1 class="titulo">Projeto em Destaque</h1>

<h2 class="subtitulo">Identidade Visual - Ateliê Dom de Criar</h2>

<img src="./src/imgs/banner_atelie.jpg" alt="Banner de fundo laranja com a logo do ateliê Dom 
de Criar o sobrepondo. A logo consiste numa ilustração de uma máquina de costura marrom, com 
três flores ao redor, e o nome do negócio em vermelho.">

<span id="botao" class="subtitulo pai">

<a href="https://www.behance.net/gallery/125354011/Id-Visual-Atelie-Dom-de-Criar-" target="_blank" rel="noopener noreferrer">
Clique aqui para acessar o projeto</a>

</span>
</div>
`