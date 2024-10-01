import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MockProductService } from '@product/services/mock.product.service';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {
  loadProducts$;
  addProduct$;
  updateProduct$;
  deleteProduct$;

  private actions$ = inject(Actions);
  private productService = inject(MockProductService);

  constructor() {
    this.loadProducts$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProductActions.loadProducts),
        mergeMap(() =>
          this.productService.getProducts().pipe(
            map((products) => ProductActions.loadProductsSuccess({ products })),
            catchError((error) =>
              of(ProductActions.loadProductsFailure({ error }))
            )
          )
        )
      )
    );

    this.addProduct$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProductActions.addProduct),
        mergeMap((action) =>
          this.productService.addProduct(action.product).pipe(
            map((product) => ProductActions.addProductSuccess({ product })),
            catchError((error) =>
              of(ProductActions.addProductFailure({ error }))
            )
          )
        )
      )
    );

    this.updateProduct$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProductActions.updateProduct),
        mergeMap((action) =>
          this.productService.updateProduct(action.product).pipe(
            map((product) => ProductActions.updateProductSuccess({ product })),
            catchError((error) =>
              of(ProductActions.updateProductFailure({ error }))
            )
          )
        )
      )
    );

    this.deleteProduct$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProductActions.deleteProduct),
        mergeMap((action) =>
          this.productService.deleteProduct(action.id).pipe(
            map(() => ProductActions.deleteProductSuccess({ id: action.id })),
            catchError((error) =>
              of(ProductActions.deleteProductFailure({ error }))
            )
          )
        )
      )
    );
  }
}
