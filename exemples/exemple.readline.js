// récupération du module `readline`
var readline = require('readline');

// création d'un objet `rl` permettant de récupérer la saisie utilisateur
var saisi = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// récupération de la saisie utilisateur
saisi.question('Vous allez bien ? : ', function(saisie) {

    // la variable `saisie` contient la saisie effectuée
    console.log(`Vous avez saisi : ${saisie}`);

    saisi.close();
    // attention, une fois l'interface fermée, la saisie n'est plus possible
});