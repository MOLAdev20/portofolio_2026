// import projectDigishop from "../assets/project/digishop.png";
import GihtubIcons from "./icons/GithubSVG";
import useInView from "../hooks/useInView";
import WarningSVG from "./icons/WarningSVG";

type detail = {
  title: string;
  subtitle: string;
  launchedYear: number;
  description: string;
  image: string;
  link: string;
  isPublic: boolean;
  tag: string[];
};

const ProjectComponents = ({ detail }: { detail: detail }) => {
  const { ref, isVisible } = useInView();

  return (
    <>
      <article
        ref={ref}
        className={`rounded-3xl bg-white dark:bg-slate-800 not-dark:border border-slate-200 p-6 shadow-soft flex flex-col ${
          isVisible
            ? "opacity-100 translate-y-0 delay-0"
            : "opacity-0 translate-y-6"
        } transition-all duration-100`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
              {detail.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {detail.subtitle}
            </p>
          </div>
          <span className="text-xs text-slate-600 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
            {detail.launchedYear}
          </span>
        </div>

        {/* ✅ Gambar Vertikal */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <img
            src={detail.image}
            alt="Preview E-Pilketos"
            className="w-full hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        <p className="mt-4 text-slate-600 dark:text-slate-200 leading-relaxed">
          {detail.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {detail.tag.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-900 text-white px-3 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {detail.isPublic ? (
            <a
              href={detail.link}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-2xl border bg-blue-500 dark:bg-transparent text-white border-slate-200 hover:bg-blue-600"
            >
              <div className="w-5 h-5">
                <GihtubIcons />
              </div>
              Source Code
            </a>
          ) : (
            <a
              href="#"
              className="inline-flex cursor-not-allowed items-center gap-1 px-4 py-2 rounded-2xl border bg-slate-500  text-white border-slate-200"
            >
              <WarningSVG />
              This project is Private
            </a>
          )}
        </div>
      </article>
    </>
  );
};

export default ProjectComponents;
