//require
/*const readline = require('readline');
const {Service} = require("./service.ts")
const {Collegue} = require("./domains")*/

//import
import readline from 'readline';
import {Service} from './service';
import {Collegue} from './domains';

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
        if (entree=='1')
        {
            saisi.question("choisir un nom : ",(chxNom: string) =>
            {
                console.log(`>> Recherche en cours du nom ${chxNom}`);

                let mesServices = new Service();

                mesServices.rechercherColleguesParNom(chxNom)
                    .then((tabCols:any) =>
                    { tabCols.forEach(
                        (pers:Collegue) => console.log(pers.nom, pers.prenoms, pers.dateDeNaissance));
                    } )
                    .catch((err:any)=> console.log('oops', err.error) )
                    .then( () => { menu(); interaction(); });  
            });    
        }
        else if (entree=='99')
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