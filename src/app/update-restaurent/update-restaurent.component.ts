import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurentApiService } from '../services/restaurent-api.service';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent implements OnInit {


  restId:any
  restBody:any


  constructor(private activatedRoute:ActivatedRoute,private restService:RestaurentApiService,private router:Router) { }

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
  updateRestaurent(form:any){
    let updateRestaurent={
      id:parseInt(form.value.id),
      name:form.value.name,
      neighborhood:form.value.neighborhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng:{
       lat:form.value.lat,
       lng:form.value.lng
 
      },
      cuisine_type:form.value.cuisine_type,
      operating_hours:{
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
      },
      reviews:[
       {
         name:form.value.rvName,
         date:form.value.date,
         rating:parseInt(form.value.rating),
         comments:form.value.comments
 
 
 
      }
     ]
     
     }
     console.log(updateRestaurent);
     this.restService.updateRestaurent(this.restId,updateRestaurent)
     .subscribe((data)=>{
      alert('restaurent details updated success')
      this.router.navigateByUrl('')
     })
     
 
    
  }

}
