import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-createrestaurant',
  templateUrl: './createrestaurant.component.html',
  styleUrls: ['./createrestaurant.component.css']
})
export class CreaterestaurantComponent implements OnInit {
  arrcity=[
  {value:'ahmedabad'},
  {value:'surat'},
  {value:'rajkot'},
  {value:'baroda'}
];
  r_id: number;
  r_name: string;
  r_city: string;
  r_area: string;
  r_contactno: string;
  r_start_time: Time;
  r_end_time: Time;
  r_img:string;
  selectedFile:File=null;
  constructor(private _serv:RestaurantService,private _route:Router) { }

  ngOnInit() {
    
  }
  onadd()
  {
       const fd=new FormData();

    fd.append('r_name',this.r_name);
    fd.append('r_city',this.r_city);
    fd.append('r_area',this.r_area);
    fd.append('r_contactno',this.r_contactno);
    fd.append('r_start_time',this.r_start_time+"");
    fd.append('r_end_time',this.r_end_time+"");
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this._serv.createRestaurant(fd).subscribe(
      (data:any)=>{
        alert("restaurant successfully created!!")
        this._route.navigate(['/']);
      }
    );
   
  }
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
  }
  onclick()
  {
    this._route.navigate(['/']);
  }
}
