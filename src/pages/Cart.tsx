import { useCart } from '../context/CartContext';

const styles = {
  cartItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
  },
  cartItemImage: {
    width: '100px',
    height: '100px',
  },
};

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  let total = 0;
  for (const item of cartItems) {
    total += item.price * item.quantity;
  }

  return (
    <div>
      <h1>Current Shopping Cart:</h1>
      <button onClick={clearCart}>Clear Cart</button>
      {cartItems.map((item) => (
        <div key={item.id} style={styles.cartItem}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} style={styles.cartItemImage} />
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div>
        <h4>Total: ${total}</h4>
      </div>
    </div>
  );
};
export default ShoppingCart;
