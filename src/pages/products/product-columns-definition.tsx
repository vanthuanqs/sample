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
  {
    title: 'Edit',
    formatter: (row) => (
      <div className="whitespace-nowrap">
        <Link
          className="px-4 py-2 mb-1 bg-cyan-500 hover:bg-cyan-400 cursor-pointer text-white rounded-full float-right"
          to={`/products/${row.id}/edit`}
        >Edit</Link>

        <Link
          className="px-4 py-2 bg-red-500 hover:bg-red-400 cursor-pointer text-white rounded-full float-right"
          to={`/products/${row.id}/delete`}
        >Delete</Link>
      </div>
    ),
  },
]
