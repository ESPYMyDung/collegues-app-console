//require
var request = require('request');


function rechercherColleguesParNom(nomRecherche) //, callback)
{
    var URL = "https://espy-collegues-api.herokuapp.com/collegues?nom=" + nomRecherche;
    request(URL, { json: true }, function(err, res, body)
    {
        if (err) { return console.log('Erreur', err);}
        //if (res) { return console.log(res);}
        var tableauMatriculeTrouves = body;

        //if (tableauMatriculeTrouves.length==0)

        for (var i=0; i<tableauMatriculeTrouves.length;i++)
        {
            rechercherColleguesParMatricule(tableauMatriculeTrouves[i], function(colleguesTrouves)
            { 
                console.log(colleguesTrouves.nom, colleguesTrouves.prenoms, colleguesTrouves.dateDeNaissance); 
            } );

        }

        //callback(tableauColleguesTrouves);
    });
}

function rechercherColleguesParMatricule(matriculeRecherche, callback)
{
    var URL = "https://espy-collegues-api.herokuapp.com/collegues/" + matriculeRecherche;
    request(URL, { json: true }, function(err, res, body)
    {
        if (err) { return console.log('Erreur', err); }
        var colleguesTrouves = body;
        callback(colleguesTrouves);
    });
}


//export
exports.rechercheNom = rechercherColleguesParNom;
//exports.rechercheMatricule = rechercherColleguesParMatricule;