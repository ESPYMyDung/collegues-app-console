//require
const readline = require('readline');
const cheminRecherche = require("./service.js")

// fonction affichage menu
const menu = () =>
{
    console.log(" ");
    console.log("1. Rechercher un collègue par nom");
    console.log("99. Sortir");
    console.log(" ");
}

// objet pour recuperer la saisi utilisateur
const saisi = readline.createInterface( 
    { input: process.stdin, output: process.stdout }  
);

//fonction interaction
const interaction = () =>
{

    // récupération de la saisie utilisateur
    saisi.question("Que voulez vous faire : ",(entree) =>
    {
        if (entree==1)
        {
            saisi.question("choisir un nom : ",(chxNom) =>
            {
                console.log(`>> Recherche en cours du nom ${chxNom}`);

                cheminRecherche.rechercheNom('chxNom')
                    .then(listepers => Promise.all(listepers)
                        .then(mat=> cheminRecherche.rechercheMatricule(mat)
                            .then(pers=> console.log(pers.nom, pers.prenoms, pers.dateDeNaissance))
                            )  
                        )
                    .catch(err=> console.log(err) );

                    
                menu();
                interaction();
            });
            
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


/* il a un ordre de lecture */
//export  
exports.debut = menu;
exports.service = interaction;