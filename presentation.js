//require
var readline = require('readline');


// fonction affichage menu
var start = function()
{
    console.log("1. Rechercher un collègue par nom");
    console.log("99. Sortir");
}

// objet pour recuperer la saisi utilisateur
var saisi = readline.createInterface( 
    { input: process.stdin, output: process.stdout }  
);

//fonction interaction
var interaction = function()
{

    // récupération de la saisie utilisateur
    saisi.question("Que voulez vous faire : ",function(entree)
    {
        //console.log(`Votre choix : ${saisi}`);
        if (entree==1)
        {
            console.log(">> Recherche en cours du nom XXX");
            start();
            interaction();
        }
        else if (entree==99)
        {
            console.log("Au revoir");
            process.exit(0);
            saisi.close();
        }
        // attention, une fois l'interface fermée, la saisie n'est plus possible
    });

}


/* il a un order de lecture */
//export  
exports.debut = start;
exports.service = interaction;