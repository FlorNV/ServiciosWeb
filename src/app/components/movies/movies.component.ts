import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie> = [];

  constructor() { 
    this.movies = [
      {
        titulo: 'El proyecto Adam',
        descripcion:
          'Tras un aterrizaje forzoso en 2022, un viajero del tiempo, forma equipo con su yo de 12 años para salvar el futuro.',
        anio: 2022,
        imagen: 'El_proyecto_Adam.jpg',
      },
      {
        titulo: 'Luca',
        descripcion:
          'Luca es un joven monstruo marino que pasará un verano inolvidable en la costa italiana. ¿Te sumas?',
        anio: 2021,
        imagen: 'Luca.jpg',
      },
      {
        titulo: 'Matrix: Resurrecciones',
        descripcion:
          'Neo y Trinity están de vuelta para liberar tu mente. Cuestiona todo lo que ves y haz tu elección.',
        anio: 2021,
        imagen: 'Matrix_Resurrections.jpg',
      },
      {
        titulo: 'Free Guy',
        descripcion:
          'Un cajero de un banco descubre que en realidad es un personaje sin papel dentro de un brutal videojuego.',
        anio: 2021,
        imagen: 'Free_Guy.jpg',
      },
      {
        titulo: 'Red',
        descripcion:
          'Mei ya tenía bastante con su vida. Nunca pensó que también sería un panda rojo gigante.',
        anio: 2022,
        imagen: 'Red.jpg',
      },
      {
        titulo: '¡Madre!',
        descripcion:
          'Ella intenta construirle un paraíso, pero no existe la paz en esta lucha entre el egoísmo divino y el instinto terrenal.',
        anio: 2017,
        imagen: 'Madre.jpg',
      },
      {
        titulo: 'Un lugar en silencio',
        descripcion:
          'No hables, no llores... no hagas el más mínimo sonido si quieres vivir un día más.',
        anio: 2018,
        imagen: 'Un_lugar_en_silencio.jpg',
      },
      {
        titulo: 'Lucy',
        descripcion:
          'Temía por lo que le sucedería tras ser obligada a transportar drogas, pero recibió algo inimaginable: superpoderes.',
        anio: 2014,
        imagen: 'Lucy.jpg',
      },
      {
        titulo: 'Llámame por tu nombre',
        descripcion:
          'Un adolescente establece un vínculo con el asistente de investigación de su padre que les cambia la vida.',
        anio: 2019,
        imagen: 'Llamame_por_tu_nombre.jpg',
      },
    ];
  }

  ngOnInit(): void {
  }

}
