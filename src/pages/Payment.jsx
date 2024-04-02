import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Payment = ({ handleToken }) => {
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;

  const feeProtect = (price / 10).toFixed(2);
  const feePort = ((price * 20) / 100).toFixed(2);
  const totalPrice = Number(price) + Number(feeProtect) + Number(feePort);

  const stripePromise = loadStripe(
    "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
  );

  const options = {
    mode: "payment",
    amount: Number((totalPrice * 100).toFixed(0)),
    currency: "eur",
    appearance: {
      /*...*/
    },
  };

  return (
    <div className="payment-background">
      <section className="payment-container">
        <div className="recap-product">
          <h4>Résumé de la commande</h4>
          <div className="recap">
            <ul>
              <li>
                Commande <span>{price} €</span>
              </li>
              <li>
                Frais protections acheteurs <span>{feeProtect} €</span>
              </li>
              <li>
                Frais de port<span>{feePort} €</span>
              </li>
            </ul>
          </div>
          <div className="line"></div>
          <div className="recap">
            <ul>
              <li
                style={{ color: "black", fontWeight: 700, marginTop: "20px" }}
              >
                Total <span>{totalPrice} €</span>
              </li>
            </ul>
          </div>
          <div className="payment-buy">
            <div className="recap">
              <p>
                il ne vous reste plus qu'une étape pour vour offrir
                <span style={{ fontWeight: 700 }}> {title}. </span>
                Vous allez payer
                <span style={{ fontWeight: 700 }}> {totalPrice} €</span> (frais
                de protection et frais de port inclus).
              </p>
            </div>
            <div className="divider"></div>
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Payment;
