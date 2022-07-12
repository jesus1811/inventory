import styles from "./styles.module.scss";

const Title = ({ children, subTile, textMain, text, textSmall }) => {
  if (subTile) subTile = "title__subTitle";
  if (textMain) textMain = "title__textMain";
  if (text) text = "title__text";
  if (textSmall) textSmall = "title__textSmall";

  return <h2 className={`${styles.title} ${styles[subTile]} ${styles[textMain]} ${styles[text]} ${styles[textSmall]}`}>{children}</h2>;
};
export default Title;
