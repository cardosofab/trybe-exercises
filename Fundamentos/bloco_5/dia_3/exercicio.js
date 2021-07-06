function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

function preencherDias() {

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let listaDeDias = document.getElementById('days');

  
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let numberDay = dezDaysList[i];
    let listaDeDias = document.getElementById('days');
    let dias = document.createElement('li');
    dias.innerText = numberDay;
    listaDeDias.appendChild(dias);
    dias.className = 'day';
    if (numberDay === 24 || numberDay === 25 || numberDay === 31) {
      dias.classList.add('holiday');
    }
    if (numberDay === 4 || numberDay === 11 || numberDay === 18 || numberDay === 25) {
      dias.classList.add('friday');
    }
  }
}
preencherDias();

// Exercício 2:

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

// Adicione a este botão a ID "btn-holiday" .

// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function botaoHoliday(string) {
  let divBotao = document.querySelector('.buttons-container');
  let botaoFeriados = document.createElement('button');
  botaoFeriados.innerText = string;
  botaoFeriados.id = 'btn-holiday';
  divBotao.appendChild(botaoFeriados);
}

botaoHoliday('Feriados');

// Exercício 3:

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function corBotaoHolidayClick() {
  let diasFeriados = document.querySelectorAll('.holiday');
  for (let i = 0; i < diasFeriados.length; i += 1) {
    if (diasFeriados[i].style.backgroundColor === 'green') {
      diasFeriados[i].style.backgroundColor = '#eee';
    } else {
      diasFeriados[i].style.backgroundColor = 'green';
    }
    
    
  }
  
}
let botaoFeriados = document.querySelector('#btn-holiday');
botaoFeriados.addEventListener('click',corBotaoHolidayClick);

// Exercício 4

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

// Adicione a este botão o ID "btn-friday" .

// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function botaoFriday(dia) {
  let divBotaoSexta = document.querySelector('.buttons-container');
  let botaoSextas = document.createElement('button');
  botaoSextas.innerText = dia;
  botaoSextas.id = 'btn-friday';
  divBotaoSexta.appendChild(botaoSextas);
}

botaoFriday('Sexta-feira');

// Exercício 5

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function textoBotaoSextasClick() {
  let diasSextas = document.querySelectorAll('.friday');
  let sextas = ['4','11','18','25'];
  for (let i = 0; i < diasSextas.length; i += 1) {
    if (diasSextas[i].innerText === sextas[i]) {
      diasSextas[i].innerText = 'SEXTOU';
    } else {
      diasSextas[i].innerText = sextas[i];
    }
  }
  
}
let botaoSextasFeiras = document.querySelector('#btn-friday');
botaoSextasFeiras.addEventListener('click',textoBotaoSextasClick);

// Exercício 6:

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// Dica - Propriedade: event.target .

function zoomIn(event) {
  let diasDoMes = document.querySelector('#days');
  event.target.style.fontSize = '35px';
  
}

function zoomOut(event) {
  let diasDoMes = document.querySelector('#days');
  event.target.style.fontSize = '20px';
}

let diasDoMes = document.querySelector('#days');

  diasDoMes.addEventListener('mouseover',zoomIn);
  diasDoMes.addEventListener('mouseout',zoomOut);

//   Exercício 7:

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function tarefaPersonalizada(tarefa) {
  let divTarefa = document.querySelector('.my-tasks');
  let task = document.createElement('span');
  task.innerText = tarefa;
  divTarefa.appendChild(task); 
 }

 tarefaPersonalizada('Cozinhar');