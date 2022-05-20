import { Album } from "./album";
import { Artist } from "./artist";

export class Song {
    id!:number;
    readable!: boolean;
    title!: string;
    title_short!: string;
    title_version!: string;
    link!: string;
    duration!: string;
    rank!: string;
    explicit_lyrics!: boolean;
    explicit_content_lyrics!: number;
    explicit_content_cover!: number;
    preview!: string;
    md5_image!: string;
    artist!: Artist;
    album!: Album;
    type!: string;
    
    constructor(){}
}
