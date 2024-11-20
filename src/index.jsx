import React from "react";
import { createRoot } from "react-dom/client";
import App from './components/app/App';

import './assets/fonts/Mulish-Bold/font-mulish-bold.css';
import './assets/fonts/Mulish-Regular/font-mulish-regular.css';
import './style/index.scss';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
