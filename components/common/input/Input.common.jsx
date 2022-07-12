import styles from "./styles.module.scss";

const Input = ({ value, onChange, type, placeholder }) => {
  return <input onChange={onChange} value={value} type={type} placeholder={placeholder} className={styles.input} />;
};
export default Input;
