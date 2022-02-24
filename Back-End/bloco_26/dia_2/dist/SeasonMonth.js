"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Seasons_1 = __importDefault(require("./Seasons"));
const Months_1 = __importDefault(require("./Months"));
const seasonsHemisphere = {
    norte: {
        janeiro: Seasons_1.default.INVERNO,
        fevereiro: Seasons_1.default.INVERNO,
        março: [Seasons_1.default.INVERNO, Seasons_1.default.PRIMAVERA],
        abril: Seasons_1.default.PRIMAVERA,
        maio: Seasons_1.default.PRIMAVERA,
        junho: [Seasons_1.default.PRIMAVERA, Seasons_1.default.VERÃO],
        julho: Seasons_1.default.VERÃO,
        agosto: Seasons_1.default.VERÃO,
        setembro: [Seasons_1.default.VERÃO, Seasons_1.default.OUTONO],
        outubro: Seasons_1.default.OUTONO,
        novembro: Seasons_1.default.OUTONO,
        dezembro: [Seasons_1.default.OUTONO, Seasons_1.default.INVERNO],
    },
    sul: {
        janeiro: Seasons_1.default.VERÃO,
        fevereiro: Seasons_1.default.VERÃO,
        março: [Seasons_1.default.VERÃO, Seasons_1.default.OUTONO],
        abril: Seasons_1.default.OUTONO,
        maio: Seasons_1.default.OUTONO,
        junho: [Seasons_1.default.OUTONO, Seasons_1.default.INVERNO],
        julho: Seasons_1.default.INVERNO,
        agosto: Seasons_1.default.INVERNO,
        setembro: [Seasons_1.default.INVERNO, Seasons_1.default.PRIMAVERA],
        outubro: Seasons_1.default.PRIMAVERA,
        novembro: Seasons_1.default.PRIMAVERA,
        dezembro: [Seasons_1.default.PRIMAVERA, Seasons_1.default.VERÃO],
    }
};
function getHemisphere() {
    const hemispheres = ['Sul', 'Norte'];
    const chosenHemisphere = readline_sync_1.default.keyInSelect(hemispheres, 'Qual hemisfério deseja?', { cancel: 'SAIR' });
    return hemispheres[chosenHemisphere].toLowerCase();
}
function getMonth() {
    const months = [];
    for (const month in Months_1.default) {
        if (Months_1.default.hasOwnProperty(month)) {
            months.push(month);
        }
    }
    const chosenMonth = readline_sync_1.default.keyInSelect(months, 'Qual o mês deseja?', { cancel: 'SAIR' });
    return months[chosenMonth].toLowerCase();
}
function showSeason() {
    const hemisphere = getHemisphere();
    let month = getMonth();
    if (month === 'marco')
        month = 'março';
    const season = seasonsHemisphere[hemisphere][month];
    if (Array.isArray(season)) {
        console.log(`No hemisfério ${hemisphere}, as estações presentes no mês de ${month} são o/a ${season[0]} e o/a ${season[1]}`);
        return;
    }
    console.log(`No hemisfério ${hemisphere}, a estação presente no de mês ${month} é o/a ${season}`);
}
showSeason();
