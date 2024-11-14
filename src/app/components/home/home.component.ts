import { Component, OnInit, Signal, signal } from '@angular/core';
import { FoodServiceService } from '../../services/food.service';
import { Food } from '../../shared/models/food';
import { CurrencyPipe } from '@angular/common';
import { FilterMenuPipe } from '../../pipes/filter-menu.pipe';
import { FormsModule } from '@angular/forms';
import { FilterByTagPipe } from '../../pipes/filter-by-tag.pipe';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from "../not-found/not-found.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, FilterMenuPipe, FilterByTagPipe, RouterLink, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // declare searchTerm and tag signals
  searchTerm = signal('')
  selectedTag = signal('')
  //declare the tags array
  tags: string[] = ["Starters","Salads","Burgers","Pizzas","Desserts","Drinks"]
  constructor(private foodService: FoodServiceService) {}
  
  //declare an empty string array to hold the items from the food service
  foods:Array<Food> = [];
  //get array with all the foods from the foodservice when page renders
  ngOnInit(): void{
  this.foods = this.foodService.getAll();
  };

  //function to set the selected tag
  filterByTag(tag: string){
    this.selectedTag.set(tag);
  };

  //function to display number of items in each tag
  getCountByTag(tag: string): number {
    return this.foods.filter(food => food.tags.includes(tag)).length;
  }
  
}
