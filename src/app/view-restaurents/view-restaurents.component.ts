import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurentApiService } from '../services/restaurent-api.service';

@Component({
  selector: 'app-view-restaurents',
  templateUrl: './view-restaurents.component.html',
  styleUrls: ['./view-restaurents.component.css']
})
export class ViewRestaurentsComponent implements OnInit {

  restId:any
  restBody:any

  constructor(private activatedRoute:ActivatedRoute,private restService:RestaurentApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.restId = data['id']

      
    })
    this.restService.viewRestaurent(this.restId)
    .subscribe((result)=>{
      //console.log(result);
      this.restBody = result
      console.log(this.restBody);
      
      
    })
    
  }

}
