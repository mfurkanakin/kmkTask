import { ProductModel } from "./products-model";

export class PaginationModel{
    limit: number = 10;
    skip: number = 0;
    total: number = 0
    products: ProductModel[] = [];
}