const states = ['Selecione', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe','Tocantins'];

function optionState() {
  const selectState = document.getElementById('state');
  for (let i = 0; i < states.length; i += 1) {
    const optionState = document.createElement('option');
    optionState.innerText = states[i];
    selectState.appendChild(optionState);
  }  
}

function preventDefault() {
  const button = document.querySelector('button');
  button.addEventListener('click', function (event) {
    event.preventDefault();
  })
}

window.onload = function () {
  optionState();
  preventDefault();  
}