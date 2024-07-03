import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 1: Create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Use the state variable to determine the app class
  const appClass = isDarkMode ? "App dark" : "App light";

  // Step 3: Add an event handler to toggle the dark mode state
  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 4: Attach the event handler to the button */}
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
