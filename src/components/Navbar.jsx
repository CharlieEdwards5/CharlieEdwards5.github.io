import React from "react";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-6 sm:px-10 px-5 flex justify-center items-center">
      <nav>
        <div className="flex justify-center items-center">
          {navLists.map((nav) =>
            nav.external ? (
              <a
                key={nav.id}
                href={nav.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 text-3xl cursor-pointer text-gray hover:text-gray-500 transition-all"
              >
                {nav.name}
              </a>
            ) : (
              <div
                key={nav.id}
                className="px-5 text-3xl cursor-pointer text-gray hover:text-gray-500 transition-all"
                onClick={() =>
                  document
                    .getElementById(nav.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {nav.name}
              </div>
            )
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
