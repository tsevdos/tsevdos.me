import Head from "next/head";
import { MainHeader } from "../components";

const Home = () => {
  return (
    <>
      <Head>
        <title>John Tsevdos</title>
        <meta name="description" content="John Tsevdos personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainHeader />
        <section>
          {/* <h1 className={styles.title}>
            Hi, I’m a software engineer from Athens 🇬🇷 and huge fan of Jamstack. I'm working
            full-time at Epignosis and I'm sharing my JavaScript and React knowledge at Code.Hub and
            Social Hackers Academy! Say hello or keep scrolling!
          </h1> */}
          {/* <SocialButtons /> */}
        </section>
      </main>
    </>
  );
};

export default Home;
