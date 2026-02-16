import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index/index.jsx";
import AnimePage from "./pages/anime/Anime.jsx";
import "./index.css";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/anime/:id" element={<AnimePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
