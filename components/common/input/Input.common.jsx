import styles from "./styles.module.scss";

const Input = ({ placeholder, type, onChange }) => {
  return <input className={styles.input} placeholder={placeholder} type={type} onChange={onChange} />;
};
export default Input;
