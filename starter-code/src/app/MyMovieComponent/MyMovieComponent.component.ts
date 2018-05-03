import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-MyMovieComponent',
  templateUrl: './MyMovieComponent.component.html',
  styleUrls: ['./MyMovieComponent.component.css'],
  providers: [MoviesService]
})
export class MyMovieComponentComponent implements OnInit {
  movie: Object = {};
  id: number = 0;
  constructor(private router: ActivatedRoute, private MoviesService: MoviesService) {
    this.router.params.subscribe((params) => this.id = Number(params.id));
   }
  ngOnInit() {
    this.movie = this.MoviesService.getMovie(this.id);
    console.log(this.id);
  }
}
