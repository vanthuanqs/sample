import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import ProductTable from './components/ProductTable';
import { fetchProducts } from './productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Loading from './components/Loading';


const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!error) {
    return <div className="my-20 mx-auto text-md text-red-600">Error: {error}</div>;
  }

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
