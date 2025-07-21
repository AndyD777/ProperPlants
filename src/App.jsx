import { useState } from "react";
import PLANTS from "./data.js";
import PlantList from "./components/PlantList/PlantList.jsx";
import Cart from "./components/Cart/Cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="app">
      <h1>🌱 Proper Plants</h1>
      <PlantList plants={PLANTS} addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
}

