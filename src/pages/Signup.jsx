import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!value.includes("@")) {
      setError("Email doit contenir le symbole '@'");
    } else {
      setError("");
    }
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleCheckboxChange = (event) => {
    setNewsletter(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );

      handleToken(response.data.token);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);

      if (error.response.status === 409) {
        setError("This email already as an account, please use another one");
      } else if (error.response.data.message === "Missing parameters") {
        setError("Please fill in all the fields");
      }
    }
  };

  return (
    <div className="form-container">
      <h2>S'inscrire</h2>
      <form className="form-signup" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <input
          type="email"
          placeholder="Email"
          name="mail"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <input
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <div className="form-checkbox">
          <div>
            <input
              type="checkbox"
              checked={newsletter}
              onChange={handleCheckboxChange}
            ></input>
            <span>S'inscrire à notre Newsletter</span>
          </div>
          <p></p>En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </div>

        <button className="btn-valid" type="submit">
          S'inscrire
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <p className="lien-login">Tu as déja un compte? Connectes-toi !</p>
      </Link>
    </div>
  );
};
export default Signup;
