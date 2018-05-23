import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular"
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { MovieTitlesComponent } from './movie-titles/movie-titles.component';
import { AppRoutingModule } from './/app-routing.module';
import { routes } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent, MovieTitlesComponent, NavigationComponent, HomeComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule, 
    ClarityModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    routes
  ],
  providers: [ MovieService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
