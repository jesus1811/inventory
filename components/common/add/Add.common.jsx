import styles from "./styles.module.scss";

export const Add = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src="/add.svg" alt="agregar" />
    </button>
  );
};
