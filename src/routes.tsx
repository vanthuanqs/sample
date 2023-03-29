import { Navigate, useRoutes } from 'react-router-dom';
import ProductList from './pages/products/ProductList';
import CreateProduct from './pages/products/CreateProduct';
import EditProduct from './pages/products/EditProduct';


const Routes = () => {
  return useRoutes([
    {
      path: 'products',
      children: [
        { path: '', element: <ProductList /> },
        { path: 'create', element: <CreateProduct /> },
        { path: ':id', element: <EditProduct /> },
      ]
    },
    {
      path: '/',
      element: <Navigate to="/products" />,
    }
  ])
}

export default Routes;
