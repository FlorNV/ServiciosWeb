import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/music/song';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  cancion!: Song;
  canciones!: Array<Song>;
  consulta!: string;

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
  }

  buscarCancion(){
    this.musicService.getMusic(this.consulta).subscribe(result => {
      this.canciones = new Array<Song>();
      result.data.forEach((element: any) => {
        this.cancion = new Song();
        Object.assign(this.cancion, element);
        this.canciones.push(this.cancion);
      });
    })
  }
  
  clear(){
    if(this.consulta == ""){
      this.canciones = new Array<Song>();
    }
  }
}
