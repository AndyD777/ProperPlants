import PlantCard from "./PlantCard.jsx";
import "./PlantList.css";

export default function PlantList({ plants, addToCart }) {
  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
}
