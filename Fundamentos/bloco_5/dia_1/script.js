let titulo = document.querySelector('h1');
titulo.style.background = 'green';
let topicos = document.querySelectorAll('.emergency-tasks h3');
let blocos = document.querySelectorAll('.emergency-tasks div');
for (let i = 0; i < topicos.length; i += 1) {
  topicos[i].style.background = 'purple';
  blocos[i].style.background = 'salmon';
}
let topRight = document.querySelectorAll('.no-emergency-tasks h3');
let blocosRight = document.querySelectorAll('.no-emergency-tasks div');
for (let i = 0; i < topRight.length; i += 1) {
  topRight[i].style.background = 'red';
  blocosRight[i].style.background = 'blue';
}
let rodape = document.querySelector('#footer-container');
rodape.style.background = '#D9FFF8';  

