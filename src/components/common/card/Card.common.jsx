import styles from "./styles.module.scss";

const Card = ({ children, center, small, onClick, pointer }) => {
  if (center) center = "card__center";
  if (small) small = "card__small";
  if (pointer) pointer = "card__pointer";

  return (
    <article
      onClick={onClick}
      className={`${styles.card} ${styles[center]} ${styles[small]} ${styles[pointer]}`}
    >
      {children}
    </article>
  );
};

export default Card;
