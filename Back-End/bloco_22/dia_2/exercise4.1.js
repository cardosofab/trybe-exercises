const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf8')
  .then(fileContent => {
    return JSON.parse(fileContent);
  })
  .then(simpsons => {
    return simpsons.map(({id, name}) => console.log(`${id} - ${name}`));
  });

  