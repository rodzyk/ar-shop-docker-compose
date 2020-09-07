import { IProduct } from "../products/product";

export interface ICartItem {
    product: IProduct;
    count: number;
}