import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductSelectors from '@product/store/product.selectors';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.scss',
})
export class ProductIndexComponent {
  private store = inject(Store);

  totalStock: string | undefined;
  totalStockValue: number | undefined;
  averageValue: number | undefined;

  constructor() {
    this.store
      .select(ProductSelectors.selectTotalStock)
      .subscribe((stockData) => {
        this.totalStock = stockData?.toString();
        this.store
          .select(ProductSelectors.selectTotalStockValue)
          .subscribe((data) => {
            this.totalStockValue = data;
            this.averageValue = data / stockData;
          });
      });
  }
}
