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
        {data.offers.map((offer) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={offer._id}
              to={`/offer/${offer._id}`}
            >
              <article className="offer">
                <div className="username">
                  <img
                    className="username-logo"
                    src={offer.owner.account.avatar?.url}
                    alt=""
                  />
                  <span>{offer.owner.account.username}</span>
                </div>
                <img
                  className="img-offer"
                  src={offer.product_image.url}
                  alt=""
                />
                <div className="infos-offer">
                  <span className="infos-price">{offer.product_price} €</span>
                  {offer.product_details.map((details) => {
                    return (
                      <>
                        <div>
                          <span>{details.TAILLE}</span>
                          <span>{details.MARQUE}</span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Home;
