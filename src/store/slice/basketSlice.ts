import { Product } from "../../types/api/Api.Products";

export interface BasketItem extends Product {
    quantity: number
}

export interface BasketState {
    
}