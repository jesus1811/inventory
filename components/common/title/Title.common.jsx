import styles from "./styles.module.scss";

export const Title = ({ children, variant }) => {
  return <h2 className={`${styles.title} ${styles["title__"+variant]}`}>{children}</h2>;
};
