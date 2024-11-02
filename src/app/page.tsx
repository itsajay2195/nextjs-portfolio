import Image from "next/image";
import Header from "./components/Header";
import Body from "./components/Body";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import ParticleArea from "../particleArea/ ParticleArea";
import { sections, socialIcons } from "../utils/constants";
export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
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
