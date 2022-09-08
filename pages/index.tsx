import { FC } from "react";
import { Header, Hero, Bio, Projects, KnowledgeSharing, Presentations, Footer } from "../components/";

const Home: FC = () => {
  return (
    <>
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
