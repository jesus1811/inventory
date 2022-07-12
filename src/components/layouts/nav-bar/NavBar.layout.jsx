import Link from "next/link";
import styles from "./styles.module.scss";
import useUser from "../../../hooks/useUser";

export const NavBar = () => {
  const { handleClickLogut } = useUser();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Link href="/Principal">
          <a className={styles.title}>Inventory</a>
        </Link>
        <article className={styles.nav}>
          <button onClick={handleClickLogut}>Cerrar session</button>
        </article>
      </div>
    </section>
  );
};
