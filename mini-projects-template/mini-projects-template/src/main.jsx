import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Точка входу: монтуємо кореневий React-компонент у DOM-вузол #root
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode допомагає виявляти потенційні проблеми під час розробки
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
