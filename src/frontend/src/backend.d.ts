import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    total: bigint;
    items: Array<[bigint, bigint]>;
}
export interface Product {
    name: string;
    price: bigint;
}
export interface backendInterface {
    addProduct(name: string, price: bigint): Promise<void>;
    addToCart(productId: bigint, quantity: bigint): Promise<void>;
    getOrderHistory(user: Principal): Promise<Array<Order>>;
    getProduct(id: bigint): Promise<Product>;
    getProducts(): Promise<Array<Product>>;
    placeOrder(): Promise<void>;
}
