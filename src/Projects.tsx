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
                description: `A web-based student council voting system featuring candidate selection, data validation, and real-time vote result updates accessible to the entire school community. The application supports administrators in managing candidates and performing vote recapitulation in a faster, more transparent, and error-minimized manner. Built with Tailwind CSS and JavaScript (jQuery) for the frontend, and PHP (CodeIgniter 4) with MySQL on the backend`,
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
                subtitle: "ERP & Academic Information System",
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
                subtitle: "Student Academic Activity Monitoring System",
                image: projectEstudent,
                launchedYear: 2025,
                link: "-",
                isPublic: false,
                description: `A web-based application for monitoring student academic activities, including attendance tracking, grade management, and performance analytics. The system provides a centralized platform for educators to manage student data, generate reports, and monitor academic progress. Built with a modern tech stack including Bootstrap 5 for responsive UI design, CodeIgniter 4 for backend logic, and MySQL for data storage. The application supports user authentication based on registered student IDs.`,
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
