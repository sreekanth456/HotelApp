import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExcursionsComponent } from './excursions/excursions.component';


const routes: Routes = [
  {
    path:'lifestyle',
    component:LifestyleComponent
  },
  {
    path:'experience',
    component:ExperienceComponent
  },
  {
    path:'excursions',
    component:ExcursionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifestyleRoutingModule { }
