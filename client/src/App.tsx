import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NavBar from "./components/nav/NavBar";
import CartPage from "./pages/CartPage";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import Signup from "./components/registration/signup";
import About from "./pages/About";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/carts" element={<CartPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
