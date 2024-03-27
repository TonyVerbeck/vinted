import React, { useState, useEffect } from "react";
import logo from "./assets/img/logo-vinted.svg";
import Home from "./assets/pages/Home";
import Offer from "./assets/pages/Offer";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Router>
        <header>
          <div className="logo-header">
            <Link to="/">
              <img src={logo} alt="logo-vinted" />
            </Link>
          </div>
          <div>
            <input
              className="input-header"
              type="text"
              placeholder="Recherche des articles"
              name="searchbar"
            />
          </div>
          <div>
            <button className="btn-header">S'inscrire</button>
            <button className="btn-header">Se connecter</button>
          </div>
          <button className="btn-headerSold">Vends tes articles</button>
        </header>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/offer" element={<Offer data={data} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
