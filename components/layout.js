import styles from "./layout.module.scss";
import Copyright from "./copyright/copyright";
import CartContext from "./CartContext";
import Link from "next/link";

import { useContext } from "react";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <h1>Logo centré et retourné</h1>
        </Link>

        {/* <ul className={styles.menuLayout}>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>

          <li>
            <Link href="/les-states">
              <a>States</a>
            </Link>
          </li>
        </ul> */}
      </header>
      {children}

      <footer>
        <Copyright
          year={2021}
          company={"Hariba Corporation"}
          onClick={() => {
            alert("Haribba !");
          }}
        />
      </footer>
    </div>
  );
}
