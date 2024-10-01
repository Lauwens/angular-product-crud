import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';
import { Product } from '../models/product.model';
import {
  getCategoryCounts,
  getTotalStock,
  getTotalStockValue,
} from '@product/models/product-analytics.functions';

export const selectProductState =
  createFeatureSelector<ProductState>('product');

export const selectAllProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

export const selectProductsLoaded = createSelector(
  selectProductState,
  (state: ProductState) => state.loaded
);

export const selectProductById = (productId: number) =>
  createSelector(selectAllProducts, (products: Product[]) =>
    products.find((product) => product.id === productId)
  );

export const selectCategoryCounts = createSelector(
  selectAllProducts,
  (products: Product[]) => getCategoryCounts(products)
);

export const selectTotalStock = createSelector(
  selectAllProducts,
  (products: Product[]) => getTotalStock(products)
);

export const selectTotalStockValue = createSelector(
  selectAllProducts,
  (products: Product[]) => getTotalStockValue(products)
);
