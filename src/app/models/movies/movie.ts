import { Actor } from "./actor";
import { Director } from "./director";
import { Episode } from "./episode";
import { Escritor } from "./escritor";
import { OtherTitle } from "./other-title";

export class Movie {

    // titulo!: string;
    // descripcion!: string;
    // anio!: number;
    // imagen!: string;

    actors!:Array<Actor>;
    directors!:Array<Director>;
    escritors!: Array<Escritor>;
    otherTitles!: Array<OtherTitle>;
    _id!: string;
    image!: string;
    title!: string;
    rating!: string;
    year!: string;
    titleOriginal!: string;
    uuid!: string;
    description!: string;
    genres!: string;
    countries!: string;
    release!: string;
    embedUrls!: string;
    index!: number;
    episodes!: Array<Episode>;
    createdAt!: string;
    updatedAt!: string;
    
    constructor(){
        
    }
}
