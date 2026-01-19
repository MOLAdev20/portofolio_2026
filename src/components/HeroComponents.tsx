import WhatsAppIcons from "./icons/WhatsAppSVG";
import profilePicture from "../assets/profile.jpeg";
import cv from "../assets/cv.pdf";
import LinkedInIcons from "./icons/LinkedInSVG";
import GihtubIcons from "./icons/GithubSVG";
import InstagramIcons from "./icons/InstagramSVG";

const HeroComponents = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        <div className="lg:col-span-8">
          {/* <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow-soft">
            <span aria-hidden="true">⚡</span>
            <span>Web Developer • 4+ tahun pengalaman</span>
          </p> */}

          <h1 className="mt-4 text-3xl md:text-5xl text-slate-900">
            Hi, I'm{" "}
            <span className="font-semibold text-blue-500">Sabiilul Hikam</span>
          </h1>
          <h1 className="mt-4 text-3xl md:text-5xl text-slate-900">
            Web Developer
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            I am a Web Developer with 4 years of experience, working on various
            web applications for both internal company use and clients. My main
            technology stack includes{" "}
            <span className="font-medium text-slate-900">
              PHP (CodeIgniter 4)
            </span>{" "}
            and{" "}
            <span className="font-medium text-slate-900">
              Javascript (React JS & Express JS)
            </span>
            . I am used to turning team and client requirements into functional
            web application systems, handling the process from planning to
            production release and ongoing maintenance
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={cv}
              className="px-12 py-2 rounded-lg active:scale-95 transition font-semibold bg-blue-500 text-white hover:opacity-90 shadow-soft"
            >
              See My Resume
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <a
              href="https://www.linkedin.com/in/sabilul-hikam/"
              target="_blank"
              className="rounded-full border border-slate-200 bg-white hover:bg-blue-500 hover:text-white px-3 py-2"
            >
              <div className="w-5 h-5">
                <LinkedInIcons />
              </div>
            </a>
            <a
              href="https://github.com/MOLAdev20"
              target="_blank"
              className="rounded-full border border-slate-200 bg-white hover:bg-blue-500 hover:text-white px-3 py-2"
            >
              <div className="w-5 h-5">
                <GihtubIcons />
              </div>
            </a>
            <a
              href="https://www.instagram.com/bill_hikam12"
              className="rounded-full border border-slate-200 bg-white hover:bg-blue-500 hover:text-white px-3 py-2"
            >
              <div className="w-5 h-5">
                <InstagramIcons />
              </div>
            </a>
            <a
              href="https://wa.me/6283140318095"
              className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white hover:bg-blue-500 hover:text-white px-3 py-2"
            >
              <div className="w-5 h-5">
                <WhatsAppIcons />
              </div>
              +62 831-4031-8095
            </a>
          </div>
        </div>

        <aside className="lg:col-span-4 hidden md:block">
          <img
            src={profilePicture}
            alt="profile"
            width={"100%"}
            className="rounded-full border-blue-100 border-18"
          />
        </aside>
      </div>
    </section>
  );
};

export default HeroComponents;
