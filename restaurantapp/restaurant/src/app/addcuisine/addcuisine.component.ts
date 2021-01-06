import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-addcuisine',
  templateUrl: './addcuisine.component.html',
  styleUrls: ['./addcuisine.component.css']
})
export class AddcuisineComponent implements OnInit {

  constructor(private _serv:RestaurantService,private _acroute:ActivatedRoute) { }
  arrcu:any[]=[];
  c_id;
  res_id;
  ngOnInit() {
    this.res_id=this._acroute.snapshot.params['id'];
    this._serv.getallcuisine().subscribe(
      (data:any[])=>{
        this.arrcu=data;
      } 
    );
  }
  onadd()
  {
    var data={
      'c_id':this.c_id,
      'res_id':this.res_id
    }
    console.log(data);
    this._serv.addcuisine(data).subscribe(
      (data)=>{
        alert("cuisine successfully added");
      }
    );
  }

}
