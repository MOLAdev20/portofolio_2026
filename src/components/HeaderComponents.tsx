import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import MoonSVG from "./icons/MoonSVG";
import SunSVG from "./icons/SunSVG";

const HeaderComponents = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {

    const currentTheme = localStorage.getItem("theme");

    if (currentTheme == "light") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.toggle("dark", true);
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.toggle("dark", false);
    }

  }, [dark]);

  return (
    <header
      id="test-aja"
      className={`sticky top-0 z-50 bg-white/80 text-slate-800 dark:bg-slate-800 dark:text-white not-dark:border-b not-dark:border-slate-200 transition-all duration-500 backdrop-blur`}
    >
      <nav className="mx-auto max-w-6xl px-3 md:px-0 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt=""
            width={"40px"}
            className="rounded-full border-blue-200 border-3"
          />
          <div className="leading-tight">
            <p className="font-semibold">Sabilul Hikam</p>
            <p className="text-xs text-slate-500 dark:text-slate-200">
              Web Developer | Tangerang, Banten
            </p>
          </div>
        </a>

        {/* Desktop menu (no JS) */}
        <div className="hidden md:flex items-center gap-2">
          <a className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:text-slate-800" href="#skills">
            Skills
          </a>
          <a
            className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:text-slate-800"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:text-slate-800"
            href="#projects"
          >
            Project
          </a>
          <a
            className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:text-slate-800"
            href="#education"
          >
            Education
          </a>
          <button
            className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:text-slate-800 border cursor-pointer"
            onClick={() => {
              setDark((prev: boolean) => !prev);
            }}
          >
            {dark ? (<MoonSVG/>) : (<SunSVG/>) }
          </button>
        </div>

        {/* Mobile menu (no JS)  */}
        <details className="md:hidden">
          <summary className="list-none cursor-pointer select-none">
            <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 hover:bg-slate-100">
              <span className="text-sm font-medium">Menu</span>
              <span aria-hidden="true">☰</span>
            </span>
          </summary>
          <div className="absolute right-4 mt-2 w-[min(90vw,320px)] rounded-2xl bg-white shadow-soft border border-slate-200 p-2">
            <a
              className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              href="#projects"
            >
              Project
            </a>
            <a
              className="block px-3 py-2 rounded-xl hover:bg-slate-100"
              href="#education"
            >
              Education
            </a>
          </div>
        </details>

        {/* CTA */}
        {/* <div className="hidden lg:flex items-center gap-2">
          <a
            href="#"
            className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-100"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-90 shadow-soft"
          >
            Lihat Portfolio
          </a>
        </div> */}
      </nav>
    </header>
  );
};

export default HeaderComponents;
