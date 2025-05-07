import "./CartItem.css";

export default function CartItem({ item, updateQuantity }) {
  return (
    <div className="cart-item">
      <span>{item.image}</span>
      <span>{item.name}</span>
      <span>Qty: {item.quantity}</span>
      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
    </div>
  );
}