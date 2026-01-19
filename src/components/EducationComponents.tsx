import useInView from "../hooks/useInView";

const EducationComponents = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="education" className="py-10">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold text-slate-900">Education</h2>
        <p className="text-sm text-slate-500">Academic and Major</p>
      </div>

      <div ref={ref} className="mt-6 grid gap-4 md:grid-cols-2">
        <article
          className={`rounded-3xl bg-white border border-slate-200 p-6 shadow-soft ${
            isVisible
              ? "opacity-100 translate-0 duration-100"
              : "opacity-0 translate-y-6"
          } transition-all`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-slate-900">
                Pamulang University
              </h3>
              <p className="text-sm text-slate-500">Informatics Engineering</p>
            </div>
            <span className="text-xs text-slate-600 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
              2023 – Now
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li className="flex gap-3">
              <span>•</span>
              <span>
                <h1 className="font-semibold">
                  Algorithms, Data Structures, and Database Concepts.
                </h1>
                Study of problem-solving techniques, data organization,
                computational efficiency, and relational database design to
                support efficient and scalable software development.
              </span>
            </li>
            <li className="flex gap-3">
              <span>•</span>
              <span>
                <h1 className="font-semibold">
                  Intro to Web Programming (HTML, CSS, and JavaScript)
                </h1>
                Application of modern web development fundamentals, including
                responsive UI design, client-side interactivity, and best
                practices in web application development
              </span>
            </li>
            <li className="flex gap-3">
              <span>•</span>
              <span>
                <h1 className="font-semibold">
                  Intro to basic of Computer Networking
                </h1>
                Understanding basic of network architectures, communication
                protocols, and basic network configuration to support reliable
                data transmission
              </span>
            </li>
            <li className="flex gap-3">
              <span>•</span>
              <span>
                <h1 className="font-semibold">Software Development Projects</h1>
                Development of multiple academic and related projects involving
                the design and implementation of web-based applications to solve
                real-world problems
              </span>
            </li>
          </ul>
        </article>

        <article
          className={`rounded-3xl bg-white border border-slate-200 p-6 shadow-soft isVisible ${
            isVisible
              ? "opacity-100 translate-0 duration-300"
              : "opacity-0 translate-y-6"
          } transition-all`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-slate-900">
                SMKS Binong Permai
              </h3>
              <p className="text-sm text-slate-500">Multimedia</p>
            </div>
            <span className="text-xs text-slate-600 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
              2018 – 2021
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li className="flex gap-3">
              <span>•</span>
              <span>
                <h1 className="font-semibold">
                  Graphic Design and Image Manipulation
                </h1>
                Learn visual design using CorelDRAW and Adobe Illustrator, as
                well as image editing and manipulation with Adobe Photoshop.
              </span>
            </li>
            <li className="flex gap-3">
              <span>•</span>
              <span>
                <h1 className="font-semibold">Video Editing</h1>
                Editing video (Adobe Premiere Pro).
              </span>
            </li>
            <li className="flex gap-3">
              <span>•</span>
              <span>
                <h1 className="font-semibold">
                  Intro to Basic Programming & Animation
                </h1>
                Fundamental programming experience using Java (NetBeans), along
                with basic animation development using Adobe Flash/Adobe
                Animate.
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default EducationComponents;
