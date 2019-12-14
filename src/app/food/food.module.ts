import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food/food.component';
import { BarsComponent } from './bars/bars.component';
import { RestarentsComponent } from './restarents/restarents.component';


@NgModule({
  declarations: [FoodComponent, BarsComponent, RestarentsComponent],
  imports: [
    CommonModule,
    FoodRoutingModule
  ],
  exports:[
    
  ]

})
export class FoodModule { }
