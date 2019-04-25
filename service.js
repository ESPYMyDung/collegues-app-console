//require
const request = require('request-promise-native'); //-promise-native

const rechercherColleguesParNom = (nomRecherche) =>
{
    return new Promise((resolve, reject) =>
    {
        request(`https://espy-collegues-api.herokuapp.com/collegues?nom=${nomRecherche}`, //`https://espy-collegues-api.herokuapp.com/collegues?nom=${nomRecherche}`
            { json: true }, (err, res, body) =>
        {
            if (err) {reject("Erreur : serveur indisponible", err);}
            else if (res.statusCode >= 400 && res.statusCode <= 499)
            {reject("Erreur : le nom est inconnu", res.statusMessage);} 
            else if (res.statusCode >= 500 && res.statusCode <= 599)
            {reject("Erreur : traitement requete", res.statusMessage);} 
            else 
            {
                resolve(tableauMatriculeTrouves = body);
                /*
                tableauMatriculeTrouves.array.forEach(element =>
                {
                    rechercherColleguesParMatricule(element, (colleguesTrouves) =>
                    { resolve(colleguesTrouves.nom, colleguesTrouves.prenoms, colleguesTrouves.dateDeNaissance); } );
                });*/
            }
        } );
    });
}


const rechercherColleguesParMatricule = (matriculeRecherche) => //, callback
{
    return new Promise((resolve, reject) =>
    {
        request(`https://espy-collegues-api.herokuapp.com/collegues/${matriculeRecherche}`, 
            { json: true }, (err, res, body) =>
        {
            if (err) {reject("Erreur : serveur indisponible", err);}
            else if (res.statusCode >= 400 && res.statusCode <= 499)
            {reject("Erreur : le matricule est inconnu", res.statusMessage);} 
            else if (res.statusCode >= 500 && res.statusCode <= 599)
            {reject("Erreur : traitement requete", res.statusMessage);} 
            else 
            {
                resolve(colleguesTrouves = body);
                //callback(colleguesTrouves);
            }
        });
    });
}


//export
exports.rechercheNom = rechercherColleguesParNom;
exports.rechercheMatricule = rechercherColleguesParMatricule;