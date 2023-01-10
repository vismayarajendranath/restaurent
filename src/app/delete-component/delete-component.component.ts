import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurentApiService } from '../services/restaurent-api.service';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.css']
})
export class DeleteComponentComponent implements OnInit {
  restId:any

  constructor(private activatedRoute:ActivatedRoute ,private apiService:RestaurentApiService,private router:Router) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (data)=>{
      console.log(data)
    this.restId = data['id']
    console.log(this.restId);
      
      
    }
    )

    //call delete restaurant from service
    this.apiService.deleteRestaurent(this.restId)
    .subscribe(()=>{
      alert('Requested Restaurant Details Deleted Successfully!!.. ')
      this.router.navigateByUrl('')
    })
  }

}
