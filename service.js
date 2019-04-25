//require
const request = require('request-promise-native');
/*promise native permet de faire des requetes qui renvoie deja des promesse
-> pas besoin d'en crer à la main, ou des gerer les resolve ou les reject,
c'est fait de base*/


const rechercherColleguesParNom = (nomRecherche) =>
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

//inutile
/*
const rechercherColleguesParMatricule = (matriculeRecherche) => //, callback
{
    return new Promise((resolve, reject) => {
        request(`https://espy-collegues-api.herokuapp.com/collegues/${matriculeRecherche}`,
            { json: true }, (err, res, body) => {
                if (err) { reject("Erreur : serveur indisponible", err); }
                else if (res.statusCode >= 400 && res.statusCode <= 499) { reject("Erreur : le matricule est inconnu", res.statusMessage); }
                else if (res.statusCode >= 500 && res.statusCode <= 599) { reject("Erreur : traitement requete", res.statusMessage); }
                else {
                    resolve(colleguesTrouves = body);
                    //callback(colleguesTrouves);
                }
            });
    });
}*/


//export
exports.rechercheNom = rechercherColleguesParNom;
//exports.rechercheMatricule = rechercherColleguesParMatricule;