"use client";

import { useEffect, useState } from "react";
import MobileMenu from "./Mobilemenu"; // FIXED ✔

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  // 🔥 Detect current active section on scroll
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const onScroll = () => {
      let current = "home";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.getBoundingClientRect().top;
          if (offset < window.innerHeight / 2) current = section;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-dark/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

          <h1 className="text-white font-bold text-xl cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Jensen Omega
          </h1>

          <ul className="hidden md:flex gap-8 text-gray-300">
            {["home","about","projects","contact"].map(item => (
              <li
                key={item}
                className={`cursor-pointer relative transition ${
                  active === item ? "text-accent font-semibold" : "hover:text-accent"
                }`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {active === item && ( // 🔥 Active underline
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent animate-pulse" />
                )}
              </li>
            ))}
          </ul>

          <button className="md:hidden" onClick={() => setOpen(true)}>
            <div className="w-7 h-[2px] bg-white mb-1"></div>
            <div className="w-7 h-[2px] bg-white mb-1"></div>
            <div className="w-7 h-[2px] bg-white"></div>
          </button>

        </div>
      </nav>

      {open && <MobileMenu close={() => setOpen(false)} scrollTo={scrollToSection} />}
    </>
  );
}
