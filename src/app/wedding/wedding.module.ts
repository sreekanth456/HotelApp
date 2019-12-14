import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingRoutingModule } from './wedding-routing.module';
import { WeddingComponent } from './wedding/wedding.component';
import { WestrenWeddingComponent } from './westren-wedding/westren-wedding.component';
import { LocalWeddingComponent } from './local-wedding/local-wedding.component';


@NgModule({
  declarations: [WeddingComponent, WestrenWeddingComponent, LocalWeddingComponent],
  imports: [
    CommonModule,
    WeddingRoutingModule
  ],
  exports:[

  ]
})
export class WeddingModule { }
