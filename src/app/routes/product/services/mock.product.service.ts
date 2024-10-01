import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Product,
  ProductCategory,
  ProductSize,
  ProductCondition,
} from '@product/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class MockProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Ergonomic Office Chair',
      description: 'Comfortable office chair with lumbar support',
      value: 199.99,
      stock: 50,
      category: ProductCategory.HomeAndGarden,
      sku: 'OFC-001-BLK',
      brand: 'ErgoComfort',
      color: 'Black',
      size: ProductSize.L,
      weight: 15,
      weightUnit: 'kg',
      dimensions: { length: 60, width: 60, height: 110, unit: 'cm' },
      isAvailable: true,
      tags: ['office', 'chair', 'ergonomic', 'comfortable'],
      condition: ProductCondition.New,
      warrantyPeriod: 24,
      priceHistory: [
        { date: new Date('2023-01-15'), price: 249.99 },
        { date: new Date('2023-06-01'), price: 229.99 },
        { date: new Date('2023-09-01'), price: 199.99 },
      ],
    },
    {
      id: 2,
      name: 'Smartphone X12',
      description: 'Latest model with advanced camera features',
      value: 799.99,
      stock: 100,
      category: ProductCategory.Electronics,
      sku: 'SPH-X12-256-BLU',
      brand: 'TechGiant',
      color: 'Midnight Blue',
      weight: 0.18,
      weightUnit: 'kg',
      dimensions: { length: 15, width: 7, height: 0.8, unit: 'cm' },
      isAvailable: true,
      tags: ['smartphone', '5G', 'high-resolution camera'],
      condition: ProductCondition.New,
      warrantyPeriod: 12,
      priceHistory: [{ date: new Date('2023-03-10'), price: 799.99 }],
    },
    {
      id: 3,
      name: 'Wireless Earbuds Pro',
      description: 'True wireless earbuds with noise cancellation',
      value: 149.99,
      stock: 200,
      category: ProductCategory.Electronics,
      sku: 'AUD-WL-PRO-WHT',
      brand: 'SoundMaster',
      color: 'White',
      weight: 0.05,
      weightUnit: 'kg',
      dimensions: { length: 5, width: 5, height: 3, unit: 'cm' },
      isAvailable: true,
      tags: ['earbuds', 'wireless', 'noise-cancelling'],
      condition: ProductCondition.New,
      warrantyPeriod: 12,
      priceHistory: [
        { date: new Date('2023-02-20'), price: 179.99 },
        { date: new Date('2023-07-15'), price: 149.99 },
      ],
    },
    {
      id: 4,
      name: 'Smart Watch Series 5',
      description: 'Fitness and health tracking smartwatch',
      value: 299.99,
      stock: 75,
      category: ProductCategory.Electronics,
      sku: 'WTH-SM5-SLV',
      brand: 'FitTech',
      color: 'Silver',
      weight: 0.04,
      weightUnit: 'kg',
      dimensions: { length: 4, width: 3.4, height: 1.2, unit: 'cm' },
      isAvailable: true,
      tags: ['smartwatch', 'fitness tracker', 'health monitor'],
      condition: ProductCondition.New,
      warrantyPeriod: 24,
      priceHistory: [{ date: new Date('2023-04-05'), price: 299.99 }],
    },
    {
      id: 5,
      name: 'Classic Leather Jacket',
      description: 'Timeless leather jacket for all seasons',
      value: 249.99,
      stock: 30,
      category: ProductCategory.Clothing,
      sku: 'CLO-LJ-BRN-L',
      brand: 'UrbanStyle',
      color: 'Brown',
      size: ProductSize.L,
      weight: 1.2,
      weightUnit: 'kg',
      dimensions: { length: 70, width: 50, height: 5, unit: 'cm' },
      isAvailable: true,
      tags: ['jacket', 'leather', 'classic', 'outerwear'],
      condition: ProductCondition.New,
      priceHistory: [{ date: new Date('2023-05-12'), price: 249.99 }],
    },
    {
      id: 6,
      name: 'Bestselling Novel: "Echoes of Tomorrow"',
      description: 'Award-winning science fiction novel',
      value: 24.99,
      stock: 500,
      category: ProductCategory.Books,
      sku: 'BK-SF-EOT-HC',
      brand: 'Penguin Books',
      color: 'N/A',
      weight: 0.5,
      weightUnit: 'kg',
      dimensions: { length: 23, width: 15, height: 3, unit: 'cm' },
      isAvailable: true,
      tags: ['book', 'science fiction', 'bestseller'],
      condition: ProductCondition.New,
      priceHistory: [
        { date: new Date('2023-01-30'), price: 29.99 },
        { date: new Date('2023-06-15'), price: 24.99 },
      ],
    },
    {
      id: 7,
      name: 'Stainless Steel Water Bottle',
      description: 'Eco-friendly, insulated water bottle',
      value: 29.99,
      stock: 150,
      category: ProductCategory.HomeAndGarden,
      sku: 'HG-WB-SS-BLU',
      brand: 'EcoHydrate',
      color: 'Ocean Blue',
      weight: 0.3,
      weightUnit: 'kg',
      dimensions: { length: 27, width: 8, height: 8, unit: 'cm' },
      isAvailable: true,
      tags: ['water bottle', 'eco-friendly', 'insulated'],
      condition: ProductCondition.New,
      warrantyPeriod: 12,
      priceHistory: [{ date: new Date('2023-03-22'), price: 29.99 }],
    },
    {
      id: 8,
      name: 'Professional DSLR Camera',
      description: 'High-end DSLR for professional photography',
      value: 1999.99,
      stock: 25,
      category: ProductCategory.Electronics,
      sku: 'CAM-DSLR-PRO-BLK',
      brand: 'PhotoMaster',
      color: 'Black',
      weight: 1.5,
      weightUnit: 'kg',
      dimensions: { length: 15, width: 12, height: 8, unit: 'cm' },
      isAvailable: true,
      tags: ['camera', 'DSLR', 'professional', 'photography'],
      condition: ProductCondition.New,
      warrantyPeriod: 24,
      priceHistory: [
        { date: new Date('2023-02-05'), price: 2199.99 },
        { date: new Date('2023-07-20'), price: 1999.99 },
      ],
    },
    {
      id: 9,
      name: 'Organic Cotton T-Shirt',
      description: 'Soft, eco-friendly basic tee',
      value: 24.99,
      stock: 200,
      category: ProductCategory.Clothing,
      sku: 'CLO-TS-ORG-M-GRN',
      brand: 'EcoWear',
      color: 'Forest Green',
      size: ProductSize.M,
      weight: 0.2,
      weightUnit: 'kg',
      dimensions: { length: 70, width: 50, height: 1, unit: 'cm' },
      isAvailable: true,
      tags: ['t-shirt', 'organic', 'eco-friendly', 'basics'],
      condition: ProductCondition.New,
      priceHistory: [{ date: new Date('2023-04-18'), price: 24.99 }],
    },
    {
      id: 10,
      name: 'Smart Home Security Camera',
      description: 'Wi-Fi enabled home security camera with night vision',
      value: 89.99,
      stock: 100,
      category: ProductCategory.Electronics,
      sku: 'ELEC-SEC-CAM-WHT',
      brand: 'SafeGuard',
      color: 'White',
      weight: 0.3,
      weightUnit: 'kg',
      dimensions: { length: 10, width: 7, height: 7, unit: 'cm' },
      isAvailable: true,
      tags: ['security camera', 'smart home', 'Wi-Fi', 'night vision'],
      condition: ProductCondition.New,
      warrantyPeriod: 24,
      priceHistory: [{ date: new Date('2023-05-30'), price: 89.99 }],
    },
    {
      id: 11,
      name: 'Wireless Gaming Mouse',
      description: 'High-precision wireless mouse for gaming',
      value: 79.99,
      stock: 150,
      category: ProductCategory.Electronics,
      sku: 'ELEC-GM-WL-BLK',
      brand: 'GameMaster',
      color: 'Black',
      weight: 0.12,
      weightUnit: 'kg',
      dimensions: { length: 12, width: 6, height: 4, unit: 'cm' },
      isAvailable: true,
      tags: ['gaming mouse', 'wireless', 'high-precision'],
      condition: ProductCondition.New,
      warrantyPeriod: 24,
      priceHistory: [{ date: new Date('2023-06-10'), price: 79.99 }],
    },
  ];

  getProducts(): Observable<Product[]> {
    this.mockHistory();
    return of(this.products);
  }

  getProduct(id: Number): Observable<Product | undefined> {
    return of(this.products.find((p) => p.id === id));
  }

  addProduct(product: Product): Observable<Product> {
    const newProduct = { ...product, id: Date.now() };
    this.products = [newProduct, ...this.products];
    return of(newProduct);
  }

  updateProduct(product: Product): Observable<Product> {
    const index = this.products.findIndex((p) => p.id === product.id);

    if (index !== -1) {
      this.products = [
        ...this.products.slice(0, index),
        product,
        ...this.products.slice(index + 1),
      ];
    }
    return of(product);
  }

  deleteProduct(id: number): Observable<boolean> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products = [
        ...this.products.slice(0, index).concat(this.products.slice(index + 1)),
      ];
      return of(true);
    }
    return of(false);
  }

  // mock some stock history numbers
  mockHistory() {
    this.products.forEach((product) => {
      if (!product.stockHistory) {
        const history = [];
        const currentDate = new Date();

        const maxDailyVariation = Math.max(Math.floor(product.stock * 0.2), 1);
        const restockThreshold = Math.floor(product.stock * 0.3);
        const restockAmount = Math.floor(product.stock * 0.7);

        let currentStock = product.stock;
        for (let i = 0; i < 20 - 1; i++) {
          const date = new Date(currentDate);
          date.setDate(date.getDate() - (20 - i));

          if (currentStock <= restockThreshold) {
            currentStock += restockAmount;
          } else {
            const change =
              Math.floor(Math.random() * maxDailyVariation) *
              (Math.random() < 0.6 ? -1 : 1);
            currentStock = Math.max(0, currentStock + change);
          }
          history.push({ date: date, stock: currentStock });
        }
        history.push({ date: currentDate, stock: product.stock });

        product.stockHistory = history;
      }
    });
  }
}
