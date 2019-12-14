import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingComponent } from './wedding/wedding.component';
import { WestrenWeddingComponent } from './westren-wedding/westren-wedding.component';
import { LocalWeddingComponent } from './local-wedding/local-wedding.component';


const routes: Routes = [
  {
    path:'wedding',
    component:WeddingComponent
  },

  {
    path:'westren-wedding',
    component:WestrenWeddingComponent
  },
  {
    path:'local-wedding',
    component:LocalWeddingComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule { }
