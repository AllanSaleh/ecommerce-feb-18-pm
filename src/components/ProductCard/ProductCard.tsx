import { Product } from '../../types/types';
import './ProductCard.css';
import StarRatings from 'react-star-ratings';
import { useCart } from '../../context/CartContext';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const styles: Record<string, React.CSSProperties> = {
    productCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black',
      padding: '10px',
      margin: '10px',
    },
    productImage: {
      width: '100px',
      height: '100px',
    },
  };

  const { addToCart } = useCart();

  return (
    <div className='product-card'>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <StarRatings
        numberOfStars={5}
        rating={product.rating.rate}
        starRatedColor='gold'
        starDimension='25px'
        starSpacing='1px'
      />
      <h4>{product.category}</h4>
      <img
        src={product.image}
        alt={product.title}
        style={styles.productImage}
      />
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
