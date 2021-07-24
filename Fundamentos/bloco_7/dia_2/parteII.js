const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const exercicio1 = (object,key,value) => {
  object[key] = value;
  console.log(object);
}

exercicio1(lesson2,'turno','manhã');

// 2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = object => {
  const keys = Object.keys(object);
  console.log(keys);
}
listKeys(lesson1);

// 3.Crie uma função para mostrar o tamanho de um objeto.

const lengthObject = object => {
  const arrayObject = Object.entries(object);
  const length = arrayObject.length;
  console.log(length);
}

lengthObject(lesson1);

// 4.Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValues = object => {
  const values = Object.values(object);
  console.log(values);
}

objectValues(lesson1);

// 5.Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

// 6.Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numberStudents = () => {
  const studentsLesson1 = allLessons.lesson1.numeroEstudantes;
  const studentsLesson2 = allLessons.lesson2.numeroEstudantes;
  const studentsLesson3 = allLessons.lesson3.numeroEstudantes;
  console.log(studentsLesson1 + studentsLesson2 + studentsLesson3);
}

numberStudents();

// 7.Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:


const getValueByNumber = (object, positionKey) => {
  const objectValues = Object.values(object);
  const value = objectValues[positionKey];
  return value;
}

console.log(getValueByNumber(lesson1, 0));

// 8.Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:


const verifyPair = (object, key, value) => {
  const arrayPair = Object.entries(lesson3);
  for (let i = 0; i < arrayPair.length; i += 1) {
    for (let j = 0; j < arrayPair[i].length; j += 1) {
      if (key === arrayPair[i][j] && value === arrayPair[i][j+1]) {
        return true;
      }
    }  
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

console.log(Object.entries(lesson3)[1].length);

// Bônus

// 1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const studentsMath = () => {
  const subject = Object.keys(allLessons);
  let resultado = 0;
  for (let i in subject) {
    if (allLessons[subject[i]].materia === 'Matemática') {
      resultado += allLessons[subject[i]].numeroEstudantes;
    }  
  }
  return resultado;
}

console.log(studentsMath());
