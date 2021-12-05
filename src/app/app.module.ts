import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AnnuaireComponent } from './components/annuaire/annuaire.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaNComponent } from './components/agenda/agenda-n/agenda-n.component';
import { DetailsCompteComponent } from './components/details-compte/details-compte.component';
import { HomeComponent } from './components/home/home.component';
import { ActivationComponent } from './components/activation/activation.component';
import { LinkedinParcoursComponent } from './components/linkedin-parcours/linkedin-parcours.component';
import { QuestionnairesComponent } from './components/questionnaires/questionnaires.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AnnuaireComponent,
    AgendaComponent,
    AgendaNComponent,
    DetailsCompteComponent,
    HomeComponent,
    ActivationComponent,
    LinkedinParcoursComponent,
    QuestionnairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
