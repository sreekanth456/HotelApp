import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifestyleRoutingModule } from './lifestyle-routing.module';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExcursionsComponent } from './excursions/excursions.component';


@NgModule({
  declarations: [LifestyleComponent, ExperienceComponent, ExcursionsComponent],
  imports: [
    CommonModule,
    LifestyleRoutingModule
  ],
  exports:[
    
  ]

})
export class LifestyleModule { }
