import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular"
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { AppComponent } from './app.component';
import { MovieTitlesComponent } from './movie-titles/movie-titles.component';
import { AppRoutingModule } from './/app-routing.module';
import { routes } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent, MovieTitlesComponent
  ],
  imports: [
    BrowserModule, 
    ClarityModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    routes,
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
