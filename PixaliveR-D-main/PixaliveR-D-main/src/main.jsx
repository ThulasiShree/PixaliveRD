import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<div><Landing /></div>} />
        <Route path="/about" element={<div><About /></div>} />
        <Route path="/contact" element={<div><Contact /></div>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
