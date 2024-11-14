import { CartItem } from "./cartItem";

export class Cart{
    //initialize items array of type CartItem to an empty array
    items:CartItem[] = []
    //function to get total price
    get totalPrice(): number {
        //initialize total price to 0
        let totalPrice = 0;
        //loop through all items in items array get its price value and add it to total price
        this.items.forEach((item)=>{
            totalPrice+= item.price;
        })

        return totalPrice;
    }
}