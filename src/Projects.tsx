import ContactComponents from "./components/ContactComponents";
import HeaderComponents from "./components/HeaderComponents";
import ProjectComponents from "./components/ProjectComponents";
import projects from "./assets/projects.json";

import projectPilketos from "@/assets/project/pilketos.png";
import projectDigishop from "@/assets/project/digishop.png";
import projectPanel from "@/assets/project/panel.png";
import projectEstudent from "@/assets/project/estudent.png";
import projectNihonskuy from "@/assets/project/nihonskuy.png";
import projectNihonsFinance from "@/assets/project/nihonsfinance.png";
import projectEstock from "@/assets/project/estock.png";
import projectRentplay from "@/assets/project/rentplay.png";
import LeftSVG from "./components/icons/LeftSVG";

type ProjectItem = {
  title: string;
  subtitle: string;
  image: keyof typeof projectImages;
  launchedYear: number;
  link: string;
  isPublic: boolean;
  description: string;
  tag: string[];
};

const projectImages = {
  pilketos: projectPilketos,
  digishop: projectDigishop,
  panel: projectPanel,
  estudent: projectEstudent,
  nihonskuy: projectNihonskuy,
  nihonsFinance: projectNihonsFinance,
  estock: projectEstock,
  rentplay: projectRentplay,
} as const;

const Projects = () => {
  return (
    <>
      <HeaderComponents />

      <div className="bg-linear-to-b from-sky-50 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 px-4">
        <div className="mx-auto max-w-6xl">
          <section className="py-10 md:py-14">
            <div className="grid gap-6 lg:grid-cols-12 items-start">
              <div className="lg:col-span-8">
                <h1 className="mt-3 text-3xl md:text-5xl text-slate-900 dark:text-white">
                  Selected Project
                </h1>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/"
                    className="px-8 py-2 flex items-center gap-2 rounded-lg active:scale-95 transition font-semibold border border-slate-200 bg-white dark:bg-transparent dark:text-white dark:hover:text-slate-500 hover:bg-slate-50"
                  >
                    <LeftSVG />
                    <span>Back To Home</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-6xl p-3 md:p-0">
        <section id="projects" className="py-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Projects
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(projects as ProjectItem[]).map((project) => (
              <ProjectComponents
                key={project.title}
                detail={{
                  ...project,
                  image: projectImages[project.image],
                }}
              />
            ))}
          </div>
        </section>
      </div>

      <section id="contact" className="pt-12">
        <ContactComponents />
      </section>
    </>
  );
};

export default Projects;
