const box = document.getElementById('section__projetos_banners');
const btn = document.getElementById('botao');
const titulo = document.getElementById('titulo-projeto');
const mockProjetos = {
    design: {
        nome: 'Identidade Visual - Ateliê Dom de Criar',
        imagem: '../src/imgs/banner_atelie.jpg',
        link: 'https://www.behance.net/gallery/125354011/Id-Visual-Atelie-Dom-de-Criar-',
        alt: 'Banner de fundo laranja com a logo do ateliê Dom de Criar o sobrepondo. A logo consiste numa ilustração de uma máquina de costura marrom, com três flores ao redor, e o nome do negócio em vermelho.'
    },
    webdesign: {
        nome: 'Projeto deste site no Figma!',
        imagem: '../src/imgs/banner_atelie.jpg',
        link: '',
        alt: ''
    },
    uiux: {
        nome: 'Projeto UI/UX - N.Art',
        imagem: '../src/imgs/banner_atelie.jpg',
        link: '',
        alt: ''
    }
}

function fazCardProjetos(campo) {
    box.innerHTML = `
    <h1 id="titulo-projeto" class="titulo">Projeto em Destaque</h1>
    <h2 id="subtitulo-projeto" class="texto-corrido">${campo.nome}</h2>
    <img src="${campo.imagem}" alt="${campo.alt}">
    <span id="botao" class="texto-corrido pai"><a href="${campo.link}" target="_blank" rel="noopener noreferrer">
    Clique aqui para acessar o projeto</a></span>
    `;
}

export default function mudaProjeto(tag) {
    switch (tag.id) {
        case 'dg':
            fazCardProjetos(mockProjetos.design);
            box.style.border = `3px solid #aa21e5`;
            btn.style.backgroundColor = '#aa21e5';
            titulo.style.color = '#aa21e5';
            break;
        case 'ui':
            fazCardProjetos(mockProjetos.uiux);
            box.style.border = `3px solid #aa21e5`;
            btn.style.backgroundColor = '#aa21e5';
            titulo.style.color = '#aa21e5';
            break;
        case 'wd':
            fazCardProjetos(mockProjetos.webdesign);
            box.style.border = `3px solid #aa21e5`;
            btn.style.backgroundColor = '#aa21e5';
            titulo.style.color = '#aa21e5';
            break;
        default:
            break;
    }
}