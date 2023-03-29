import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="my-4">
      <div>
        <Link
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 cursor-pointer text-white rounded-full float-right"
          to="/products"
        >Close
        </Link>
        ProductDetails {id}
        {/*<h4 className="text-2xl mb-3 pr-20">{product.id}: {product.title}</h4>
          <hr className="border-b-1 mb-4" />
          <ProductRating className="block mb-3" rating={product.rating} />
          <p className="mb-3">{product.description}</p>
          <img src={product.image} alt={product.title} />*/}
      </div>
    </div>
  )
}

export default ProductDetails;
