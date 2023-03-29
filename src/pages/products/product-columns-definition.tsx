import { ColumnDefinition, Product } from '../../types';
import ProductRating from './components/ProductRating';
import { Link } from 'react-router-dom';

export const columns: ColumnDefinition<Product>[] = [
  { field: 'id', title: '#' },
  {
    field: 'title',
    title: 'Title',
    formatter: (row) => (
      <Link className="bold" to={`/products/${row.id}`}>{row.title}</Link>
    )
  },
  { field: 'price', title: 'Price' },
  { field: 'category', title: 'Category' },
  {
    field: 'rating',
    title: 'Rating',
    formatter: row => <ProductRating rating={row.rating} />
  },
]
