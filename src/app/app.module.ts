import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { 
  AutocompleteComponent,
  MovieItemComponent,
  MovieContainerComponent,
  HeaderComponent,
  FooterComponent,
  DetailItemComponent
} from './components';
import { FirstLayoutComponent } from './layout/first-layout/first-layout.component';
import {
  MovieListComponent,
  PageNotFoundComponent,
  TvListComponent,
  AutenticateComponent
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    MovieContainerComponent,
    MovieItemComponent,
    AutocompleteComponent,
    HeaderComponent,
    FooterComponent,
    FirstLayoutComponent,
    MovieListComponent,
    PageNotFoundComponent,
    TvListComponent,
    DetailItemComponent,
    AutenticateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
