import HeaderComponents from "./components/HeaderComponents";
import ContactComponents from "./components/ContactComponents";
import EducationComponents from "./components/EducationComponents";
import StackComponents from "./components/StackComponents";
import HeroComponents from "./components/HeroComponents";
import ProjectComponents from "./components/ProjectComponents";
import WorkExperienceComponents from "./components/WorkExperienceComponents";

import projectPilketos from "@/assets/project/pilketos.png";
import projectDigishop from "@/assets/project/digishop.png";
import { RightSVG } from "./components/icons/RightSVG";
import { useEffect } from "react";

const Pages = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <HeaderComponents />

      <HeroComponents />

      <div className="mx-auto max-w-6xl p-3 md:p-0">
        <StackComponents />

        <WorkExperienceComponents />

        <section className="py-10">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Projects
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-200">
              Selected projects
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ProjectComponents
              detail={{
                title: "E-Pilketos",
                subtitle: "Real-time Student Council Election System",
                image: projectPilketos,
                launchedYear: 2025,
                link: "https://github.com/billhikam/e-pilketos",
                description: `A web-based student council voting system featuring candidate selection, data validation, and real-time vote result updates accessible to the entire school community. The application supports administrators in managing candidates and performing vote recapitulation in a faster, more transparent, and error-minimized manner. Built with Tailwind CSS and JavaScript (jQuery) for the frontend, and PHP (CodeIgniter 4) with MySQL on the backend`,
                isPublic: true,
                tag: ["Tailwind", "PHP", "MySQL"],
              }}
            />
            <ProjectComponents
              detail={{
                title: "Digishop",
                subtitle: "Book Sales & Review Web Application",
                image: projectDigishop,
                launchedYear: 2025,
                link: "https://github.com/billhikam/e-pilketos",
                description: `A web-based application for book purchasing and user reviews, featuring book catalogs, product details, purchase transactions, and a user rating and review system. The platform implements a RESTful API on the backend using Express.js, handling data management, authentication, and integration with a MySQL database. The user interface is built with React.js to deliver a responsive and interactive user experience, enabling users to browse, purchase, and review books efficiently`,
                isPublic: true,
                tag: ["React", "Express", "MySQL"],
              }}
            />
          </div>
          <div className="mt-15">
            <a
              href="/projects"
              className="text-slate-600 dark:text-slate-300 group flex justify-center items-center gap-2 text-lg hover:text-slate-400 border-slate-200 transition active:scale-95"
            >
              <span>All selected projects</span>
              <RightSVG isMove={true} />
            </a>
          </div>
        </section>

        <EducationComponents />
      </div>
      <section id="contact" className="pt-12 ">
        <ContactComponents />
      </section>
    </>
  );
};

export default Pages;
