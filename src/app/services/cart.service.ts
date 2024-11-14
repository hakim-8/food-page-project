import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //declared a cart class property of type Cart and initialized it with a new instance of the Cart class
  private cart:Cart = new Cart()
  //created add to cart function to handle adding items to the cart
  addToCart(food:Food): void {
    //declare cartItem to hold the value of finding a food item with id = id in the foods array
    let cartItem = this.cart.items.find((item: { food: { id: number; }; }) => item.food.id === food.id)
    //statement to check if item is found
    if(cartItem){
      //use changeQuantity function with the corresponding food.id and the cartItem quantity + 1 as the arguments
      this.changeQuantity(food.id, cartItem.quantity + 1);
      //end execution if item already in cart
      return;
    }
    //add the new item to the items array in cart
    this.cart.items.push(new CartItem(food))
  }


  //created removeFromCart function to handle removing items from cart
  removeFromCart(foodId: number): void{
    //set the items array to the previous items array but filtered without the item that was removed
    this.cart.items = this.cart.items.filter((item: { food: { id: number; }; }) => item.food.id != foodId)
  }


  //created changeQuantity function to handle updating the quantity of the cart
  changeQuantity(foodId: number, quantity: number){
    let cartItem = this.cart.items.find((item: { food: { id: number; }; }) => item.food.id == foodId)
    //check if matching item was found if not end execution
    if(!cartItem) return
    //if item was found set the new quantity to the value passed
    cartItem.quantity = quantity
  }

  //function to allow other functions to access the cart or set the cart
  getCart() : Cart{
    return this.cart
  }
}
