import React, { useState, useEffect } from "react";
import axios from "axios";
import hero from "../assets/img/hero-img.jpg";
import whiteback from "../assets/img/hero-whiteback.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("backend-vinted:8080/offers");
        // "https://lereacteur-vinted-api.herokuapp.com/offers"

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
              <button>Commencer à vendre</button>
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
