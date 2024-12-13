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
