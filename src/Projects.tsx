import ContactComponents from "./components/ContactComponents";
import HeaderComponents from "./components/HeaderComponents";
import ProjectComponents from "./components/ProjectComponents";

import projectPilketos from "@/assets/project/pilketos.png";
import projectDigishop from "@/assets/project/digishop.png";
import projectPanel from "@/assets/project/panel.png";
import projectEstudent from "@/assets/project/estudent.png";
import LeftSVG from "./components/icons/LeftSVG";

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
                <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  A curated selection of personal projects focused on solving
                  real problems with clean interfaces and reliable backend
                  logic. The highlights below are the same two projects featured
                  on the homepage.
                </p>

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
            <ProjectComponents
              detail={{
                title: "E-Pilketos",
                subtitle: "Real-time Student Council Election System",
                image: projectPilketos,
                launchedYear: 2025,
                link: "https://github.com/billhikam/e-pilketos",
                isPublic: true,
                description: `E-Student is a web-based application designed as a digital companion for students to monitor and manage their academic activities. The platform provides essential features such as attendance records, daily grade reports, and duty schedules, allowing students to access their learning progress in a centralized and structured system. The application is developed using PHP with the CodeIgniter 4 framework on the backend to handle data processing, business logic, and database operations. A MySQL database is used for data storage, while the frontend interface is built with Bootstrap 5, JavaScript, and jQuery to deliver a responsive and interactive user experience. E-Student helps students efficiently track their academic performance and stay informed about school activities through a simple and accessible web interface.`,
                tag: ["Tailwind CSS", "CodeIgniter 4", "JQuery", "MySQL"],
              }}
            />
            <ProjectComponents
              detail={{
                title: "Digishop",
                subtitle: "Book Sales & Review Web Application",
                image: projectDigishop,
                launchedYear: 2025,
                link: "https://github.com/billhikam/e-pilketos",
                isPublic: true,
                description: `A web-based application for book purchasing and user reviews, featuring book catalogs, product details, purchase transactions, and a user rating and review system. The platform implements a RESTful API on the backend using Express.js, handling data management, authentication, and integration with a MySQL database. The user interface is built with React.js to deliver a responsive and interactive user experience, enabling users to browse, purchase, and review books efficiently`,
                tag: ["Tailwind CSS", "React JS", "Express JS", "MySQL"],
              }}
            />
            <ProjectComponents
              detail={{
                title: "PANEL",
                subtitle: "Book Sales & Review Web Application",
                image: projectPanel,
                launchedYear: 2025,
                link: "-",
                isPublic: false,
                description: `PANEL is an advanced ERP and academic information system designed to centralize and manage institutional data. The platform provides comprehensive student management, including detailed student profiles, academic records, grading data, and administrative information. The system also supports alumni tracking, including graduate distribution abroad (such as in Japan), dormitory management with resident and occupancy data, and other academic and operational information. PANEL enables efficient data management, monitoring, and decision-making through a unified and structured platform.`,
                tag: [
                  "Bootstrap 5",
                  "JQuery",
                  "Leaflet JS",
                  "Codeigniter 4",
                  "MySQL",
                ],
              }}
            />
            <ProjectComponents
              detail={{
                title: "E-Student",
                subtitle: "Book Sales & Review Web Application",
                image: projectEstudent,
                launchedYear: 2025,
                link: "-",
                isPublic: false,
                description: `A web-based application for book purchasing and user reviews, featuring book catalogs, product details, purchase transactions, and a user rating and review system. The platform implements a RESTful API on the backend using Express.js, handling data management, authentication, and integration with a MySQL database. The user interface is built with React.js to deliver a responsive and interactive user experience, enabling users to browse, purchase, and review books efficiently`,
                tag: ["Bootstrap 5", "Codeigniter 4", "MySQL"],
              }}
            />
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
