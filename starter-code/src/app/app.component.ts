import { Component, OnInit } from '@angular/core';
import {MoviesService} from './Movies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  homeMovies:Array<any>=this.moviesService.getMovies()
  constructor(private moviesService:MoviesService){  }
  ngOnInit() {
    console.log()
  }
}
