import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurants:any[],filterString:string,propName:string) {
    const result:any=[];
    if(!restaurants || filterString==''||propName==''){
      return restaurants
    }
    restaurants.forEach((restaurant:any)=>{
     if  (restaurant[propName].trim().toLowerCase().includes(filterString)){
      result.push(restaurant)

      }
    })


    return result;
  }
}