document.addEventListener('DOMContentLoaded', function() {
  console.log('Script carregado');

  var botaoTema = document.getElementById('toggle-theme');
  var iconeTema = document.getElementById('icone-tema');
  var aumentarBtn = document.getElementById('aumentarFonte');
  var diminuirBtn = document.getElementById('diminuirFonte');
  var imgFundo = document.querySelector('.imagemFundoDecorativa');

  // pega o tema que salvou no navegador
  var temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'dark') {
    document.body.classList.add('dark');
  }

  function atualizarImagemModo() {
    var modoEscuro = document.body.classList.contains('dark');

    // troca a imagem de fundo principal
    if (imgFundo) {
      if (modoEscuro) {
        imgFundo.src = './img/imgCiberdark.png';
      } else {
        imgFundo.src = './img/imgCiberlight.png';
      }
    }

    // troca o ícone do botão de tema
    if (iconeTema) {
      if (modoEscuro) {
        iconeTema.src = './img/lightMode.svg';
      } else {
        iconeTema.src = './img/darkMode.svg';
      }
    }

    // troca os ícones de aumentar e diminuir fonte
    var iconeAumentar = document.querySelector('#aumentarFonte img');
    var iconeDiminuir = document.querySelector('#diminuirFonte img');
    if (modoEscuro) {
      if (iconeAumentar) iconeAumentar.src = './img/A+prodark.svg';
      if (iconeDiminuir) iconeDiminuir.src = './img/A-prodark.svg';
    } else {
      if (iconeAumentar) iconeAumentar.src = './img/A+proLight.svg';
      if (iconeDiminuir) iconeDiminuir.src = './img/A-proLight.svg';
    }

    // troca as imagens decorativas dos artigos
    var imagens = document.querySelectorAll('.imagemDecorativa');
    for (var i = 0; i < imagens.length; i++) {
      var img = imagens[i];
      var srcClaro = img.getAttribute('src');
      var srcEscuro = img.getAttribute('data-dark');

      if (modoEscuro && srcEscuro) {
        img.src = srcEscuro;
      } else {
        img.src = srcClaro.replace(' (1)', '');
      }
    }
  }

  if (botaoTema) {
    botaoTema.addEventListener('click', function() {
      var modoEscuroAtivo = document.body.classList.toggle('dark');
      localStorage.setItem('tema', modoEscuroAtivo ? 'dark' : 'light');
      atualizarImagemModo();
    });
  }

  var tamanhoFonteAtual = 1;

  if (aumentarBtn && diminuirBtn) {
    aumentarBtn.addEventListener('click', function() {
      tamanhoFonteAtual += 0.1;
      document.documentElement.style.fontSize = tamanhoFonteAtual + 'em';
    });

    diminuirBtn.addEventListener('click', function() {
      tamanhoFonteAtual = Math.max(0.8, tamanhoFonteAtual - 0.1);
      document.documentElement.style.fontSize = tamanhoFonteAtual + 'em';
    });
  }

  var formContato = document.getElementById("contato-form");
  if (formContato) {
    formContato.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Página em construção");
    });
  }

  atualizarImagemModo();
});








