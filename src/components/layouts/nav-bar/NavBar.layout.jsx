import Link from "next/link";
import styles from "./styles.module.scss";
import useUser from "../../../hooks/useUser";

export const NavBar = () => {
  const { handleClickLogut } = useUser();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Link href="/home">
          <a className={styles.title}>Inventory</a>
        </Link>
        <input type="checkbox" id="check" className={styles.checkBox} />
        <label htmlFor="check" className={styles.menu}>
          <img src="/menu.svg" alt="" />
        </label>
        <article className={styles.nav}>
          <button onClick={handleClickLogut}>Cerrar session</button>
        </article>
      </div>
    </section>
  );
};
