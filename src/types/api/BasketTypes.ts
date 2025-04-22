import { Product } from './Api.Products';

export interface BasketItem extends Product {
  quantity: number;
}
export interface BasketState {
  items: BasketItem[];
}
