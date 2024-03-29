import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      handleToken(response.data.token);
      console.log(response.data.token);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="form-container">
      <h2>Se connecter</h2>
      <form className="form-signup" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <div>
          <Link to="/">
            <input className="btn-valid" type="submit" value="Se connecter" />
          </Link>
        </div>
        <Link to="/signup">
          <p className="lien-login">Pas encore de compte? Inscris-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;