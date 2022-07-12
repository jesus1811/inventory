import Title from "../title/Title.common";
import styles from "./styles.module.scss";

const File = ({ children, onChange }) => {
  return (
    <div className={styles.container}>
      <Title textSmall>{children}</Title>
      <input className={styles.field} type="file" onChange={onChange} />
    </div>
  );
};

export default File;
