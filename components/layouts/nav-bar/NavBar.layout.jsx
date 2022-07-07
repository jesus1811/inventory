import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Link from "next/link";
import styles from "./styles.module.scss";
import { logut } from "../../../store/authSlice";

export const NavBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClickLogout = () => {
    dispatch(logut());
    localStorage.setItem("user", JSON.stringify({}));
    router.push("/");
  };
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Link href="/Principal">
          <a className={styles.title}>Inventory</a>
        </Link>
        <article className={styles.nav}>
          <a href="">Categorias</a>
          <a href="">Productos</a>
          <a href="">Usuarios</a>
          <button onClick={handleClickLogout}>Cerrar session</button>
        </article>
      </div>
    </section>
  );
};
