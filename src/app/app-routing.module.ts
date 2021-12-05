import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnuaireComponent } from './components/annuaire/annuaire.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AgendaNComponent } from './components/agenda/agenda-n/agenda-n.component';
import { DetailsCompteComponent } from './components/details-compte/details-compte.component';
import { HomeComponent } from './components/home/home.component';
import { ActivationComponent } from './components/activation/activation.component';
import { LinkedinParcoursComponent } from './components/linkedin-parcours/linkedin-parcours.component';
import { QuestionnairesComponent } from './components/questionnaires/questionnaires.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'annuaire', component: AnnuaireComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'agenda/:id', component: AgendaNComponent },
  { path: 'annuaire/:id', component: DetailsCompteComponent },
  { path: 'activation', component: ActivationComponent },
  { path: 'activation/linkedinOr', component: LinkedinParcoursComponent },
  { path: 'activation/linkedinOr/questionnaire', component: QuestionnairesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
