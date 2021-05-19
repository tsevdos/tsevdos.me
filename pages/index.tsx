import Head from "next/head";
import React from "react";
import { MainHeader, SocialButtons, Card } from "../components";
import styles from "../styles/Home.module.css";
import Link from "@material-ui/core/Link";
import presentation from "../mocks/presentation";
import projects from "../mocks/projects";
import abandonware from "../mocks/abandonware";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <>
      <Head>
        <title>John Tsevdos</title>
        <meta name="description" content="John Tsevdos personal site" />
        {/* <link rel="shortcut icon" href="favicon.ico" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <MainHeader />
      <main className={styles.main}>
        <section id="home" className={styles.introContainer}>
          <div className={styles.intro}>
            <h1 style={{ fontSize: 32 }}>
              Hello, my name is John Tsevdos and I am a lead front-end developer from Athens,
              Greece.
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
              <Link href="mailto:tsevdosjohn@gmail.com" target="_blank">
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
        <section className="bio" id="about" style={{ marginBottom: "4rem" }}>
          <h1>ABOUT ME</h1>

          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "1rem" }}>
              <p style={{ fontSize: 18, marginBottom: "2rem" }}>
                I'm a lead front-end developer that hand-crafts usable, elegant and effective web
                applications. I'm currently working at Epignosis an eLearning solutions company with
                3 products, TalentLMS, eFront and TalentCards. I have over 12 years of experience in
                front-end technologies and love working with TypeScript and JavaScript.
              </p>
              <p style={{ fontSize: 18 }}>
                The last 4 years, I've been enjoying building components with React using various
                state management tools (such as redux, MobX, recoil and zustand) and of course
                react's extensive ecosystem ( React Router, React Query, styled-components and
                emotion.js, immer, recompose, redux-saga, reselect, reactstrap, material UI, Ant
                Design and many more). I'm also trying to learn Rust and improve my knowledge in
                functional and reactive programming by using / learning relevant languages and
                libraries such as Elm, ramda.js and RxJS.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 18, marginBottom: "2rem" }}>
                Finally, I have hands-on experience in many other JavaScript frameworks and
                libraries such as Vue.js, Angular, svelte, backbone.js, jQuery, underscore and
                lodash, axios, moment.js and many more. On the backend stack, I love working with
                node.js, Next.js and express, but I also have decent knowledge in PHP, Ruby (and
                Rails) and of course on various SQL and NoSQL databases such as MongoDB, PostgreSQL,
                MySQL and Fauna DB. I'm also a huge fan of Linux OS (currently using Ubuntu), git,
                agile methodologies and always trying to do as much of TDD (Test-Driven Development)
                as possible.
              </p>
              <Button
                href="http://www.tsevdos.com/wp-content/uploads/john_tsevdos_cv.pdf"
                target="_blank"
              >
                View my full CV
              </Button>
            </div>
          </div>
        </section>
        <section id="projects" style={{ background: "#f5f5f5" }}>
          <h1>PROJECTS</h1>
          {projects.map(({ name, description, img, github_url, homepage }) => (
            <Card
              name={name}
              description={description}
              img={img}
              github_url={github_url}
              homepage={homepage}
            />
          ))}
        </section>
        <section id="presentations">
          <h1>PRESENTATIONS</h1>
          {presentation.map(({ name, description, video_url, slides_url }) => (
            <Card
              name={name}
              description={description}
              video_url={video_url}
              slides_url={slides_url}
            />
          ))}
        </section>
        <section id="abandonware" style={{ background: "#f5f5f5" }}>
          <h1>ABANDONWARE</h1>
          {abandonware.map(({ name, description, img, github_url, homepage }) => (
            <Card
              name={name}
              description={description}
              img={img}
              github_url={github_url}
              homepage={homepage}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
