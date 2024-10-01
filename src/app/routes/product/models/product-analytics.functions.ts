import { Product, ProductCategory } from './product.model';

interface CategoryCount {
  category: ProductCategory;
  count: number;
}

export function getCategoryCounts(products: Product[]): CategoryCount[] {
  const categoryCountMap = products.reduce((map, product) => {
    if (product.category) {
      map.set(
        product.category,
        (map.get(product.category) || 0) + product.stock
      );
    }
    return map;
  }, new Map<ProductCategory, number>());

  return Array.from(categoryCountMap.entries()).map(([category, count]) => ({
    category,
    count,
  }));
}

export function getTotalStock(products: Product[]): number {
  return products.reduce((total, product) => {
    return total + product.stock;
  }, 0);
}

export function getTotalStockValue(products: Product[]): number {
  return products.reduce((total, product) => {
    return total + product.stock * product.value;
  }, 0);
}
