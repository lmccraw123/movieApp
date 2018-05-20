import { Component, OnInit } from '@angular/core';
import{ MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-titles',
  templateUrl: './movie-titles.component.html',
  styleUrls: ['./movie-titles.component.css']
})
export class MovieTitlesComponent implements OnInit {
 movieTitles: string = "";
 results:any;
 overview: string = "" ;
 title: string = "";
 vote_average: any;
 release_date: any;
 data:any;

    constructor(private _movieTitles: MovieService ) {
      
    }

  ngOnInit() {}
  
  movieEntry(){
    this._movieTitles.movieInformation().subscribe( data=>{
      console.log('test :', data);
      this.overview = data.results[0].overview;
      this.title = data.results[0].title;
      this.vote_average = data.results[0].vote_average;
      this.release_date = data.results[0].release_date;
    })
  }

  onAddTitle(title:string){
    if( title ){
      this._movieTitles.submitMovieTitle(title)
      this.movieTitles = "";
    }
}
}
