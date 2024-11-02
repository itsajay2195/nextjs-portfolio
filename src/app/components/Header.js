"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

function Header({ sections, socialIcons }) {
  const router = useRouter();

  const handleProjectsClick = (event, name) => {
    event.preventDefault();
    const projectsSection = document.getElementById(name);

    if (name === "blogs") {
      console.log("projectsSection>>", name);
      router.push("/blogs");
      return;
    }
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
      // handleSetActiveComponent(name);
    } else {
      router.push("/");
    }
  };

  const redirectToLinkedIn = () => {
    const linkedinURL = "https://www.linkedin.com/in/itsajaykumar/"; // Replace this with your LinkedIn profile URL
    window.open(linkedinURL, "_blank");
  };
  //
  const redirectToGit = () => {
    const linkedinURL = "https://github.com/itsajay2195/"; // Replace this with your LinkedIn profile URL
    window.open(linkedinURL, "_blank");
  };
  https: return (
    <header className="py-4">
      <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border border-zinc-600 p-3 rounded-full cursor-pointer">
        {/* //left part */}
        <div>
          <a
            onClick={(event) => handleProjectsClick(event, "body")}
            className="text-xl text-white curson-pointer font-bold ml-2"
          >
            AjayKumar{" "}
            <span className="text-slate-400 font-bold">Rajasekaran</span>
          </a>
        </div>

        {/* mid part */}
        <div className="hidden sm:flex flex-row space-x-4">
          {sections.map((item, index) => (
            <a
              key={index}
              onClick={(event) =>
                handleProjectsClick(event, item.toLowerCase())
              }
              className="text-white cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        {/* right part */}
        <div className="flex space-x-3 items-center">
          {socialIcons.map((socialIcon) => (
            <a
              key={socialIcon.link}
              href={socialIcon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={socialIcon.icon}
                size="2x"
                style={{ paddingRight: 30, color: "#66bfff" }}
              />
            </a>
          ))}
          {/* <button
            onClick={redirectToLinkedIn}
            className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600"
          >
            Linkedin
          </button>
          <button
            onClick={redirectToGit}
            className="border cursor-pointer border-gray-500 px-4 py-2 text-white rounded-full"
          >
            Github
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
