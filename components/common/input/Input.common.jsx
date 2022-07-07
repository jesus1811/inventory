import styles from "./styles.module.scss";

export const Input = ({ placeholder, type, onChange }) => {
  return <input className={styles.input} placeholder={placeholder} type={type} onChange={onChange} />;
};
