import { ColumnDefinition, Product } from '../../types';
import ProductRating from './components/ProductRating';

export const columns: ColumnDefinition<keyof Product>[] = [
  { field: 'id', title: '#' },
  { field: 'title', title: 'Title' },
  { field: 'price', title: 'Price' },
  { field: 'category', title: 'Category' },
  {
    field: 'rating',
    title: 'Rating',
    formatter: row => <ProductRating rating = { row.rating } />
},
]
