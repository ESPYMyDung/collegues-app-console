//require
const request = require('request'); //-promise-native


const rechercherColleguesParNom = (nomRecherche) =>
{
    //const URL = "https://espy-collegues-api.herokuapp.com/collegues?nom=" + nomRecherche;
    request(`https://espy-collegues-api.herokuapp.com/collegues?nom=${nomRecherche}`, 
        { json: true }, (err, res, body) =>
    {
        if (err) {console.log("Erreur : serveur indisponible", err);}
        else if (res.statusCode >= 400 && res.statusCode <= 499)
        {console.log("Erreur : le matricule est inconnu", res.statusMessage);} 
        else if (res.statusCode >= 500 && res.statusCode <= 599)
        {console.log("Erreur : traitement requete", res.statusMessage);} 
        else 
        {
            const tableauMatriculeTrouves = body;

            tableauMatriculeTrouves.array.forEach(element =>
            {
                rechercherColleguesParMatricule(element, (colleguesTrouves) =>
                { console.log(colleguesTrouves.nom, colleguesTrouves.prenoms, colleguesTrouves.dateDeNaissance); } );
            });
        }
    });
}

const rechercherColleguesParMatricule = (matriculeRecherche, callback) =>
{
    //const URL = "https://espy-collegues-api.herokuapp.com/collegues/" + matriculeRecherche;
    request(`https://espy-collegues-api.herokuapp.com/collegues/${matriculeRecherche}`, { json: true }, (err, res, body) =>
    {
        if (err) {console.log("Erreur : serveur indisponible", err);}
        else if (res.statusCode >= 400 && res.statusCode <= 499)
        {console.log("Erreur : le matricule est inconnu", res.statusMessage);} 
        else if (res.statusCode >= 500 && res.statusCode <= 599)
        {console.log("Erreur : traitement requete", res.statusMessage);} 
        else 
        {
            const colleguesTrouves = body;
            callback(colleguesTrouves);
        }
    });
}


//export
exports.rechercheNom = rechercherColleguesParNom;