import Head from "next/head";
import { MainHeader, SocialButtons } from "../components";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>John Tsevdos</title>
        <meta name="description" content="John Tsevdos personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainHeader />
      <main className={styles.main}>
        <section id="intro">
          <div className={styles.intro}>
            <h1>John Tsevdos</h1>

            <SocialButtons />
          </div>
        </section>
        <section className="bio" id="bio">
          <h1>About me</h1>
          <p>
            I'm a lead front-end developer that hand-crafts usable, elegant and effective web
            applications. I'm currently working at Epignosis an eLearning solutions company with 3
            products, TalentLMS, eFront and TalentCards. I have over 12 years of experience in
            front-end technologies and love working with TypeScript and JavaScript.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
