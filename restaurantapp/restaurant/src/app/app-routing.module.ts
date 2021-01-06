import { ViewrestaurantsComponent } from './viewrestaurants/viewrestaurants.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantdetailComponent } from './restaurantdetail/restaurantdetail.component';
import { CreaterestaurantComponent } from './createrestaurant/createrestaurant.component';
import { AddcuisineComponent } from './addcuisine/addcuisine.component';

const routes: Routes = [
  {
    path:'',
    component:ViewrestaurantsComponent
  },
  {
    path:'Restaurantdetail/:id',
    component:RestaurantdetailComponent
  },
  {
    path:'createrestaurant',
    component:CreaterestaurantComponent
  },
  {
    path:'addcuisine/:id',
    component:AddcuisineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
