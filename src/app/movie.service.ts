import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class MovieService {
    //fullUrl = https://api.themoviedb.org/3/search/movie?api_key=098dc649f81bdf649cd8443c51528d2d&language=en-US&query=%22Rush%20Hour%22&page=1&include_adult=false;
    apiKey: string = '02b6e7af54cece5c840e0819a264f3a5'
    baseUrl: string = 'https://api.themoviedb.org/3/'
    moviePage = "search/movie?api_key="
    movie: string = ''
    movieTitlesArr: any;
    results: any;
    
    popMoviePage: string ='movie/popular?api_key='

  constructor(private _http: HttpClient) { }
  
  
    submitMovieTitle(title){
    this.movieTitlesArr.push(title)
  }
    
    movieInformation(){
        return this._http.get(this.baseUrl+this.moviePage+this.apiKey+'&query='+this.movie);
    }
    
    popularMoive(){
      return.this._http.get(this.baseURL+this.popMoviePage+this.apiKey+'&query='+this.movie);
    }

}
