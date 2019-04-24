//require
var request = require('request');


function rechercherColleguesParNom(nomRecherche)
{
    var URL = "https://espy-collegues-api.herokuapp.com/collegues?nom=" + nomRecherche;
    request(URL, { json: true }, function(err, res, body)
    {
        if (err) {console.log("Erreur : serveur indisponible", err);}
        else if (res.statusCode >= 400 && res.statusCode <= 499)
        {console.log("Erreur : le nom est inconnu", res.statusMessage);} 
        else if (res.statusCode >= 500 && res.statusCode <= 599)
        {console.log("Erreur : traitement requete", res.statusMessage);} 
        else 
        {
            var tableauMatriculeTrouves = body;

            for (var i=0; i<tableauMatriculeTrouves.length;i++)
            {
                rechercherColleguesParMatricule(tableauMatriculeTrouves[i], function(colleguesTrouves)
                { 
                    console.log(colleguesTrouves.nom, colleguesTrouves.prenoms, colleguesTrouves.dateDeNaissance); 
                } );
            }
        }
    });
}

function rechercherColleguesParMatricule(matriculeRecherche, callback)
{
    var URL = "https://espy-collegues-api.herokuapp.com/collegues/" + matriculeRecherche;
    request(URL, { json: true }, function(err, res, body)
    {
        if (err) {console.log("Erreur : serveur indisponible", err);}
        else if (res.statusCode >= 400 && res.statusCode <= 499)
        {console.log("Erreur : le matricule est inconnu", res.statusMessage);} 
        else if (res.statusCode >= 500 && res.statusCode <= 599)
        {console.log("Erreur : traitement requete", res.statusMessage);} 
        else 
        {
            var colleguesTrouves = body;
        callback(colleguesTrouves);
        }   
    });
}


//export
exports.rechercheNom = rechercherColleguesParNom;