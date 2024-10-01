import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@product/models/product.model';
import * as ProductSelectors from '@product/store/product.selectors';

import { Store } from '@ngrx/store';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.scss',
})
export class ProductViewComponent {
  product: Product | undefined;

  private route = inject(ActivatedRoute);

  private store = inject(Store);
  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store
      .select(ProductSelectors.selectProductById(id))
      .subscribe((product) => {
        this.product = product;
      });
  }
}
