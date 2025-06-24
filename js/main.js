console.log('Script carregado');
console.log('botaoTema:', document.getElementById('toggle-theme'));
console.log('icone:', document.getElementById('icone-tema'));

const formContato = document.getElementById("contato-form");
if (formContato) {
  formContato.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Página em construção");
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const botaoTema = document.getElementById('toggle-theme');
  const icone = document.getElementById('icone-tema');

  if (botaoTema && icone) {
    botaoTema.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      icone.src = isDark ? './img/lightMode.svg' : './img/darkMode.svg';
    });
  }
});


