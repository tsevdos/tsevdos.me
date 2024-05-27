import { FC } from "react";
import Head from "next/head";
import { Header, Hero, Bio, Projects, KnowledgeSharing, Presentations, Footer } from "../components";
import Config from "../constants/config";

const { title, description, url } = Config;

const Home: FC = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags  */}
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${url}/og-image.svg`} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${url}/og-image.svg`} />

        {/* <!-- links --> */}
        <link rel="icon" href={`${url}/favicon.ico`} />
        <link rel="sitemap" href={`${url}/sitemap-index.xml`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${url}/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${url}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${url}/favicon-16x16.png`} />
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
