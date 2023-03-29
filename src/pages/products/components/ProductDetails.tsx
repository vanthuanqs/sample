import { Product } from '../../../types';
import ProductRating from './ProductRating';

interface ProductDetailsProps {
  product?: Product,
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  if (!product) {
    return <p className="italic text-stone-500 my-4">Select a product to see details</p>
  }

  return <div className="my-4">
    <h4 className="text-2xl mb-2">{product.id}: {product.title}</h4>
    <hr className="border-b-1 mb-4" />
    <ProductRating className="block mb-3" rating={product.rating} />
    <p className="mb-3">{product.description}</p>
    <img src={product.image} alt={product.title} />
  </div>
}

export default ProductDetails;
