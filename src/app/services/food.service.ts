import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }
  //object with all food items that will be displayed in the UI
  getAll() : Food[] {
    return [
    {
      id: 1,
      name: 'Onion Rings',
      price: 4.39,
      tags: 'Starters',
      favourite: false,
      imageUrl: '/images/onion.jpg',
      cookTime: '5-10 min',
      description: "Crispy golden onion rings, hand-breaded and fried to perfection. Served with our signature dipping sauce."
    },
    {
      id: 2,
      name: 'Chicken wings',
      price: 16.50,
      tags: 'Starters',
      favourite: true,
      imageUrl: '/images/wings.jpg',
      cookTime: '20-30 min',
      description: "Juicy, tender wings tossed in your choice of sauce: buffalo, BBQ, or garlic parmesan. Served with celery and blue cheese or ranch."
      
    },
    {
      id: 3,
      name: 'French Fries',
      price: 2.00,
      tags: 'Starters',
      favourite: true,
      imageUrl: '/images/fries.jpg',
      cookTime: '10-15 min',
      description: "Hot, golden fries with a perfect crunch. Lightly seasoned and served with ketchup or your choice of dipping sauce."
    },
    {
      id: 4,
      name: 'Ceasar Salad',
      price: 9.99,
      tags: 'Salads',
      favourite: false,
      imageUrl: '/images/salad.jpg',
      cookTime: '20-25 min',
      description: "Crisp romaine lettuce, tossed with creamy Caesar dressing, crunchy croutons, and topped with shaved Parmesan cheese. Add grilled chicken if you like!"
      
    },
    {
      id: 5,
      name: 'Cheese Burger',
      price: 12.50,
      tags: 'Burgers',
      favourite: true,
      imageUrl: '/images/cheese-burger.jpg',
      cookTime: '20-30 min',
      description: "A classic cheeseburger with a juicy beef patty, melted cheddar cheese, crisp lettuce, vine-ripened tomatoes, and pickles on a toasted bun."
      
    },
    {
      id: 6,
      name: 'Beef Burger',
      price: 10.50,
      tags: 'Burgers',
      favourite: false,
      imageUrl: '/images/beef-burger.jpg',
      cookTime: '20-30 min',
      description: "A hearty, seasoned beef patty topped with fresh lettuce, tomatoes, onions, and a dollop of our special sauce, all on a toasted brioche bun."
      
    },
    {
      id: 7,
      name: 'Peperoni Pizza',
      price: 19.99,
      tags: 'Pizzas',
      favourite: true,
      imageUrl: '/images/peperoni.jpg',
      cookTime: '20-30 min',
      description: "Traditional pizza topped with zesty pepperoni, mozzarella cheese, and a rich tomato sauce on a hand-tossed crust."
      
    },
    {
      id: 8,
      name: 'Margherita Pizza',
      price: 16.99,
      tags: 'Pizzas',
      favourite: false,
      imageUrl: '/images/margharita.jpg',
      cookTime: '20-30 min',
      description: "A classic Italian favorite featuring fresh mozzarella, ripe tomatoes, and basil leaves on a thin, crispy crust with a hint of olive oil."
    },
    {
      id: 9,
      name: 'Chocolate Cake',
      price: 7.99,
      tags: 'Desserts',
      favourite: true,
      imageUrl: '/images/chocolate-cake.jpg',
      cookTime: 'Ready Made',
      description: "Decadent and rich, our chocolate cake is layered with smooth chocolate frosting and topped with a dusting of cocoa. Perfect for chocolate lovers!"
    },
    {
      id: 10,
      name: 'Soda',
      price: 1.35,
      tags: 'Drinks',
      favourite: true,
      imageUrl: '/images/soda.jpg',
      cookTime: 'none',
      description: "Choose from a selection of classic sodas to quench your thirst."
    },
    {
      id: 11,
      name: 'Water',
      price: 0.50,
      tags: 'Drinks',
      favourite: false,
      imageUrl: '/images/water.jpg',
      cookTime: 'none',
      description: "Refreshing still or sparkling water to keep you hydrated and refreshed."
      
    },
    {
      id: 12,
      name: 'Orange Juice',
      price: 1.45,
      tags: 'Drinks',
      favourite: false,
      imageUrl: '/images/oj.jpg',
      cookTime: 'none',
      description: "Freshly squeezed orange juice, bursting with natural sweetness and Vitamin C."
      
    },
    ]
  }
}
