"use client";
import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Body() {
  const animationData = require("../../../public/assets/projects.json");
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Ajaykumar",
      "React Native developer",
      "Learning new things daily...",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const container = useRef(null);
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Cleanup function to unload animation before re-render or unmount
    return () => {
      anim.destroy();
    };
  }, [animationData]);

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1Aq9fOtKDVLP6GLtta-aGqrCRQlXzE9bJ/view?usp=sharing"
    );
  };

  const handleContactMeClick = (event, name) => {
    event.preventDefault();
    const projectsSection = document.getElementById("contact");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
      // handleSetActiveComponent(name);
    }
  };

  return (
    <section id={"body"} className="flex flex-col justify-center py-8">
      <div className="container px-4 mx-auto">
        {/* First part */}
        <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
          <div className="w-full flex flex-col  item-start  md:w-2/4 mt-0 md:mt-28">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              <span className="mr-3 text-slate-400 ">{text}</span>
              <Cursor />
            </h1>
            <p className="text-white text-xl md:text-2xl mb-3 mt-2">
              I am A Frontend Developer. I love to work on products whose impact
              makes life easier.
            </p>

            <div>
              <button
                onClick={handleResumeClick}
                className="bg-blue-400 text-white px-4 py-1 rounded mr-4 hover:bg-blue-600"
              >
                Download CV
              </button>

              <button
                onClick={handleContactMeClick}
                className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400"
              >
                Contact Me
              </button>
            </div>
            <p className="text-blue-500 text-small font-normal mt-2">
              Coding | Learnings | Lifestyle
            </p>
            <h1 className="text-slate-400 text-xl">
              5 Years of experience | 4 projects Completed
            </h1>
          </div>

          <div className="md:w-1/2 z-auto pt-2 md:mt-0">
            <div className="container" ref={container} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
