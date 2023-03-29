import { Navigate, useRoutes } from 'react-router-dom';
import ProductList from './pages/products/ProductList';
import CreateProduct from './pages/products/CreateProduct';
import ProductDetails from './pages/products/ProductDetails';
import EditProduct from './pages/products/EditProduct';
import DeleteProductModal from './pages/products/DeleteProductModal';


const Routes = () => {
  return useRoutes([
    {
      path: 'products',
      element: <ProductList />,
      children: [
        { path: 'create', element: <CreateProduct /> },
        { path: ':id', element: <ProductDetails /> },
        { path: ':id/edit', element: <EditProduct /> },
        { path: ':id/delete', element: <DeleteProductModal /> },
      ]
    },
    {
      path: '/',
      element: <Navigate to="/products" />,
    }
  ])
}

export default Routes;
