//require
var readline = require('readline');
var cheminRecherche = require("./service.js")

//gere les erreurs . sisi tres important


// fonction affichage menu
var start = function()
{
    console.log(" ");
    console.log("1. Rechercher un collègue par nom");
    console.log("99. Sortir");
    console.log(" ");
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
            //saisi.question("choisir un nom : ",function(chxNom){}
            console.log(">> Recherche en cours du nom XXX");

            cheminRecherche.rechercheNom('Potter')//, function(colleguesTrouves)
                //{ console.log(colleguesTrouves); }   );

            console.log(" ");
            start();
            interaction();
            console.log(" ");
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