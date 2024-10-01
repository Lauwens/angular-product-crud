import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  Product,
  ProductCategory,
  ProductCondition,
  ProductSize,
} from '@product/models/product.model';
import * as ProductActions from '@product/store/product.actions';
import * as ProductSelectors from '@product/store/product.selectors';

@Component({
  selector: 'app-product-form',
  templateUrl: 'product-form.component.html',
  styleUrl: 'product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  id = 0;

  categories = Object.values(ProductCategory);
  conditions = Object.values(ProductCondition);
  sizes = Object.values(ProductSize);
  tags: string[];

  private fb = inject(FormBuilder);
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: [''],
      value: [null, [Validators.required, Validators.min(0)]],
      stock: [null, [Validators.required, Validators.min(0)]],
      category: [null, Validators.required],
      sku: ['', [Validators.pattern(/^[a-zA-Z0-9-_]+$/)]],
      brand: [''],
      color: [''],
      size: [null],
      weight: [null, [Validators.required, Validators.min(0)]],
      weightUnit: ['kg', Validators.required],
      dimensions: this.fb.group({
        length: [null, [Validators.min(0)]],
        width: [null, [Validators.min(0)]],
        height: [null, [Validators.min(0)]],
        unit: ['cm'],
      }),
      isAvailable: [true, Validators.required],
      tags: [[]],
      condition: ['New', Validators.required],
      warrantyPeriod: [null, Validators.min(0)],
      priceHistory: this.fb.array([]),
    });
    this.tags = [];
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.store
      .select(ProductSelectors.selectProductById(this.id))
      .subscribe((product) => {
        if (product) {
          this.isEditMode = true;
          this.productForm.patchValue(product);
          this.tags = product.tags;
        }
      });
  }

  onSubmit() {
    const product: Product = this.productForm.value;
    if (this.productForm.valid) {
      product.tags = this.tags;
      if (this.isEditMode) {
        product.id = this.id;
        this.store.dispatch(ProductActions.updateProduct({ product }));
      } else {
        this.store.dispatch(ProductActions.addProduct({ product }));
      }
      this.router.navigate(['/products']);
    }
  }

  public addTag($event: MatChipInputEvent) {
    const index = this.tags.indexOf($event.value);
    if (index === -1) {
      this.tags = [...this.tags, $event.value];
    }
    $event.chipInput.clear();
  }
  public removeTag(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index !== -1) {
      this.tags = [
        ...this.tags.slice(0, index).concat(this.tags.slice(index + 1)),
      ];
    }
  }
}
