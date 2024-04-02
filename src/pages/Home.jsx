import { useState, useEffect } from "react";
import axios from "axios";
import hero from "../assets/img/hero-img.jpg";
import whiteback from "../assets/img/hero-whiteback.svg";
import { Link } from "react-router-dom";

const Home = ({ search, token, sortPrice, priceFilter }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?sort=${
            sortPrice ? "price-desc" : "price-asc"
          }&title=${search}&priceMin=${priceFilter[0]}&priceMax=${
            priceFilter[1]
          }`
          // `https://site--backend-vinted--z2glzylh58rz.code.run/offers?title=${search}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search, sortPrice, priceFilter]);

  return (
    <>
      {isLoading ? (
        <span>En cours de chargement... </span>
      ) : (
        <>
          <section
            className="hero-img"
            style={{ backgroundImage: `url(${hero})` }}
          >
            <img className="hero-back" src={whiteback} alt="" />
            <div className="hero-sold">
              <p>Prêts à faire du tri dans vos placards ?</p>

              <Link to={token ? "/publish" : "/"}>
                <button>Commencer à vendre</button>
              </Link>
            </div>
          </section>

          <section className="articles">
            {data.offers.map((offer) => (
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
                    <div className="product-details">
                      <div>
                        <span>{offer.product_details[1].TAILLE}</span>
                        <span>{offer.product_details[0].MARQUE}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default Home;
