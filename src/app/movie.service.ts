import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class MovieService {
    apiKey: string = "02b6e7af54cece5c840e0819a264f3a5"
    baseURL: string = 'https://api.themoviedb.org/3/movie/550?'
    movie: string = 'movie='
    movieTitlesArr: any[] = [];

  constructor(private http: HttpClient) { }
  
    getData (){
  }
  
    submitMovieTitle(title){
    this.movieTitlesArr.push(title)
  }

}
