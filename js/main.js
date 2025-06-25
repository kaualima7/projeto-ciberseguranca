document.addEventListener('DOMContentLoaded', () => {
  console.log('Script carregado');

  const botaoTema = document.getElementById('toggle-theme');
  const iconeTema = document.getElementById('icone-tema');
  const aumentarBtn = document.getElementById('increase-font');
  const diminuirBtn = document.getElementById('decrease-font');
  const imgFundo = document.querySelector('.imagemFundoDecorativa');

  function atualizarImagemModo() {
    if (document.body.classList.contains('dark')) {
      imgFundo.src = './img/imgCiberdark.png';
      iconeTema.src = './img/lightMode.svg';
      document.querySelector('#increase-font img').src = './img/A+prodark.svg';
      document.querySelector('#decrease-font img').src = './img/A-prodark.svg';
    } else {
      imgFundo.src = './img/imgCiberlight.png';
      iconeTema.src = './img/darkMode.svg';
      document.querySelector('#increase-font img').src = './img/A+proLight.svg';
      document.querySelector('#decrease-font img').src = './img/A-proLight.svg';
    }
  }

  if (botaoTema) {
    botaoTema.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      atualizarImagemModo();
    });
  }

  if (aumentarBtn && diminuirBtn) {
    aumentarBtn.addEventListener('click', () => {
      document.body.style.fontSize = '1.2em';
    });

    diminuirBtn.addEventListener('click', () => {
      document.body.style.fontSize = '1em';
    });
  }

  const formContato = document.getElementById("contato-form");
  if (formContato) {
    formContato.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Página em construção");
    });
  }
  atualizarImagemModo();
});




