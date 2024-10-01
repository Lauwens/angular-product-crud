export enum ProductCategory {
  Electronics = 'Electronics',
  Clothing = 'Clothing',
  Books = 'Books',
  HomeAndGarden = 'Home & Garden',
  Toys = 'Toys',
}

export enum ProductSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

export enum ProductCondition {
  New = 'New',
  Used = 'Used',
  Refurbished = 'Refurbished',
}

interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: 'cm' | 'inch';
}

interface PriceHistory {
  date: Date;
  price: number;
}

interface StockHistory {
  date: Date;
  stock: number;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  value: number;
  stock: number;
  category?: ProductCategory;
  sku: string;
  brand: string;
  color: string;
  size?: ProductSize;
  weight: number;
  weightUnit: 'kg' | 'lb';
  dimensions: Dimensions;
  isAvailable: boolean;
  tags: string[];
  condition: ProductCondition;
  warrantyPeriod?: number;
  priceHistory: PriceHistory[];
  stockHistory?: StockHistory[];
}
