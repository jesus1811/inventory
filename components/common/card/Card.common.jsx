import styles from "./styles.module.scss";

const Card = ({ children, center, small }) => {
  if (center) center = "card__center";
  if (small) small = "card__small";

  return <article className={`${styles.card} ${styles[center]} ${styles[small]}`}>{children}</article>;
};

export default Card;
