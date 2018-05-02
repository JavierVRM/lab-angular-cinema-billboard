import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import movies from '../sample-movies';

export interface Movie {
        id: Number;
        title: String;
        poster: String;
        synopsis: String;
        genres: Array <string>;
        year: Number;
        director: String;
        actors: Array <string>;
        hours: Array <string>;
        room: Number;
}


@Injectable()
export class MoviesService {
    movies: Array<Movie> = movies;

constructor() { }

    getMovies() {
        return this.movies;
    };
    getMovie(id) {
        this.movies.forEach( (e) => {
           if (e.id === id) {
               return e;
           }
        });
    }

}
