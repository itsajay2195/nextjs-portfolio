import React from "react";

function Header() {
  return (
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
        <div>
          <p>About</p>
          <p>Skills</p>
          <p>Contact</p>
        </div>

        {/* right part */}
        <div>
          <button className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
            Linkedin
          </button>
          <button className="border cursor-pointer border-gray-500 px-4 py-2 text-white rounded-full">
            Github
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
