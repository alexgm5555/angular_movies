import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { 
  AutocompleteComponent,
  MovieItemComponent,
  MovieContainerComponent,
  HeaderComponent,
  FooterComponent,
} from './components';
import { FirstLayoutComponent } from './layout/first-layout/first-layout.component';
import { MovieListComponent, PageNotFoundComponent } from './pages';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
