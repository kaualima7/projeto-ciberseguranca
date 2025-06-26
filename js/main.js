document.addEventListener('DOMContentLoaded', () => {
  console.log('Script carregado');

  const botaoTema = document.getElementById('toggle-theme');
  const iconeTema = document.getElementById('icone-tema');
  const aumentarBtn = document.getElementById('increase-font');
  const diminuirBtn = document.getElementById('decrease-font');
  const imgFundo = document.querySelector('.imagemFundoDecorativa');

  // Verifica tema salvo
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'dark') {
    document.body.classList.add('dark');
  }

  // Função de troca visual de tema
  function atualizarImagemModo() {
    const modoEscuro = document.body.classList.contains('dark');

    // imagem de fundo principal
    if (imgFundo) {
      imgFundo.src = modoEscuro ? './img/imgCiberdark.png' : './img/imgCiberlight.png';
    }

    // ícone do botão de tema
    if (iconeTema) {
      iconeTema.src = modoEscuro ? './img/lightMode.svg' : './img/darkMode.svg';
    }

    // ícones acessibilidade
    document.querySelector('#increase-font img').src = modoEscuro ? './img/A+prodark.svg' : './img/A+proLight.svg';
    document.querySelector('#decrease-font img').src = modoEscuro ? './img/A-prodark.svg' : './img/A-proLight.svg';

    // imagens decorativas dos artigos
    document.querySelectorAll('.imagemDecorativa').forEach(img => {
      const srcClaro = img.getAttribute('src');
      const srcEscuro = img.getAttribute('data-dark');

      if (modoEscuro && srcEscuro) {
        img.src = srcEscuro;
      } else {
        img.src = srcClaro.replace(' (1)', ''); // remove " (1)" se tiver
      }
    });
  }

  // Toggle de tema
  if (botaoTema) {
    botaoTema.addEventListener('click', () => {
      const modoEscuroAtivo = document.body.classList.toggle('dark');
      localStorage.setItem('tema', modoEscuroAtivo ? 'dark' : 'light');
      atualizarImagemModo();
    });
  }

  // Botões de fonte
  if (aumentarBtn && diminuirBtn) {
    aumentarBtn.addEventListener('click', () => {
      document.body.style.fontSize = '1.2em';
    });

    diminuirBtn.addEventListener('click', () => {
      document.body.style.fontSize = '1em';
    });
  }

  // Validação do formulário (modo zoeira)
  const formContato = document.getElementById("contato-form");
  if (formContato) {
    formContato.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Página em construção");
    });
  }

  // Executa na primeira carga
  atualizarImagemModo();
});








