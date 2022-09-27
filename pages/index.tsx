import { FC } from "react";
import Head from "next/head";
import { Header, Hero, Bio, Projects, KnowledgeSharing, Presentations, Footer } from "../components";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>John Tsevdos</title>
        <meta name="description" content="John Tsevdos personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Hero />
      <Bio />
      <Projects />
      <KnowledgeSharing />
      <Presentations />
      <Footer />
    </>
  );
};

export default Home;
