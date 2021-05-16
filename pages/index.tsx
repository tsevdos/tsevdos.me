import Head from "next/head";
import React from "react";
import { MainHeader, SocialButtons } from "../components";
import styles from "../styles/Home.module.css";
import Link from "@material-ui/core/Link";

const Home = () => {
  return (
    <>
      <Head>
        <title>John Tsevdos</title>
        <meta name="description" content="John Tsevdos personal site" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <MainHeader />
      <main className={styles.main}>
        <section id="intro" className={styles.introContainer}>
          <div className={styles.intro}>
            <h1 style={{ fontSize: 32 }}>
              Hi I'm John Tsevdos and I'm a lead front-end developer from Athens, Greece{" "}
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.5, color: "darkslategray" }}>
              I am a huge fan of Jamstack. I'm working full-time at{" "}
              <Link href="https://www.epignosishq.com/" target="_blank">
                Epignosis
              </Link>{" "}
              and I'm sharing my JavaScript and React knowledge at{" "}
              <Link href="https://www.codehub.gr/codelearn/our-instructors/" target="_blank">
                {" "}
                Code.Hub
              </Link>{" "}
              and{" "}
              <Link href="https://socialhackersacademy.org/meet-our-team/" target="_blank">
                Social Hackers Academy
              </Link>
              !{" "}
              <Link href="mailto:tsevdosjohn@gmail.com" target="_blann">
                Say hello
              </Link>{" "}
              or keep scrolling!
            </p>
            <hr style={{ border: "1px solid black", margin: "2rem 0" }} />
            <SocialButtons />
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/175707?v=4"
            style={{ borderRadius: "50%", height: 420, marginBottom: "3rem" }}
          />
        </section>
        {/* <section className="bio" id="bio">
          <h1>About me</h1>
          <p>
            I'm a lead front-end developer that hand-crafts usable, elegant and effective web
            applications. I'm currently working at Epignosis an eLearning solutions company with 3
            products, TalentLMS, eFront and TalentCards. I have over 12 years of experience in
            front-end technologies and love working with TypeScript and JavaScript.
          </p>
        </section> */}
      </main>
    </>
  );
};

export default Home;
