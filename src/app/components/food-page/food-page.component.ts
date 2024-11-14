import { Component, OnInit } from '@angular/core';
import { Food } from '../../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from '../../services/food.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent implements OnInit {
  // declare food and food array
  food?: Food;
  foods: Array<Food> = [];
  //constructor to access activatedroute, food service, router and the cart service
  constructor(private route: ActivatedRoute, private foodService: FoodServiceService, private cartService: CartService, private router: Router) {}
  
  //function for when the page renders
  ngOnInit(): void {
    //get the food from food service
    this.foods = this.foodService.getAll();

    //get the id from the url at the top of the page
    const foodId = this.route.snapshot.paramMap.get('id')!;

    //if statement to check if foodId was gathered from the url and then finds the object with matching ID 
    if (foodId){
      this.food = this.foods.find(f => f.id.toString() === foodId);

      //statement to check if no match was found
      if (!this.food){
        console.error("Food not found")
      }
    }
  }
  //function to add food item to cart and transfer user to cart page
  addToCart(){
    this.cartService.addToCart(this.food!)
    this.router.navigateByUrl('/cart')
  }

}
