import { Component, OnInit } from '@angular/core';
import{ MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-titles',
  templateUrl: './movie-titles.component.html',
  styleUrls: ['./movie-titles.component.css']
})
export class MovieTitlesComponent implements OnInit {
  data:any;
  movieTitles: string = "";
  resultsFromService:any;//variable for results from service
  movieInformation:any;
 
    constructor(private _movieTitles: MovieService ) {
      
    }

  ngOnInit() {}
  
  movieEntry(movie:string){
    this._movieTitles.movieInformation().subscribe( data=>{
      console.log('movieEntry :', data);
      this.movieInformation = data;
        })
    
    }
    
}
