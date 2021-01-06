import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Time } from '@angular/common';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurantdetail',
  templateUrl: './restaurantdetail.component.html',
  styleUrls: ['./restaurantdetail.component.css']
})
export class RestaurantdetailComponent implements OnInit {
  r_id: number;
        r_name: string;
        r_city: string;
        r_area: string;
        r_contactno: string;
        r_start_time: Time;
        r_end_time: Time;
        r_img:string;
        arrfoodtype:string[]=[];
  constructor(private _acroute:ActivatedRoute,private _serv:RestaurantService) { }

  ngOnInit() {
   this.r_id= this._acroute.snapshot.params['id'];
   console.log(this.r_id);
    this._serv.getRestaurantdetail(this.r_id).subscribe(
      (data:any)=>{
        this._serv.getcuisinename(this.r_id).subscribe(
          (d:any)=>{
            console.log(d);
            this.arrfoodtype=d;
            console.log(this.arrfoodtype);
          }
        );

        this.r_name=data[0].r_name;
        this.r_city=data[0].r_city;
        this.r_area=data[0].r_area;
        this.r_contactno=data[0].r_contactno;
        this.r_start_time=data[0].r_start_time;
        this.r_end_time=data[0]. r_end_time;
        this.r_img=data[0].r_img;
       
  
      }
      );

  }

}
