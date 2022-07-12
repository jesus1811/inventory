import styles from "./styles.module.scss";

const Add = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src="/add.svg" alt="agregar" />
    </button>
  );
};
export default Add;
