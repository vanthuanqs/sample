import { useEffect, useState } from 'react';
import { Product } from '../../types';
import ProductDetails from './components/ProductDetails';
import ProductTable from './components/ProductTable';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProducts(json))
    .catch(err => {
      console.error(err);
      setProducts([]);
    })
  }, []);

  return <div className="grid grid-cols-2 gap-10">
    <ProductTable
      products={products}
      onSelectProduct={setSelectedProduct}
    />
    <div>
      <button
        className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 cursor-pointer text-white rounded-full"
        onClick={() => setSelectedProduct(undefined)}
      >&times;</button>
      <ProductDetails product={selectedProduct} />
    </div>
  </div>
}

export default ProductList;
