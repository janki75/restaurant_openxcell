import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';
import { restaurant } from '../restaurant_c';

@Component({
  selector: 'app-viewrestaurants',
  templateUrl: './viewrestaurants.component.html',
  styleUrls: ['./viewrestaurants.component.css']
})
export class ViewrestaurantsComponent implements OnInit {
  restaurant_arr:any[]=[];
  filterarr:string[]=['Filter By Name','Filter By City','Filter By Status'];
  nameflag:boolean;
  cityflag:boolean;
  statusflag:boolean;
  resname:string;
  r_city:string;
  empty:Boolean;
  r_status:string;
  i:number=0;
  t:Time;
  statusarr:string[]=['open','close'];
  constructor(private _restaurantserv:RestaurantService,private _route:Router) { }

  ngOnInit() {
    this._restaurantserv.getAllRestaurants().subscribe(
      (data:any[])=>{
        if(data.length==0)
        {
          this.empty=true;
        }
        else
        {
          this.restaurant_arr=data;
          this.empty=false;
        }
       
      }
    );
  }
  ondetail(id)
  {
    this._restaurantserv.getRestaurantdetail(id).subscribe(
      (data:any)=>{
        this._route.navigate(['/Restaurantdetail',id]);
      }
    );
  }
  onclickcreaterestaurant()
  {
    this._route.navigate(['/createrestaurant']);
  }
  change(event)
  {
    if(event.isUserInput) {
      if(event.source.value=='Filter By City')
      {
        this.cityflag=true;
        this.nameflag=false;
        this.statusflag=false;
      }
      else if(event.source.value=='Filter By Status')
      {
        this.cityflag=false;
        this.nameflag=false;
        this.statusflag=true;
      }
      else if(event.source.value=='Filter By Name')
      {
        this.cityflag=false;
        this.nameflag=true;
        this.statusflag=false;
      }
      console.log(event.source.value, event.source.selected);
    }
  }
  searchname()
  {
    console.log(this.resname);
    this._restaurantserv.searchbyname(this.resname).subscribe(
      (data:any)=>{
        if(data.length==0)
        {
         this.empty=true;
          this.restaurant_arr.splice(0,this.restaurant_arr.length);
        }
        else
        {
          this.empty=false;
          this.restaurant_arr=data;
        }
        
      }
    );
  }

  searchbycity()
  {
    console.log(this.r_city);
    this._restaurantserv.searchbycity(this.r_city).subscribe(
      (data:any)=>{
        if(data.length==0)
        {
          this.empty=true;
          this.restaurant_arr.splice(0,this.restaurant_arr.length);
        }
        else
        {
          this.restaurant_arr=data;
          this.empty=false;
        }
      
      }
    );
  }
  seeall()
  {
    this.ngOnInit();
  }
  searchbystatus()
  {
    var currentdate = new Date(); 
    if(this.r_status=='open')
    {
      this.restaurant_arr.splice(0,this.restaurant_arr.length);
      this._restaurantserv.getAllRestaurants().subscribe(
        (data:restaurant[])=>{
         for(this.i=0;this.i<data.length;this.i++)
         {
           let s=data[this.i].r_start_time+"";
           let sh=s.substring(0,2);
           let e=data[this.i].r_end_time+"";
           let eh=e.substring(0,2);
           if(parseInt(sh)<=currentdate.getHours() && parseInt(eh)>=currentdate.getHours())
           {
            this.restaurant_arr.push(data[this.i]);
           }

          }
        }
      ); 
    }
    else
    {
      this._restaurantserv.getAllRestaurants().subscribe(
        (data:restaurant[])=>{
          this.restaurant_arr.splice(0,this.restaurant_arr.length);
         
         
            for(this.i=0;this.i<data.length;this.i++)
         {
           let s=data[this.i].r_start_time+"";
           let sh=s.substring(0,2);
           let e=data[this.i].r_end_time+"";
           let eh=e.substring(0,2);
           console.log(eh+" "+sh);
           if(parseInt(sh)>currentdate.getHours() )
           {
            this.restaurant_arr.push(data[this.i]);
           }

          }
          
         
        }
      ); 
    }
  }
  onclick(id)
  {
    this._route.navigate(['/addcuisine',id]);
  }
}
