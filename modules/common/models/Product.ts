export interface Product {
    name: string;
    itemLeft: number;
    price: number;
    categories: Array<Products>;
}
export interface Products {
    categoryId: number;
    categoryName: string;
}
