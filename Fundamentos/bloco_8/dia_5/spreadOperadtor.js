// Faça uma lista com esportes
const sports = ['Soccer', 'Table tennis', 'Judo'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Wrestling', 'Jiu-jitsu', 'Surf'];

const allSports = (sports, additional) => {
  // Esreva sua função aqui
  const mySports= [...sports, ...additional];
  return mySports;
};

console.log(allSports(sports, additionalItens));