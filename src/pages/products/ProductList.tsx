import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Product } from '../../types';
import ProductTable from './components/ProductTable';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProducts(json))
    .catch(err => {
      console.error(err);
      setProducts([]);
    })
  }, []);

  return <div className="flex gap-10">
    <ProductTable
      products={products}
      className="w-2/3"
    />

    <div className="w-1/3">
      <Outlet />
    </div>
  </div>
}

export default ProductList;
