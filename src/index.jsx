import React, { useState, useEffect} from "react";
import { createRoot } from "react-dom/client";

const unusedVar = "Hello!";

const App = () => {
  const [ count ] = useState(1);
  // This should trigger an eslint error.
  useEffect(() => console.log(`here is count: ${count}`))
  return <div>
    <h1>Sample React App</h1>
    <div>
      This should be checked by eslint through @parcel/validator-eslint
    </div>
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
