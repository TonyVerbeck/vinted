import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
            <p className="offer-price">
              {data.product_price} <span>€</span>
            </p>
            {data.product_details.map((detail) => {
              const keys = Object.keys(detail);
              const keyName = keys[0];
              return (
                <div key={keyName}>
                  <span>{keyName}</span>
                  <span>{detail[keyName]}</span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Offer;
