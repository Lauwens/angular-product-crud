import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '@product/models/product.model';
import * as ProductActions from '@product/store/product.actions';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  private store = inject(Store<{ products: Product[] }>);
  constructor() {
    this.store.dispatch(ProductActions.loadProducts());
  }
}
