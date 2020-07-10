import styles from "./itemPreview.module.scss";
import Link from "next/link";

export default function ItemPreview(props) {
  return (
    <Link href={`/personnalisation/${props.item.slug}`}>
      <article className={styles.articleContainer}>
        <img
          className={styles.articleImage}
          src={"http://localhost:1337" + props.item.picture.url}
        />

        <div className={styles.articleBottom}>
          <span>{props.item.label}</span>
        </div>
      </article>
    </Link>
  );
}
