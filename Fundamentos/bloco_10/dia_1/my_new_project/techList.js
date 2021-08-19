function techList(arrayTech, student) {
  if (arrayTech.length === 0) return 'Vazio!';
  const arrayOrdenada = arrayTech.sort();
  const result = [];
  const mapping = arrayOrdenada.map((tech) => result.push({ tech: tech, name: student } ));
  return result;
}

module.exports = techList;