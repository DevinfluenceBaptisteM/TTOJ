import styles from "./itemPreview.module.scss";
import Link from "next/link";
export default function ItemPreview(props) {
  return (
    <Link href={`/personnalisation/${props.item.label}`}>
      <article className={styles.articleContainer}>
        <div className={styles.articleImage}>
          <img scr={"localhost:1337" + props.item.picture.url} />
        </div>

        <div className={styles.articleBottom}>
          <span>{props.item.label}</span>
        </div>
      </article>
    </Link>
  );
}
