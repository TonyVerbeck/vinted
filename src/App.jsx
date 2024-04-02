import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Publish from "./pages/Publish";
import Signup from "./pages/Signup";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(Cookies.get("tokenVinted") || null);
  const [search, setSearch] = useState("");
  const [sortPrice, setSortPrice] = useState(false);
  const [isDisabled, setIsdisabled] = useState(false);
  const [priceFilter, setPriceFilter] = useState([0, 500]);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("tokenVinted", token, { expires: 30 });
      setToken(token);
    } else {
      Cookies.remove("tokenVinted");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header
        token={token}
        search={search}
        handleToken={handleToken}
        setSearch={setSearch}
        sortPrice={sortPrice}
        setSortPrice={setSortPrice}
        isDisabled={isDisabled}
        setIsdisabled={setIsdisabled}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              token={token}
              setSearch={setSearch}
              sortPrice={sortPrice}
              priceFilter={priceFilter}
            />
          }
        />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route
          path="/payment"
          element={<Payment handleToken={handleToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
