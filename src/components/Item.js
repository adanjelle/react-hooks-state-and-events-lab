import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create a state variable for whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Step 2: Determine the class name based on the state
  const itemClass = inCart ? "in-cart" : "";

  // Step 3: Determine the button text based on the state
  const buttonText = inCart ? "Remove from Cart" : "Add to Cart";

  // Step 4: Add an event handler to toggle the item's state
  const handleCartToggle = () => {
    setInCart((prevInCart) => !prevInCart);
  };

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Attach the event handler to the button */}
      <button className="add" onClick={handleCartToggle}>{buttonText}</button>
    </li>
  );
}

export default Item;
