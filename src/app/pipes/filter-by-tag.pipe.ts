import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../shared/models/food';

@Pipe({
  name: 'filterByTag',
  standalone: true
})
export class FilterByTagPipe implements PipeTransform {
  //function to get the foods filtered by the tags
  transform(foods: Food[], selectedTag: string): Food[] {
    //statement to check if no tag was selected
    if (!selectedTag) return foods;
    //statement to filter foods by tags
    return foods.filter(food => food.tags === selectedTag);
  }

}
