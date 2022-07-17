import styles from "./styles.module.scss";

const Card = ({ children, center, small, onClick }) => {
  if (center) center = "card__center";
  if (small) small = "card__small";

  return <article onClick={onClick} className={`${styles.card} ${styles[center]} ${styles[small]}`}>{children}</article>;
};

export default Card;
