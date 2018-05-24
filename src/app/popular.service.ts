import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class PopularService {
    apiKey: string = '02b6e7af54cece5c840e0819a264f3a5'
    baseUrl: string = 'https://api.themoviedb.org/3/'
    popularPage = "movie/popular?api_key="
    movie: string = ''

  constructor(private _http: HttpClient) { }

    displayPopular(){
        return this._http.get(this.baseUrl+this.popularPage+this.apiKey+'&query='+this.movie);
    }
}
