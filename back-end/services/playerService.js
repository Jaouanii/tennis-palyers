
// import * as fs from "node:fs/promises";

import listPlayers from '../json/headtohead.json' assert { type: 'json' };

let getAllPlayers = () => listPlayers;

let getPlayerById = (id) => {
    const player = listPlayers.players.find((object) =>
        object.id === +id);
    // ?? => null coalescing: si player existe alors il l'affiche sinon envoie erreur
    return player ?? { erreur: "ce joueur n'existe pas!" };
};


// console.log(player(52));

export { getAllPlayers, getPlayerById }