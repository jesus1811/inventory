import Head from "next/head";
import styles from "./styles.module.scss";
export const Main = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>Inventory</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="inventory,jesudev,jesus ayarza" />
        <meta name="autor" content="jesus ayarza" />
        <meta name="generator" content="Next.js" />
      </Head>
      <section className={styles.container}>{children}</section>
    </>
  );
};
