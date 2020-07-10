import { useState, useEffect, useContext } from "react";
import styles from "./DoudounePers.module.scss";
import CartContext from "../CartContext";

function Doudoune(article) {
  return (
    <img
      className={styles.articleImage}
      src={"http://localhost:1337" + article.item.item.picture.url}
    />
  );
}
function Description(article) {

  return (
    <div className={styles.div}>
      <div className={styles.div}>
        <span className={styles.prename}>
          Doudoune Homme {article.item.item.color}
        </span>{" "}
        <br />
        <span className={styles.mainname}>MAT BASIC</span>
        <br />
        <br />
        <span className={styles.price}>{article.item.item.price}€ TTC</span>
        <br />
        <br />
      </div>
      <div>
        <p className={styles.description}>
          {" "}
          La doudoune Jordan et son style bombers est un incontournable cette
          saison. Toujours rembourré plume et duvet, ce modèle comporte un bord
          cote aux poignets, au col et en bas, et deux poches pressions.
        </p>
      </div>
      <div>
        <label className={styles.label}>Caractéristiques</label>
        <ul className={styles.ul}>
          <li>Pochon pratique et transportable</li>
          <li>Conçu pour protéger du froid</li>
          <li>Plume et duvet pour une isolation légère</li>
          <li>Déperlant : laisse glisser l'eau sans l'absorber</li>
          <li>Protège du vent</li>
        </ul>
      </div>
      <div>
        <label className={styles.label}>Composition</label>
        <ul className={styles.ul}>
          <li>Matière : 100% polyamide.</li>
          <li>Doublure : 100% polyamide.</li>
          <li>Rembourrage : 90% duvet, 10% plume.</li>
        </ul>
      </div>
    </div>
  );
}
export default function DoudounePers(article) {
  const [hauteur, setHauteur] = useState(70);
  const [largeur, setLargeur] = useState(80);
  const [taille, setTaille] = useState(null);
  const [panier, setPanier] = useState(0);
  const { addToCart } = useContext(CartContext);


  function generateTaille(hauteur, largeur) {
    if (hauteur <= 72 || largeur <= 89) {
      setTaille("S");
    } else if (
      (hauteur >= 73 && hauteur <= 80) ||
      (largeur >= 90 && largeur <= 97)
    ) {
      setTaille("M");
    } else if (
      (hauteur >= 81 && hauteur <= 88) ||
      (largeur >= 98 && largeur <= 105)
    ) {
      setTaille("L");
    } else if (
      (hauteur >= 89 && hauteur <= 96) ||
      (largeur >= 106 && largeur <= 112)
    ) {
      setTaille("XL");
    } else if (
      (hauteur >= 97 && hauteur <= 104) ||
      (largeur >= 113 && largeur <= 118)
    ) {
      setTaille("2XL");
    } else if (
      (hauteur >= 105 && hauteur <= 112) ||
      (largeur >= 119 && largeur <= 124)
    ) {
      setTaille("3XL");
    } else if (
      (hauteur >= 113 && hauteur <= 120) ||
      (largeur >= 125 && largeur <= 130)
    ) {
      setTaille("4XL");
    } else {
      setTaille("5XL");
    }
  }

  function handleCartClick(item) {
    addToCart(item);
  }

  useEffect(() => {
    generateTaille(hauteur, largeur);
  }, [hauteur, largeur]);

  return (
    <div className={styles.container}>
      <Description item={article} />
      <div className={styles.doudouneContainer}>
        <Doudoune item={article} />
      </div>

      <div className={styles.formContainer}>
        <h2>Taille</h2>
        <label>
          Taille:
          <select>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option selected value="XL">
              XL
            </option>
            <option selected value="2XL">
              2XL
            </option>
            <option selected value="3XL">
              3XL
            </option>
            <option selected value="4Xl">
              4XL
            </option>
            <option selected value="5XL">
              5XL
            </option>
          </select>
        </label>

        <div className={styles.separator}></div>

        <label>
          Tour de taille (cm) :
          <input
            class="form-control"
            type="number"
            value={hauteur}
            onChange={(e) => setHauteur(e.target.value)}
          />
        </label>

        <label>
          Tour de bassin (cm) :
          <input
            class="form-control"
            type="number"
            value={largeur}
            onChange={(e) => setLargeur(e.target.value)}
          />
        </label>

        <label>
          Taille conseillé :
          <input
            disabled="true"
            class="form-control"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
          />
        </label>
        <div className={styles.separator}></div>
        <button
          onClick={() => handleCartClick(article.item)}
          class="btn btn-primary"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
