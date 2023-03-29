import { Product } from '../types';

export interface ProductsListResult {
  products: Product[]
}

export async function getProducts(): Promise<ProductsListResult> {
  const url = 'https://fakestoreapi.com/products';

  try {
    const issuesResponse = await fetch(url);
    const products: Product[] = await issuesResponse.json();

    return {
      products
    };
  } catch (err) {
    throw err
  }
}
