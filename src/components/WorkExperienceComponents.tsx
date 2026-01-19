import useInView from "../hooks/useInView";
import samit from "../assets/samit.png";

const WorkExperienceComponents = () => {
  const card1 = useInView();
  const card2 = useInView();

  return (
    <section id="experience" className="py-10 mt-10">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold text-slate-900">
          Working Experience
        </h2>
        <p className="text-sm text-slate-500">Contribution & Working result</p>
      </div>

      <div className="mt-6 grid gap-4">
        {/* PT Sakura */}
        <article
          ref={card1.ref}
          className={`rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-soft ${
            card1.isVisible
              ? "opacity-100 translate-y-0 duration-100"
              : "opacity-0 translate-y-2"
          } transition-all`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              <img src={samit} alt="samit" width={"48px"} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  PT Sakura Mitra Internasional
                </h3>
                <p className="text-sm text-slate-500">Web Developer</p>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
              Okt 2021 - Des 2025
            </span>
          </div>

          <ul className="mt-5 grid gap-3 text-slate-600 leading-relaxed">
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Collaborated across departments to analyze requirements, design
                solutions, and implement internal applications.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Developed an internal financial system (CI4 + JavaScript)
                covering invoicing, cash flow, reimbursements, and monthly &
                yearly projections.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Built a Student Information System, including student data
                management, attendance tracking, grading, and graduation
                decision support.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Implemented alumni monitoring and alumni map visualization in
                Japan using Leaflet.js.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Developed job listing and tracking features for Japan-based
                opportunities, including post-training monitoring to support
                candidate matching.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Created a Student Portal featuring learning progress, exam
                schedules, development history, and real-time condition &
                location updates.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Built an online registration system with an analytics dashboard
                for applicant status and monthly/yearly summaries.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Developed a student selection system using React.js and Firebase
                for result tracking and recap.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Handled installation and configuration of web and mail servers
                (Ubuntu, iRedMail).
              </span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              CodeIgniter 4
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              JavaScript
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              React
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              Firebase
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              Leaflet.js
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              Ubuntu
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              iRedMail
            </span>
          </div>
        </article>

        {/* Freelance */}
        <article
          ref={card2.ref}
          className={`rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-soft ${
            card2.isVisible ? "opacity-100" : "opacity-0 translate-y-6"
          } transition`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Freelance — Web Developer
              </h3>
              <p className="text-sm text-slate-500">Tangerang, Indonesia</p>
            </div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
              2020 – 2021
            </span>
          </div>

          <ul className="mt-5 grid gap-3 text-slate-600 leading-relaxed">
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Developed a web-based School Management System using PHP
                (CodeIgniter 3) and JavaScript.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Implemented core features including student savings, student
                data management, class management, grades, attendance, teachers,
                and subjects.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Conducted requirements analysis and designed system workflows to
                improve the structure and efficiency of school administration
                processes.
              </span>
            </li>
            <li className="flex gap-3 md:items-center">
              <span>•</span>
              <span>
                Maintained active communication with clients to align on
                features, interface design, and evolving requirements.
              </span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              CodeIgniter 3
            </span>
            <span className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs">
              JavaScript
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WorkExperienceComponents;
