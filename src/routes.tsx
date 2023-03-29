import { Navigate, useRoutes } from 'react-router-dom';
import ProductList from './pages/products/ProductList';
import ProductDetails from './pages/products/ProductDetails';


const Routes = () => {
  return useRoutes([
    {
      path: 'products',
      element: <ProductList />,
      children: [
        { path: ':id', element: <ProductDetails /> },
      ]
    },
    {
      path: '/',
      element: <Navigate to="/products" />,
    }
  ])
}

export default Routes;
