import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccomodationsRoutingModule } from './accomodations-routing.module';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { RoomsComponent } from './rooms/rooms.component';


@NgModule({
  declarations: [AccomodationsComponent, RoomsComponent],
  imports: [
    CommonModule,
    AccomodationsRoutingModule
  ],
  exports:[]
})
export class AccomodationsModule { }
