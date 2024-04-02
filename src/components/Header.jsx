import logo from "../assets/img/logo-vinted.png";
import { Link } from "react-router-dom";
import PriceRange from "./PriceRange";
import SwitchButton from "./SwitchButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

const Header = ({
  token,
  search,
  handleToken,
  setSearch,
  sortPrice,
  setSortPrice,
  isDisabled,
  // setIsDisabled,
  priceFilter,
  setPriceFilter,
}) => {
  return (
    <header>
      <div className="logo-header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="header-searchbar">
        <FontAwesomeIcon
          className="header-icon"
          icon="fa-solid fa-magnifying-glass"
        />
        <input
          className="input-header"
          type="text"
          placeholder="Rechercher des articles"
          name="searchbar"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div className="filters">
          <SwitchButton sortPrice={sortPrice} setSortPrice={setSortPrice} />
          <PriceRange
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
        </div>
      </div>

      {token ? (
        <>
          <Link to="/">
            <button
              className="btn-disconnect"
              onClick={() => {
                handleToken(null);
              }}
            >
              Se déconnecter
            </button>
          </Link>
          <Link to="/publish">
            <button className="btn-headerSold">Vends tes articles</button>
          </Link>
        </>
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
          <Link to="/login">
            <button className="btn-headerSold">Vends tes articles</button>
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
