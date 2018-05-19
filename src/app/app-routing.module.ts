import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieTitlesComponent } from './movie-titles/movie-titles.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: []
})
export class AppRoutingModule { }

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'navigation' , component: NavigationComponent },
    { path: 'movieTitles', component: MovieTitlesComponent }
   
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


