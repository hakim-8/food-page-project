import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../shared/models/food';

@Pipe({
  name: 'filterMenu',
  standalone: true
})
export class FilterMenuPipe implements PipeTransform {

  //function to filter items by search term
  transform(foods: Food[], searchTerm: string): Food[] {
    //statement to check if there is a searchTerm inputed
    if(!searchTerm) return foods;

    //declare search term as a variable and set it to lowercase
    const text = searchTerm.toLowerCase();

    //return the items that include the text variable
    return foods.filter((food)=>{
      return food.name.toLowerCase().includes(text)
    })
  }

}
