import styles from "./styles.module.scss";
export const Target = ({ count, text, color }) => {
  return (
    <article className={`${styles.container} ${styles["container__" + color]}`}>
      <p className={styles.count}>{count}</p>
      <p className={styles.text}>{text}</p>
    </article>
  );
};
