document.addEventListener('DOMContentLoaded', () => {
  //  mensagem de teste pra garantir que o JS foi carregado
  console.log('Script carregado');

  //  pegando os elementos do DOM pelos seus ids ou classes
  const botaoTema = document.getElementById('toggle-theme'); //  botão que troca o tema
  const iconeTema = document.getElementById('icone-tema');   //  ícone que muda junto com o tema
  const aumentarBtn = document.getElementById('increase-font'); //  botão de aumentar fonte
  const diminuirBtn = document.getElementById('decrease-font'); //  botão de diminuir fonte
  const imgFundo = document.querySelector('.imagemFundoDecorativa'); //  imagem decorativa do fundo

  //  verifica se já tem um tema salvo no navegador com a api localStorage 
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'dark') {
    //  se for escuro, poe a classe dark no body
    document.body.classList.add('dark');
  }

  // função que atualiza imagens e ícones de acordo com o tema que ja tem
  function atualizarImagemModo() {
    if (document.body.classList.contains('dark')) {
      //  se o tema for escuro, troca os ícones e imagem de fundo para modo dark
      if (imgFundo) imgFundo.src = './img/imgCiberdark.png';
      if (iconeTema) iconeTema.src = './img/lightMode.svg';
      document.querySelector('#increase-font img').src = './img/A+prodark.svg';
      document.querySelector('#decrease-font img').src = './img/A-prodark.svg';
    } else {
      //  se o tema for claro, usa os ícones e imagem padrão (que são claros)
      if (imgFundo) imgFundo.src = './img/imgCiberlight.png';
      if (iconeTema) iconeTema.src = './img/darkMode.svg';
      document.querySelector('#increase-font img').src = './img/A+proLight.svg';
      document.querySelector('#decrease-font img').src = './img/A-proLight.svg';
    }
  }

  //  ee existir o botão de tema, adiciona um "escutador" de clique
  if (botaoTema) {
    botaoTema.addEventListener('click', () => {
      //  alterna a classe 'dark' no body (ativa ou desativa o modo escuro)
      const modoEscuroAtivo = document.body.classList.toggle('dark');

      //  salva o tema no armazenamento local do navegador (localStorage)
      localStorage.setItem('tema', modoEscuroAtivo ? 'dark' : 'light');

      //  atualiza os ícones e imagem de fundo com base no tema novo
      atualizarImagemModo();
    });
  }

  //  se os botões de aumentar/diminuir fonte existirem
  if (aumentarBtn && diminuirBtn) {
    //  Quando clicar no botão de aumentar fonte, muda o font-size do body
    aumentarBtn.addEventListener('click', () => {
      document.body.style.fontSize = '1.2em';
    });

    //  1uando clicar no botão de diminuir fonte, volta pro tamanho padrão
    diminuirBtn.addEventListener('click', () => {
      document.body.style.fontSize = '1em';
    });
  }

  //  validação simples do formulário de contato
  const formContato = document.getElementById("contato-form");
  if (formContato) {
    formContato.addEventListener("submit", function(event) {
      event.preventDefault(); //  impede o envio real do formulário
      alert("Página em construção"); //   mostra alerta temporário
    });
  }

  //  executa a função de atualização visual do tema assim que a página carrega
  atualizarImagemModo();
});





