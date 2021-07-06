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
  console.log(diasFeriados);
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
 

//  Exercício 8:

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function labelColor(cor) {
  let divTarefa = document.querySelector('.my-tasks');
  let divLegenda = document.createElement('div');
  divLegenda.className = 'task';
  divLegenda.style.backgroundColor = cor;
  divTarefa.appendChild(divLegenda);
}

labelColor('green');

// Exercício 9:

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function changingClass() {
  let divLegenda = document.querySelector('.task');
  if (divLegenda.className === 'task-selected') {
    divLegenda.className = 'task';
  } else {
    divLegenda.className = 'task-selected';
  }  
}

 let divLegenda = document.querySelector('.task');
 divLegenda.addEventListener('click',changingClass);

//  Exercício 10:

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function diasCor(event) {
  let divSelected = document.querySelector('.task-selected');
  if (event.target.style.color === divSelected.style.backgroundColor) {
    event.target.style.color = 'rgb(119,119,119)'
  } else {
    event.target.style.color = divSelected.style.backgroundColor;
  }
    
}
let todosOsDias = document.querySelector('#days');
todosOsDias.addEventListener('click',diasCor);

// Bônus: 

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".

// Ao pressionar a tecla "enter" o evento também deverá ser disparado.

// Dica - Propriedade: keyCode .

function addAppointment() {
  let caixaDeTexto = document.querySelector('input');
  let compromissos = document.querySelector('.input-container h3');
  let compromisso = document.createElement('li');
  compromisso.innerText = caixaDeTexto.value;
  compromissos.appendChild(compromisso);
  if (caixaDeTexto.value === '') {
    alert('Nenhum carectere inserido');
  }
  caixaDeTexto.value = '';
}

let caixaDeTexto = document.querySelector('input');
caixaDeTexto.addEventListener('change',addAppointment);


   
  


