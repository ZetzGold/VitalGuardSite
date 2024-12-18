// Carrossel 1
const imagens = [
    './assets/ex4.png',
    './assets/ex5.png',
    './assets/ex6.png'
];
let currentIndex = 0;

function prevImage() {
    currentIndex = (currentIndex - 1 + imagens.length) % imagens.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % imagens.length;
    updateImage();
}

function updateImage() {
    const imageElement = document.getElementById('carousel-image');
    imageElement.src = imagens[currentIndex];
}

// Carrossel 2
const imagens2 = [
    './assets/TelasApp/1Carregamento.png',
    './assets/TelasApp/2TelaLogin.png',
    './assets/TelasApp/3TelaCadastro.png',
    './assets/TelasApp/4TelaInicial.png',
    './assets/TelasApp/5TelaRegistroAlertas.png',
    './assets/TelasApp/6TelaCadastroContatos.png',
    './assets/TelasApp/7TelaPerfil.png',
    './assets/TelasApp/8TelaInicialNotificacao.png',
    './assets/TelasApp/9Notificacao.png'
];
let currentIndex2 = 0;

function prevImage2() {
    currentIndex2 = (currentIndex2 - 1 + imagens2.length) % imagens2.length;
    updateImage2();
}

function nextImage2() {
    currentIndex2 = (currentIndex2 + 1) % imagens2.length;
    updateImage2();
}

function updateImage2() {
    const imageElement2 = document.getElementById('carousel-image2');
    imageElement2.src = imagens2[currentIndex2];
}
