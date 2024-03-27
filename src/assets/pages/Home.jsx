import hero from "../img/hero-img.jpg";
import whiteback from "../img/hero-whiteback.svg";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  const backgroundImage = {
    backgroundImage: `url(${hero})`,
  };
  return (
    <>
      <section className="hero-img" style={backgroundImage}>
        <img className="hero-back" src={whiteback} alt="" />
        <div className="hero-sold">
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencer à vendre</button>
        </div>
      </section>

      <section className="articles">
        {data.offers.map((offer) => (
          <div key={offer.id}>
            <h2>{offer.owner.account.username}</h2>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
