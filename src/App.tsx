import ContactComponents from "./components/ContactComponents";
import EducationComponents from "./components/EducationComponents";
import ExperienceComponents from "./components/ExperienceComponents";
import HeroComponents from "./components/HeroComponents";
import ProjectComponents from "./components/ProjectComponents";
import WorkExperienceComponents from "./components/WorkExperienceComponents";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <>
      <header
        id="test-aja"
        className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200"
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
              <p className="text-xs text-slate-500">
                Web Developer | Tangerang, Banten
              </p>
            </div>
          </a>

          {/* Desktop menu (no JS) */}
          <div className="hidden md:flex items-center gap-2">
            <a
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
              href="#experience"
            >
              Pengalaman
            </a>
            <a
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
              href="#projects"
            >
              Project
            </a>
            <a
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
              href="#skills"
            >
              Keahlian
            </a>
            <a
              className="px-3 py-2 rounded-xl hover:bg-slate-100"
              href="#education"
            >
              Pendidikan
            </a>
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
                href="#experience"
              >
                Pengalaman
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
                Pendidikan
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

      <div className="bg-linear-to-b from-sky-50 to-slate-50 px-4">
        <div className="mx-auto max-w-6xl">
          <HeroComponents />
        </div>
      </div>
      <div className="mx-auto max-w-6xl p-3 md:p-0">
        <ExperienceComponents />

        <WorkExperienceComponents />

        <ProjectComponents />

        <EducationComponents />
      </div>
      <section id="contact" className="pt-12 ">
        <ContactComponents />
      </section>
    </>
  );
};

export default App;
