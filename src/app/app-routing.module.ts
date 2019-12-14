import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'offers',
    component:OffersComponent
  },
 
  {
    path:'accomodations',
    loadChildren:'./accomodations/accomodations.module#AccomodationsModule'
  },
  {
    path:'auth',
    loadChildren:'./auth/auth.module#AuthModule'

  },
  {
    path:'food',
    loadChildren:'./food/food.module#FoodModule'
  },
  {

    path:'wedding',
    loadChildren:'./wedding/wedding.module#WeddingModule'

  },
  {
    path:'lifestyle',
    loadChildren:'./lifestyle/lifestyle.module#LifestyleModule'
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
