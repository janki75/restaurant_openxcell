import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewrestaurantsComponent } from './viewrestaurants/viewrestaurants.component';
import { RestaurantdetailComponent } from './restaurantdetail/restaurantdetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule,MatIconModule,MatFormFieldModule} from '@angular/material';
import { CreaterestaurantComponent } from './createrestaurant/createrestaurant.component';
import { FormsModule } from '@angular/forms';
import { AddcuisineComponent } from './addcuisine/addcuisine.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewrestaurantsComponent,
    RestaurantdetailComponent,
    CreaterestaurantComponent,
    AddcuisineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
