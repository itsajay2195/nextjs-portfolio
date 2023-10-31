"use client";
import React from "react";

function Header() {
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
      <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border border-zinc-600 p-3 rounded-full">
        {/* //left part */}
        <div>
          <span className="text-xl text-white curson-pointer font-bold ml-2">
            AjayKumar{" "}
            <span className="text-slate-400 font-bold">Rajasekaran</span>
          </span>
        </div>

        {/* mid part */}
        <div className="hidden sm:flex flex-row space-x-4">
          <p className="text-white cursor-pointer ">About</p>
          <p className="text-white cursor-pointer ">Skills</p>
          <p className="text-white cursor-pointer ">Contact</p>
        </div>

        {/* right part */}
        <div className="flex space-x-3 items-center">
          <button
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
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
