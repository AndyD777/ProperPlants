import PlantItem from "./PlantItem.jsx";
import "./PlantList.css";

export default function PlantList({ plants, addToCart }) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
}