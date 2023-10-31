import Image from "next/image";
import Header from "./components/Header";
import Body from "./components/Body";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
      <Header />
      <Body />
      <Experience />
      <Skills />
    </main>
  );
}
