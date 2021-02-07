import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import Layout from "../components/Layout/Layout";
import Section from "../components/Section/Section";
import { games } from "../shared/constant";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>

      <main className={styles.main}>
        <Header />
        <Layout>
          <Section
            TopChildren={<Title title="New & updated games" />}
           
            games={games}
          />
          <Section  subTitle="Lightweight games" TopChildren={<Title title="Low on space" />} games={games} />
        </Layout>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
