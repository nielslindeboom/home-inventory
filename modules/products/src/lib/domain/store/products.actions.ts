import { createAction, props } from '@ngrx/store';
import { IProduct } from '../models/product';

export const addProduct = createAction('[Products] Add', props<{ product: IProduct }>());
export const updateProduct = createAction('[Products] Update', props<{ product: IProduct }>());
export const deleteProduct = createAction('[Products] Delete', props<{ product: Pick<IProduct, "Id"> }>());
export const clearProducts = createAction('[Products] Clear');
export const getProducts = createAction('[Products] Get', props<{ products: IProduct[] }>());

export const getApiProducts= createAction('[Products API] Get');
export const apiLoadedSuccess = createAction('[Products API] Loaded success', props<{ products: IProduct[] }>());