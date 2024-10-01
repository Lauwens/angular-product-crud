import { createReducer, on } from '@ngrx/store';
import { Product } from '@product/models/product.model';
import * as ProductActions from './product.actions';

export interface ProductState {
  products: Product[];
  loaded: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loaded: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({ ...state, loaded: false })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loaded: true,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: false,
  })),
  on(ProductActions.addProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(ProductActions.updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map((p) => (p.id === product.id ? product : p)),
  })),
  on(ProductActions.deleteProductSuccess, (state, { id }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== id),
  }))
);
