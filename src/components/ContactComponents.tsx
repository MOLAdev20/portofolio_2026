import EmailIcons from "./icons/EmailSVG";
import WhatsAppIcons from "./icons/WhatsAppSVG";

const ContactComponents = () => {
  return (
    <div className="bg-slate-900 text-white shadow-soft">
      <div className="grid lg:grid-cols-12 p-7 mx-auto max-w-7xl md:p-20 items-center">
        <div className="col-span-12 flex flex-col gap-3 items-center text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Tertarik Menjalin Kerja Sama atau Peluang Profesional?
          </h2>

          <div className="w-16 h-1 bg-white/70 rounded-full"></div>

          <p className="text-white/80 leading-relaxed max-w-xl">
            Saya terbuka untuk berbagai bentuk kolaborasi dan peluang
            profesional, khususnya dalam pengembangan sistem berbasis web yang
            terstruktur, scalable, dan berorientasi pada kenyamanan pengguna.
            Baik untuk kebutuhan internal maupun pengembangan web application
            secara menyeluruh.
          </p>
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-3 py-2">
              <div className="w-5 h-5">
                <EmailIcons />
              </div>
              billhikam2003@gmail.com
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-3 py-2">
              <div className="w-5 h-5">
                <WhatsAppIcons />
              </div>
              +62 831-4031-8095
            </span>
          </div>
        </div>

        {/* <div className="lg:col-span-5">
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="">Alamat EMail</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-1 p-2 w-full text-lg w-100"
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="">Nomor Telepon</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-1 p-2 w-full text-lg w-100"
                />
              </div>
              <div className="flex flex-col gap-2 my-5">
                <label htmlFor="">Pesan</label>
                <textarea
                  rows={5}
                  name=""
                  id=""
                  className="border-1 p-2 w-full text-lg w-100"
                ></textarea>
              </div>
              <div className="flex text-slate-900 gap-2">
                <button className="bg-white py-3 w-full">Kirim by Wa</button>
                <button className="bg-white py-3 w-full">Kirim by Email</button>
              </div>
            </div> */}
      </div>
      <footer className="py-5 text-center text-sm text-slate-500">
        <p>
          © <span id="year"></span> Sabiilul Hikam • Built with Tailwind CDN
        </p>
      </footer>
    </div>
  );
};

export default ContactComponents;
