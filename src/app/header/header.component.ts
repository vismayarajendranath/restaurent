import { Component, OnInit } from '@angular/core';
import { RestaurentApiService } from '../services/restaurent-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService:RestaurentApiService) { }

  ngOnInit(): void {
  }
  search(event:any){
   // console.log(event.target.value);
    let searchTerm = event.target.value
    //console.log(searchTerm);
    this.apiService.search.next(searchTerm)
    
    
  }

}
