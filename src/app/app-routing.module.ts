import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieTitlesComponent } from './movie-titles/movie-titles.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: []
})
export class AppRoutingModule { }

export const router: Routes = [
    { path: 'movie-titles', component: MovieTitlesComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


