import { Component, OnInit } from '@angular/core';
import{ PopularService } from "../popular.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  popularInformation:any;
  

  constructor(private _popularMovies: PopularService) { }
  

  ngOnInit() {
  }
  
displayPopular(movie:string){
    this._popularMovies.popularInformation().subscribe( data=>{
      console.log('displayPopular :', data);
      this.popularInformation = data;
        })
}
}