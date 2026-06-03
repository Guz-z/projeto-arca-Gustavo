const indicadores = document.querySelectorAll('.indicador');
indicadores.forEach((ind, index) => {
  ind.addEventListener('click', () => {
    document.querySelector('.indicador.ativo').classList.remove('ativo');
    ind.classList.add('ativo');
  });
});

document.querySelector('.seta-esquerda').addEventListener('click', () => {
  console.log('Seta esquerda clicada');
});

document.querySelector('.seta-direita').addEventListener('click', () => {
  console.log('Seta direita clicada');
});