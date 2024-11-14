import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        //path for homepage
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/home/home.component').then(m=>m.HomeComponent)
        }
        
    },
    {
        //path for food-page
        path: 'food-page/:id',
        loadComponent: () => {
            return import('./components/food-page/food-page.component').then(m=>m.FoodPageComponent)
        }

    },
    {
        //path for cart
        path: 'cart',
        loadComponent: () => {
            return import('./components/cart/cart.component').then(m=>m.CartComponent)
        }
    }
    
];
