import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { BarsComponent } from './bars/bars.component';
import { RestarentsComponent } from './restarents/restarents.component';


const routes: Routes = [

  {
    path:'food',
    component:FoodComponent
  },
  {
    path:'bars',
    component:BarsComponent
  },
  {
    path:'restarents',
    component:RestarentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
