// selecione todas as imagens com a classe "certificado-thumbnail"
const images = document.querySelectorAll('.certificado-thumbnail');

// adicione um evento de clique a cada imagem
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    // cria uma janela de imagem maior
    const imageView = document.createElement('div');
    imageView.className = 'image-view';
    imageView.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <button class="close-button">X</button>
    `;

    // adiciona a janela de imagem maior à página
    document.body.appendChild(imageView);

    // adicione um evento de clique ao botão de fechar
    const closeButton = imageView.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      imageView.remove();
    });
  });
});