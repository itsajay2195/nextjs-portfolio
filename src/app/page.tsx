import Image from "next/image";
import Header from "./components/Header";
import Body from "./components/Body";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
      <Header />
      <Body />
    </main>
  );
}
