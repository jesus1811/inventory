import styles from "./styles.module.scss";

export const Card = ({ children, variant, size }) => {
  return <article className={`${styles.card} ${styles["card__" + variant]} ${styles["card__" + size]}`}>{children}</article>;
};
