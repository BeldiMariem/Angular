import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListeAnnoncesComponent} from './liste-annonces/liste-annonces.component';
import {EstimationCoutComponent} from './estimation-cout/estimation-cout.component';


const routes: Routes = [
  {path: 'liste', component: ListeAnnoncesComponent},
  {path: 'estimation', component: EstimationCoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
