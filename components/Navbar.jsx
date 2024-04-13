import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../styles";
import { navLinks } from "../constants";
import Button from "./Common/Button";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-2 fixed top-0 z-20 ${scrolled ? "backdrop-blur-3xl bg-white/30" : "backdrop-blur-none bg-transparent"
        }`}>
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src="/logo.svg" alt="logo" className="w-36" />
        
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center justify-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-black" : "text-black "
                } hover:text-gray-600 text-[15px] font-normal cursor-pointer`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <Button to="https://api.whatsapp.com/send/?phone=+919080031135&text=I%20hope%20you%27re%20doing%20well.%20I%27m%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20your%20quotes%20with%20me?%20Looking%20forward%20to%20hearing%20from%20you.%20Thanks!" text="Get a Quote"  />
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-black" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
