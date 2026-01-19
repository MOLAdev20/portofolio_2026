import projectPilketos from "../assets/project/pilketos.png";
import projectDigishop from "../assets/project/digishop.png";
import GihtubIcons from "./icons/GithubSVG";
import useInView from "../hooks/useInView";

const ProjectComponents = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} id="projects" className="py-10">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
        <p className="text-sm text-slate-500">Selected personal projects</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* E-Pilketos */}
        <article
          className={`rounded-3xl bg-white border border-slate-200 p-6 shadow-soft flex flex-col ${
            isVisible
              ? "opacity-100 translate-y-0 delay-0"
              : "opacity-0 translate-y-6"
          } transition-all duration-100`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                E-Pilketos
              </h3>
              <p className="text-sm text-slate-500">
                Real-time Student Council Election System
              </p>
            </div>
            <span className="text-xs text-slate-600 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
              2025
            </span>
          </div>

          {/* ✅ Gambar Vertikal */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src={projectPilketos}
              alt="Preview E-Pilketos"
              className="w-full hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          <p className="mt-4 text-slate-600 leading-relaxed">
            A web-based student council voting system featuring candidate
            selection, data validation, and real-time vote result updates
            accessible to the entire school community. The application supports
            administrators in managing candidates and performing vote
            recapitulation in a faster, more transparent, and error-minimized
            manner. Built with Tailwind CSS and JavaScript (jQuery) for the
            frontend, and PHP (CodeIgniter 4) with MySQL on the backend
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              CodeIgniter 4
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              jQuery
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/MOLAdev20/pkm-evoting"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-2xl border bg-blue-500 text-white border-slate-200 hover:bg-blue-600"
            >
              <div className="w-5 h-5">
                <GihtubIcons />
              </div>
              Source Code
            </a>
          </div>
        </article>

        <article
          className={`rounded-3xl bg-white border border-slate-200 p-6 shadow-soft flex flex-col ${
            isVisible
              ? "opacity-100 translate-y-0 delay-0"
              : "opacity-0 translate-y-6"
          } transition-all duration-300`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Digishop</h3>
              <p className="text-sm text-slate-500">
                Book Sales & Review Web Application
              </p>
            </div>
            <span className="text-xs text-slate-600 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
              2023
            </span>
          </div>

          {/* ✅ Gambar Vertikal */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              src={projectDigishop}
              alt="Preview E-Pilketos"
              className=" object-cover hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          <p className="mt-4 text-slate-600 leading-relaxed">
            A web-based application for book purchasing and user reviews,
            featuring book catalogs, product details, purchase transactions, and
            a user rating and review system. The platform implements a RESTful
            API on the backend using Express.js, handling data management,
            authentication, and integration with a MySQL database. The user
            interface is built with React.js to deliver a responsive and
            interactive user experience, enabling users to browse, purchase, and
            review books efficiently
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              Express JS
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              React JS
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              MySQL
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/MOLAdev20/digireact"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-2xl border bg-blue-500 text-white border-slate-200 hover:bg-blue-600"
            >
              <div className="w-5 h-5">
                <GihtubIcons />
              </div>
              Source Code
            </a>
          </div>
        </article>
      </div>

      {/* <div className="mt-6 rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-soft">
        <h3 className="font-semibold text-slate-900">Tambah project lain?</h3>
        <p className="mt-2 text-slate-600">
          Kamu bilang udah bikin puluhan aplikasi internal. Kalau mau, tambahin
          3–6 project “ringkas” (nama, problem, stack, impact) biar recruiter
          makin kebayang kontribusinya.
        </p>
      </div> */}
    </section>
  );
};

export default ProjectComponents;
