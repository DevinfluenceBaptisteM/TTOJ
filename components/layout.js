import styles from "./layout.module.scss";
import CartContext from "./CartContext";
import Link from "next/link";

import { useContext } from "react";

export default function Layout({ children }) {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.menuHeader}>
          <div style={{ width: "40%" }}>
            <ul className={styles.menuHeader}>
              <li className={styles.liHeader}>Homme</li>
              <li className={styles.liHeader}>Femme</li>
              <li className={styles.liHeader}>Enfant</li>
              <li className={styles.liHeader}>Accessoires</li>
              <li className={styles.liHeader}>Nouvelle collection</li>
            </ul>
          </div>
          <Link href={"/"}>
            <div style={{ width: "33%" }} className={styles.logo}></div>
          </Link>
          <div style={{ width: "33%", justifyContent: "flex-end" }}>
            <ul
              style={{ justifyContent: "flex-end" }}
              className={styles.menuHeader}
            >
              <li style={{ textDecoration: "underline" }}>
                Panier{" "}({cart.length})
              </li>
            </ul>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
