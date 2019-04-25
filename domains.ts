class Collegue
{
    constructor(private _matricule:string, private _nom:string,
        private _prenoms:string, private _dateDeNaissance:any,
        private _email:string, private _photoUrl:string)
    {}

    get nom() {return this._nom}
    get prenoms() {return this._prenoms}
    get matricule() {return this._matricule}
    get dateDeNaissance() {return this._dateDeNaissance}
}

export {Collegue};