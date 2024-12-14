import Image from "next/image";
import Header from "./components/Header";
import Body from "./components/Body";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import ParticleArea from "../particleArea/ ParticleArea";
import { sections, socialIcons } from "../utils/constants";
import Head from "next/head";
export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
      <Head>
        <link rel="canonical" href="https://ajayrne.com/" />
        <title>Ajaykumar Rajasekaran</title>
        <title>Ajaykumar Rajasekaran - React and React Native Developer</title>
        <meta
          name="description"
          content="Ajaykumar Rajasekaran - React and React Native Developer showcasing projects, blogs, and skills. Explore insights into React and modern web development."
        />
        <meta
          name="keywords"
          content="Ajaykumar Rajasekaran, React Developer, React Native Developer, Software Engineer, Portfolio, ajayrne.com"
        />
        <meta name="author" content="Ajaykumar Rajasekaran" />
        <meta
          property="og:title"
          content="Ajaykumar Rajasekaran - React and React Native Developer"
        />
        <meta
          property="og:description"
          content="Welcome to the portfolio of Ajaykumar Rajasekaran, a skilled React and React Native developer. Explore projects and blogs."
        />
        <meta property="og:url" content="https://ajayrne.com" />
        <meta
          name="description"
          content="Ajaykumar Rajasekaran's personal website showcasing my React and React Native projects, blog posts, and portfolio."
        />
        <meta
          name="keywords"
          content="Ajaykumar Rajasekaran, React developer, React Native, software developer, portfolio, javascript, js, rn, promises, async await, flatlist, optimization, react native performance"
        />
        <meta
          property="og:title"
          content="Ajaykumar Rajasekaran - React Developer"
        />
        <meta
          property="og:description"
          content="Explore my personal website where I showcase my projects, blog, and work as a React Native developer."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta
          property="og:url"
          content="https://www.ajaykumarrajasekaran.com"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout>
        {/* <ParticleArea /> */}
        <Header sections={sections} socialIcons={socialIcons} />
        <Body />
        <Experience />
        <Skills />
        <Contact />
      </Layout>
    </main>
  );
}
