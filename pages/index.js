import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div className={`${styles.main__container} container mt-5`}>
      <Head>
        <title>Buidlers</title>
        <meta name="description" content="interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.header} container`}>
        <section className={styles.hero}>
          <h1 className={`${styles.main__heading} mb-3`}>
            Get access to the best investors and VCs in web3
          </h1>
          <div className={styles.underline}></div>
          <p>Be a part of a high-trust network of buidlers.</p>
          <p>
            Work with over 100 functional experts who work with you in exchange
            for a small allocation.
          </p>
          <a className={`${styles.read__btn} p-3 pe-3 d-block mb-4`}>
            Read what buidlers have to say about us!
          </a>
          <a className={`${styles.are_you_buidler}`}>Are you a Buidler?</a>
        </section>
        <section
          className={`${styles.achievement} d-flex flex-wrap mt-5 justify-content-center`}
        >
          <div>
            <FaStar size={30}></FaStar>
            <p>700 startup pitches</p>
          </div>
          <div>
            <FaStar size={30}></FaStar>
            <p>15 startups selected</p>
          </div>
          <div className="mt-4">
            <FaStar size={30}></FaStar>
            <p>43 VCs / 100+ investors</p>
          </div>
        </section>
      </main>
    </div>
  );
}
