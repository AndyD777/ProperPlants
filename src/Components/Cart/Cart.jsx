import CartItem from "./CartItem.jsx";
import "./Cart.css";

export default function Cart({ cart, updateQuantity }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
        ))
      )}
    </div>
  );
}
