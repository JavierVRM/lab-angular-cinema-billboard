import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../Movies.service';
@Component({
  selector: 'app-MyHomeComponent',
  templateUrl: './MyHomeComponent.component.html',
  styleUrls: ['./MyHomeComponent.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  homeMovies:Array<any>=this.moviesService.getMovies()
  constructor(private moviesService:MoviesService){}
  ngOnInit() {
    console.log()
  }
}
