import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../models/product";
import { addProduct, clearProducts, deleteProduct, getProducts, updateProduct } from "./products.actions";

export const initialState: IProduct[] = [];

export const productsReducer = createReducer(
    initialState,
    on(addProduct, (state, { product }) => {
        return [...state, product];
    }),
    on(updateProduct, (state, { product }) => {
        const currentItem = state.findIndex(item => item.Id == product.Id);
        if (currentItem >= 0)
            state[currentItem] = product;

        return state;
    }),
    on(deleteProduct, (state, { product }) => state.filter(x => x.Id != product.Id)),
    on(clearProducts, (state) => state = [])
)
