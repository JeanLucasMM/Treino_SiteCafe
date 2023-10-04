// Selecione todos os botões "Tocar" e "Pausar"
const playButtons = document.querySelectorAll(".play-button");
const pauseButtons = document.querySelectorAll(".pause-button");

// Associe um evento de clique a cada botão "Tocar"
playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtenha o elemento de áudio associado à caixa do botão clicado
    const audioPlayer = button.parentElement.querySelector(".audio-player");
    
    // Defina a fonte de áudio do elemento de áudio com base no caminho da música
    audioPlayer.src = button.getAttribute("data-src");

    // Adicione a classe "wiggle" ao botão
    button.classList.add("wiggle");

    // Remova a classe "wiggle" após 0.5 segundos (a duração da animação)
    setTimeout(() => {
      button.classList.remove("wiggle");
    }, 500);

    audioPlayer.load();
    audioPlayer.play();
  });
});

// Associe um evento de clique a cada botão "Pausar"
pauseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtenha o elemento de áudio associado à caixa do botão clicado
    const audioPlayer = button.parentElement.querySelector(".audio-player");
    button.classList.add("wiggle");

    setTimeout(() => {
        button.classList.remove("wiggle");
      }, 500);
    // Pausar a música
    audioPlayer.pause();
  });
});
