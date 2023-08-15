import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PageNotFoundComponent,
  MovieListComponent,
  TvListComponent
} from './pages';

const routes: Routes = [
  {path: 'movies-list', component: MovieListComponent},
  {path: 'tv-list', component: TvListComponent},
  {path: '', redirectTo: '/movies-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
