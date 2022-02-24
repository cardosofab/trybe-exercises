import readline from "readline-sync";
import Seasons from "./Seasons";
import Months from './Months';

type SeasonsHemispheres = {
  janeiro: string;
  fevereiro: string;
  março: string[];
  abril: string;
  maio: string;
  junho: string[];
  julho: string;
  agosto: string;
  setembro: string[];
  outubro: string;
  novembro: string;
  dezembro: string[];
}

type Month = {
  [key: string]: string;
}

type Meses = {
  [key: string]: string | string[];
}

type Hemispheres = {
  [key: string]: Meses;
}

const seasonsHemisphere: Hemispheres = {
  norte:  {
    janeiro: Seasons.INVERNO,
    fevereiro: Seasons.INVERNO,
    março: [Seasons.INVERNO, Seasons.PRIMAVERA],
    abril: Seasons.PRIMAVERA,
    maio: Seasons.PRIMAVERA,
    junho: [Seasons.PRIMAVERA, Seasons.VERÃO],
    julho: Seasons.VERÃO,
    agosto: Seasons.VERÃO,
    setembro: [Seasons.VERÃO, Seasons.OUTONO],
    outubro: Seasons.OUTONO,
    novembro: Seasons.OUTONO,
    dezembro: [Seasons.OUTONO, Seasons.INVERNO],
  },
  sul: {
    janeiro: Seasons.VERÃO,
    fevereiro: Seasons.VERÃO,
    março: [Seasons.VERÃO, Seasons.OUTONO],
    abril: Seasons.OUTONO,
    maio: Seasons.OUTONO,
    junho: [Seasons.OUTONO, Seasons.INVERNO],
    julho: Seasons.INVERNO,
    agosto: Seasons.INVERNO,
    setembro: [Seasons.INVERNO, Seasons.PRIMAVERA],
    outubro: Seasons.PRIMAVERA,
    novembro: Seasons.PRIMAVERA,
    dezembro: [Seasons.PRIMAVERA, Seasons.VERÃO],
  }
}

function getHemisphere(): string {
  const hemispheres = ['Sul', 'Norte'];
  const chosenHemisphere = readline.keyInSelect(hemispheres, 'Qual hemisfério deseja?', {cancel: 'SAIR'});
  

  return hemispheres[chosenHemisphere].toLowerCase();
}

function getMonth(): string {
  const months = [];
  for (const month in Months) {
    if (Months.hasOwnProperty(month)) {
      months.push(month);
    }
  }

  const chosenMonth = readline.keyInSelect(months, 'Qual o mês deseja?', {cancel: 'SAIR'});
  
  
  return months[chosenMonth].toLowerCase();
}

function showSeason() : void {
  const hemisphere = getHemisphere();
  let month = getMonth();
  
  if (month === 'marco') month = 'março';

  const season = seasonsHemisphere[hemisphere][month]
  

  if (Array.isArray(season)) {
    console.log(`No hemisfério ${hemisphere}, as estações presentes no mês de ${month} são o/a ${season[0]} e o/a ${season[1]}`);
    return;
  }
  

  console.log(`No hemisfério ${hemisphere}, a estação presente no de mês ${month} é o/a ${season}`);
}

showSeason();
