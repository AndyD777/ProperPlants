import "./PlantItem.css";

export default function PlantItem({ plant, addToCart }) {
  return (
    <div className="plant-item">
      <div className="plant-emoji">{plant.image}</div>
      <div className="plant-name">{plant.name}</div>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}