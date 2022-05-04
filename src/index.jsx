import React from "react";
import { createRoot } from "react-dom/client";

const App = () => (
  <div>
    <h1>Sample React App</h1>
    <div>
      This should be checked by eslint through @parcel/validator-eslint
    </div>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
