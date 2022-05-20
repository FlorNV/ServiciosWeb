import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies/movie';
import { Pelicula } from 'src/app/models/movies/pelicula';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies!: Array<Movie>;
  movie!: Movie;
  text!: string;
  notFound: boolean = false;

  constructor(private moviesService: MovieService) { 
    // this.loadMovies();
  }

  ngOnInit(): void {
  }

  clear(){
    if(this.text == ''){
      this.notFound = !this.notFound;
      this.loadMovies();
    }
  }

  loadMovies(){
    this.moviesService.getMovies().subscribe((result) => {
      this.movies = new Array<Movie>();

      while(this.movies.length != 9){
        this.movie = new Movie();
        Object.assign(this.movie, result.results[Math.floor(Math.random() * result.results.length)]);
        if(this.isDuplicated(this.movie._id)==false){
          this.movies.push(this.movie);
        }
      }
    })
  }
  
  isDuplicated(id: string){
    let duplicated = false;
    for(let element of this.movies){
      if(element._id == id){
        duplicated = true;
        break;
      }
    }
    return duplicated;
  }

  search(){
    this.moviesService.getMoviesByName(this.text).subscribe(result => {
      this.movies = new Array<Movie>();
      result.results.forEach((element: any) => {
        this.movie = new Movie();
        Object.assign(this.movie, element);
        this.movies.push(this.movie);
      });
      if(this.movies.length == 0){
        this.notFound = !this.notFound;
      }
    })
  }
}
