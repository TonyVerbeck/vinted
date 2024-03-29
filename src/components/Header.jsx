import logo from "../assets/img/logo-vinted.svg";
import { Link } from "react-router-dom";

const Header = ({ token, handleToken }) => {
  return (
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

      {token ? (
        <button
          onClick={() => {
            handleToken(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          <div className="btn-header">
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>

            <Link to="/login">
              <button>Se connecter</button>
            </Link>
          </div>
          <button className="btn-headerSold">Vends tes articles</button>
        </>
      )}
    </header>
  );
};

export default Header;
