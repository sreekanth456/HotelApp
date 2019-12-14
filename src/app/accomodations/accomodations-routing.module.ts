import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { RoomsComponent } from './rooms/rooms.component';


const routes: Routes = [

  {
    path:'accomodations',
    component:AccomodationsComponent
  },
  {
    path:'rooms',
    component:RoomsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccomodationsRoutingModule { }
