import ReactDom from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
