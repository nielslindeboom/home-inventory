import { createFeatureSelector } from "@ngrx/store";
import { IProduct } from "../models/product";

export const selectProducts = createFeatureSelector<IProduct[]>('products');