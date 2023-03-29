import { Rating } from '../../../types';
import { ComponentProps } from 'react';

interface RatingProps extends ComponentProps<'span'> {
  rating: Rating;
}

const ProductRating = ({ rating, ...rest }: RatingProps) => {
  return (
    <span {...rest}>
    {rating.rate}{' '}
    ({rating.count} vote{rating.count > 1 ? 's' : ''})
  </span>
  );
}

export default ProductRating;
