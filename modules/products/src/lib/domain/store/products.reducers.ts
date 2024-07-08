import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../models/product";
import { addProduct, apiLoadedSuccess, clearProducts, deleteProduct, getProducts, updateProduct } from "./products.actions";

export const initialState: IProduct[] = [];

export const productsReducer = createReducer(
    initialState,
    on(addProduct, (state, { product }) => {
        return [...state, product];
    }),
    on(apiLoadedSuccess, (state, { products }) => state = products)
)
