import { Component, OnInit } from '@angular/core';
import { FoodPageComponent } from '../food-page/food-page.component';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cartItem';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, NotFoundComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  //declare cart
  cart!:Cart

  //use cart service to set the cart variable
  constructor (private cartService: CartService){
    this.setCart();
  }

  ngOnInit(): void {
    
  }
  //use removeFromCart function from cart service
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  //use changeQuantity function from cart service
  changeQuantity(cartItem: CartItem, quantityInString:string){ 
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity)
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart()
  }
}
