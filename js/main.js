document.addEventListener('DOMContentLoaded', () => {
  console.log('Script carregado');

  const botaoTema = document.getElementById('toggle-theme');
  const icone = document.getElementById('icone-tema');
  const aumentarBtn = document.getElementById('increase-font');
  const diminuirBtn = document.getElementById('decrease-font');

  // Tema claro/escuro
  if (botaoTema && icone) {
    botaoTema.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');

      icone.src = isDark ? './img/lightMode.svg' : './img/darkMode.svg';

      const iconeAumentar = document.querySelector('#increase-font img');
      const iconeDiminuir = document.querySelector('#decrease-font img');

      if (iconeAumentar && iconeDiminuir) {
        iconeAumentar.src = isDark ? './img/A+prodark.svg' : './img/A+proLight.svg';
        iconeDiminuir.src = isDark ? './img/A-prodark.svg' : './img/A-proLight.svg';
      }
    });
  }

  // Aumentar e diminuir a fonte
  if (aumentarBtn && diminuirBtn) {
    aumentarBtn.addEventListener('click', () => {
      document.body.style.fontSize = '1.2em';
    });

    diminuirBtn.addEventListener('click', () => {
      document.body.style.fontSize = '1em';
    });
  }

  // Mensagem no formulário (se existir)
  const formContato = document.getElementById("contato-form");
  if (formContato) {
    formContato.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Página em construção");
    });
  }
});



