import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Tailwind from "./Tailwind.tsx";
import Styled from "./Styled.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tailwind" element={<Tailwind />} />
      <Route path="/styled" element={<Styled />} />
    </Routes>
  </BrowserRouter>
);
