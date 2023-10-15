import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AnnoncesComponent} from './annonces/annonces.component';
import {ListeAnnoncesComponent} from './liste-annonces/liste-annonces.component';
import {EstimationCoutComponent} from './estimation-cout/estimation-cout.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnoncesComponent,
    ListeAnnoncesComponent,
    EstimationCoutComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
