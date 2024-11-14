import { Food } from "./food";

export class CartItem{
    constructor(food:Food){
        //assign food parameter to food prop
        this.food = food;
        //refference price function
        this.price
    }
    //declare food, quantity initialized to 1
    food!: Food;
    quantity: number = 1;

    //gets total price of each menu item in the cart by multiplying its price by its quantity
    get price(): number {
        return this.food.price * this.quantity
    }
}