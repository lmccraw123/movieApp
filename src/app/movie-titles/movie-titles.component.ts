import { Component, OnInit } from '@angular/core';
import{ MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-titles',
  templateUrl: './movie-titles.component.html',
  styleUrls: ['./movie-titles.component.css']
})
export class MovieTitlesComponent implements OnInit {
 movieTitles: string = "";
 movieTitlesArr: string[] = [];
    serviceArr: string[];
 
 

    constructor(private _movieTitles: MovieService ) { 
    this.serviceArr = this._movieTitles.movieTitlesArr
    
  }

  ngOnInit() {
  }
  

  onAddTitle(title:string){
    if( title ){
      this._movieTitles.submitMovieTitle(title)
      this.movieTitles = "";
    }

}

}
