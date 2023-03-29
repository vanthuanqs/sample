import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import ProductRating from './components/ProductRating';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector((state: RootState) =>
    id ? state.products.products.find(({ id: productId }) => productId === +id) : null
  );

  return product ? (
    <div className="my-4">
      <div>
        <Link
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 cursor-pointer text-white rounded-full float-right"
          to="/products"
        >
          Close
        </Link>
        <h4 className="text-2xl mb-3 pr-20">{product.id}: {product.title}</h4>
        <hr className="border-b-1 mb-4" />
        <div className="text-lg mb-3">
          Rating:&nbsp;
          <ProductRating rating={product.rating} />
        </div>
        <p className="mb-3">{product.description}</p>
        <img src={product.image} alt={product.title} />
      </div>
    </div>
  ) : <></>;
}

export default ProductDetails;
