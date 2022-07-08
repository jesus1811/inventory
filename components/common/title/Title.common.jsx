import styles from "./styles.module.scss";

const Title = ({ children, variant }) => {
  return <h2 className={`${styles.title} ${styles["title__" + variant]}`}>{children}</h2>;
};
export default Title;
