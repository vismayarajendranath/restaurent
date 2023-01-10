import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { RestaurentsComponent } from './restaurents/restaurents.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { ViewRestaurentsComponent } from './view-restaurents/view-restaurents.component';

const routes: Routes = [
  //path for restaurentcomponent
  {
    path:'',component:RestaurentsComponent 
  },
  //path for view restaurent
  {
    path:'view-restaurent/:id',component:ViewRestaurentsComponent
  },
  //path for addrestuarent
  {
    path:'add-restaurent',component:AddRestaurentComponent

  },
  {
    path:'update-restaurent/:id',component:UpdateRestaurentComponent
  },
  {
   path:'delete-restaurent/:id',component:DeleteComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
