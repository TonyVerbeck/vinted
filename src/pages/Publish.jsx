import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState();
  const [exchange, setExchange] = useState(false);

  const handleCheckboxChange = (event) => {
    setExchange(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      formData.append("exchange", exchange);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        // "https://site--backend-vinted--z2glzylh58rz.code.run/offers/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <main className="publish">
      <section className="publish-container">
        <h2 className="publish-title">Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div className="file-upload-container">
            <div className="file-upload">
              <div className="btn-addpicture">
                <label htmlFor="add-picture" className="label-add">
                  <span>+</span> <span>Ajoute une photo</span>
                </label>
                <input
                  id="add-picture"
                  style={{ display: "none" }}
                  type="file"
                  name="picture"
                  onChange={(event) => {
                    setPicture(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="input-publish">
            <div className="inside-input-publish">
              <h3>Titre</h3>
              <input
                type="text"
                placeholder="ex: Pantalon large marron"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              ></input>
            </div>
            <div className="inside-input-publish">
              <h3>Décris ton article</h3>
              <textarea
                placeholder="ex: très peu porté, coupe large"
                name="description"
                rows="5"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="input-publish">
            <div className="inside-input-publish">
              <h3>Marque</h3>
              <input
                type="text"
                placeholder="ex: Pantalon large marron"
                name="marque"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              ></input>
            </div>
            <div className="inside-input-publish">
              <h3>Taille</h3>
              <input
                type="text"
                placeholder="ex: Nike"
                name="taille"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              ></input>
            </div>
            <div className="inside-input-publish">
              <h3>Couleur</h3>
              <input
                type="text"
                placeholder="ex: Marron"
                name="couleur"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              ></input>
            </div>
            <div className="inside-input-publish">
              <h3>Etat</h3>
              <input
                type="text"
                placeholder="ex: En très bon état"
                name="etat"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              ></input>
            </div>
            <div className="inside-input-publish">
              <h3>Lieu</h3>
              <input
                type="text"
                placeholder="ex: Paris"
                name="lieu"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="input-publish">
            <div className="inside-input-publish">
              <h3>Prix</h3>
              <div className="checkbox-style">
                <input
                  type="text"
                  placeholder="0,00 €"
                  name="prix"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                ></input>
                <div>
                  <input
                    type="checkbox"
                    value={exchange}
                    checked={exchange}
                    onChange={handleCheckboxChange}
                  ></input>
                  <span style={{ fontSize: "16px" }}>
                    Je suis intéréssé(e) par les échanges
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="publish-valid">
            <button type="submit" name="form-validation">
              Ajouter
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Publish;
