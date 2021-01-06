import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  get_url:string='http://localhost:3000/restaurant/';
  searchbyname_url:string='http://localhost:3000/searchname/';
  searchbycity_url:string='http://localhost:3000/searchcity/';
  cuisine_url:string='http://localhost:3000/rc/';
  constructor(private _http:HttpClient) { }
  getAllRestaurants()
  {
    return this._http.get(this.get_url);
  }
  getRestaurantdetail(id:number)
  {
    return this._http.get(this.get_url+id);
  }
  createRestaurant(item:FormData)
  {
    return this._http.post(this.get_url,item);
  }
  searchbyname(name:string)
  {
    return this._http.get(this.searchbyname_url+name);
  }
  searchbycity(name:string)
  {
    return this._http.get(this.searchbycity_url+name);
  }
  getcuisinename(id)
  {
    return this._http.get(this.cuisine_url+id); 
  }
  getallcuisine()
  {
    return this._http.get(this.cuisine_url);
  }
  addcuisine(item)
  {
    let body=JSON.stringify(item);
    let h1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.cuisine_url,body,{headers:h1});
  }
}

