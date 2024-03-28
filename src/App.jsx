import React, { useState, useEffect } from "react";
import logo from "./assets/img/logo-vinted.svg";
import Home from "./assets/pages/Home";
import Offer from "./assets/pages/Offer";
import Signup from "./assets/pages/Signup";
import Login from "./assets/pages/Login";
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
              <img src={logo} alt="" />
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
          <div className="btn-header">
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>

            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
          <button className="btn-headerSold">Vends tes articles</button>
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home data={data} />} />
          <Route path="/offer/:id" element={<Offer data={data} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
