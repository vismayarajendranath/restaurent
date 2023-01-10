import { Component, OnInit } from '@angular/core';
import { RestaurentApiService } from '../services/restaurent-api.service';

@Component({
  selector: 'app-restaurents',
  templateUrl: './restaurents.component.html',
  styleUrls: ['./restaurents.component.css']
})
export class RestaurentsComponent implements OnInit {
  restuarentLists:any;
  filterString:any=""

  constructor( private restApi:RestaurentApiService) { }

  ngOnInit(): void {
    this.restApi.allRestuarentList()
    .subscribe((result)=>{
      console.log(result);
      this.restuarentLists = result
      
    })
    //to get search term from service
    this.restApi.search.subscribe((data)=>{
      this.filterString =data
      console.log(this.filterString);
      
    })
  }

}
