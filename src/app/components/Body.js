"use client";
import React from "react";
import Lottie from "lottie-web";
import {
  useTypewriter,
  Cursor,
} from "../../../node_modules/react-simple-typewriter/dist/index";

function Body() {
  const [text, count] = useTypewriter({
    words: ["Hi", "My name is Ajaykumar", "I love to code more"],
    loop: true,
    delaySpeed: 2000,
  });
  const animationData = require("../../../public/assets/projects.json");
  const container = React.useRef(null);
  React.useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);
  return (
    <section className="py-8">
      <div className="container  px-4 mx-auto">
        {/* first part */}
        <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
          <div className="w-full flex flex-col items-start md:w-2/4 mt-0 md:mt-20">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              <span className="mr-3 text-slate-400">{text}</span>
              <Cursor />
            </h1>
            <p className="text-white text-xl md:text-2xl mb-3 mt-2">
              I am a React Native developer
            </p>
            <div>
              <button className="bg-blue-400 text-white px-4 py-1 rounded mr-4 hover:bg-blue-600">
                Learn more
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-1 rounded  hover:bg-gray-400">
                contact
              </button>
            </div>
            <p className="text-blue-500 text-small font-normal mt-2">
              Coding | Learnings | Lifestyle
            </p>
            <h1 className="text-slate-400 text-xl">
              5 years of experience | 4 projects completed
            </h1>
          </div>
          <div className="md:w-1/2 z-auto pt-2 md:mt-0">
            {/* second part */}
            <div className="container" ref={container}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
