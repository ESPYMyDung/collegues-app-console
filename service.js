//require
const request = require('request-promise-native');
/*promise native permet de faire des requetes qui renvoie deja des promesse
-> pas besoin d'en crer à la main, ou des gerer les resolve ou les reject,
c'est fait de base*/

class Service
{

    rechercherColleguesParNom(nomRecherche)
    {
        return request(`https://espy-collegues-api.herokuapp.com/collegues?nom=${nomRecherche}`,
            { json: true })
            //recupere le tableau de matricule donne par la requete
            .then(tableauMatriculeTrouves => 
                //va traiter chacune des valeur du tableau 
                // + transformation en tableau de personne (sortie de la requete suivante)
                Promise.all(tableauMatriculeTrouves.map( 
                    // requete suivante : recherche de la personnne à partir du matricule
                    mat => request(`https://espy-collegues-api.herokuapp.com/collegues/${mat}`, { json: true }))))

    }

}

//export
//const serv = new Service();
module.exports = {Service};