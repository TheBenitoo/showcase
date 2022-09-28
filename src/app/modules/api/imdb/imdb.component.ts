import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.scss']
})
export class ImdbComponent implements OnInit {

  movies :any;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovieApi("Avengers Endgame").subscribe(
      (data: any) => {
        this.movies = data.Search;
      }
    );
  }
}
