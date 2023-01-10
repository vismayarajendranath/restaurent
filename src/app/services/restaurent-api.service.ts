import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurentApiService {
  search=new BehaviorSubject("")


  constructor(private api:HttpClient) { }
  //to get all restuarent details
  allRestuarentList(){
    return this.api.get('http://localhost:3000/restaurants')

  }
  viewRestaurent(restId:any){
    return this.api.get('http://localhost:3000/restaurants/'+restId)

  }
  //add new product(api)-post
  addRestaurent(restBody:any){
    return this.api.post('http://localhost:3000/restaurants',restBody)
  }

  updateRestaurent(restId:any,restBody:any){
    return this.api.put('http://localhost:3000/restaurants/'+restId,restBody)


  }
  deleteRestaurent(restId:any){
    return this.api.delete('http://localhost:3002/restaurants/'+restId)

  }
}
