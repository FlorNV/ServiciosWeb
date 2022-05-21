export class Currency {

    private _code!: string;
    private _description!: string;
    
    constructor(){}

    set code(code: string){
        this._code = code;
    }
    get code(){
        return this._code;
    }

    set description(description: string){
        this._description = description;
    }
    get description(){
        return this._description;
    }
}
