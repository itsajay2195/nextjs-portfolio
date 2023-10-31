"use client";
import React from "react";
import Skill from "./Skill";
import lottie from "lottie-web";

const skills = [
  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 80,
    type: "Javascript",
  },
  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 80,
    type: "Typescript",
  },
  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 80,
    type: "Firebase",
  },
  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 80,
    type: "React Native",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 70,
    type: "React",
  },
  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 50,
    type: "Next Js",
  },
  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 70,
    type: "Tailwind",
  },
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 60,
    type: "HTML",
  },

  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 70,
    type: "CSS",
  },
  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 80,
    type: "Python",
  },
  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 30,
    type: "Java",
  },
  {
    id: "0",
    image:
      "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
    progress: 5,
    type: "Kotlin",
  },
];

function Skills() {
  const animationData = require("../../../public/assets/hello.json");

  const container = React.useRef(null);
  React.useEffect(() => {
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

  return (
    <div className="">
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Skills
      </h3>
      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 grid grid-cols-3 gap-5">
          {skills?.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>

        <div className="md:w-1/2 z-auto pt-2 md:mt-0">
          <div className="container" ref={container} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
