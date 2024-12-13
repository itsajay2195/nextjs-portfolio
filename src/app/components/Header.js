"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ sections, socialIcons }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProjectsClick = (event, name) => {
    event.preventDefault();
    const projectsSection = document.getElementById(name);

    if (name === "blogs") {
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

  return (
    <header className="py-4">
      {/* <div className="mx-10 sm:mx-auto max-w-8xl px-4 flex items-center justify-between border border-zinc-600 p-3 rounded-full"> */}
      <div
        className="mx-auto max-w-8xl px-4 flex items-center justify-between gap-2 border border-zinc-600 p-3 rounded-full"
        style={{ width: "90%" }}
      >
        {/* Left part */}
        <div>
          <a
            onClick={(event) => handleProjectsClick(event, "body")}
            className="text-xl text-white cursor-pointer font-bold ml-2"
          >
            AjayKumar{" "}
            <span className="text-slate-400 font-bold">Rajasekaran</span>
          </a>
        </div>

        {/* Mid part: Menu sections */}
        <div className="hidden sm:flex flex-row space-x-4">
          {sections.map((item, index) => (
            <a
              key={index}
              onClick={(event) =>
                handleProjectsClick(event, item.toLowerCase())
              }
              href={item}
              className="text-white cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right part: Social Icons */}
        <div className="hidden sm:flex space-x-3 items-center">
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
        </div>

        {/* Mobile menu button */}
        {sections?.length > 0 ? (
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-white">
              {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        ) : null}
      </div>

      {/* Side menu for smaller screens */}
      {isMenuOpen && sections?.length > 0 && (
        <div className="fixed top-0 left-0 w-3/4 h-full bg-gray-800 p-5 z-50 sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-right text-xl mb-4"
          >
            &times;
          </button>
          <nav className="flex flex-col space-y-4">
            {sections.map((item, index) => (
              <a
                key={index}
                onClick={(event) => {
                  handleProjectsClick(event, item.toLowerCase());
                  toggleMenu();
                }}
                className="text-white cursor-pointer h-8 border-b border-gray-300"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="mt-6 space-x-4">
            {socialIcons.map((socialIcon) => (
              <a
                key={socialIcon.link}
                href={socialIcon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FontAwesomeIcon
                  icon={socialIcon.icon}
                  size="2x"
                  className="text-blue-400"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
