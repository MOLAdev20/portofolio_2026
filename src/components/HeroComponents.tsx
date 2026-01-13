import EmailIcons from "./icons/EmailSVG";
import MapTagIcons from "./icons/MapTagSVG";
import WhatsAppIcons from "./icons/WhatsAppSVG";
import profilePicture from "../assets/profile.jpeg";
import cv from "../assets/cv.pdf";

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
            Saya adalah seorang Web Developer dengan pengalaman 4 tahun
            membangun puluhan aplikasi web untuk kebutuhan internal perusahaan
            dan klien, fokus utama pada{" "}
            <span className="font-medium text-slate-900">
              PHP (CodeIgniter 4)
            </span>{" "}
            dan{" "}
            <span className="font-medium text-slate-900">
              Javascript (React JS & Express JS)
            </span>
            . Terbiasa mengubah kebutuhan tim/klien menjadi sistem yang efisien
            dan user-friendly dari perencanaan sampai rilis production dan
            maintenance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={cv}
              className="px-12 py-2 rounded-lg active:scale-95 transition font-semibold bg-blue-500 text-white hover:opacity-90 shadow-soft"
            >
              Unduh CV
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2">
              <div className="w-5 h-5">
                <MapTagIcons />
              </div>
              Tangerang, Banten
            </span>
            <a
              href="mailto:billhikam2003@gmail.com"
              className="inline-flex hover:bg-slate-100 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2"
            >
              <div className="w-5 h-5">
                <EmailIcons />
              </div>
              billhikam2003@gmail.com
            </a>
            <a
              href="https://wa.me/6283140318095"
              className="inline-flex hover:bg-slate-100 items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-2"
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
