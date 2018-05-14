import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';


@Injectable()
export class MovieService {
    url: string = "https://api.themoviedb.org/3/movie/550?api_key=02b6e7af54cece5c840e0819a264f3a5"


  constructor(private http: HttpClient) { }
  
    getData (){
    this.http.get(this.url)
  }

}
