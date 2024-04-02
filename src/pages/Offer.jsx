import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
          // `https://site--backend-vinted--z2glzylh58rz.code.run/offer/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>loading...</p>
  ) : (
    <div className="offer-background">
      <main className="offer-container">
        <img src={data.product_image.secure_url} alt="" />

        <section className="offer-details">
          <div>
            <p style={{ marginBottom: "25px" }} className="offer-price">
              {data.product_price} <span>€</span>
            </p>
            {data.product_details.map((detail) => {
              const keys = Object.keys(detail);
              const keyName = keys[0];
              return (
                <div
                  style={{
                    fontSize: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="offer-etat"
                  key={keyName}
                >
                  <span
                    style={{
                      color: "#999999",
                      marginBottom: "6px",
                    }}
                  >
                    {keyName}
                  </span>
                  <span style={{ color: "#666666" }}>{detail[keyName]}</span>
                </div>
              );
            })}
          </div>

          <div className="line"></div>

          <div className="offer-recap">
            <p style={{ fontWeight: "700", marginBottom: "20px" }}>
              {data.product_name}
            </p>
            <p style={{ color: "#666", marginBottom: "15px" }}>
              {data.product_description}
            </p>

            <div className="offer-description">
              <img src={data.owner.account.avatar.url} alt="avatar" />
              <span>{data.owner.account.username}</span>
            </div>
            <Link
              to="/payment"
              state={{
                title: `${data.product_name}`,
                price: `${data.product_price}`,
              }}
            >
              <button>Acheter</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Offer;
