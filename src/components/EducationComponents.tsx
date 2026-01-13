const EducationComponents = () => {
  return (
    <section id="education" className="py-10">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold text-slate-900">Pendidikan</h2>
        <p className="text-sm text-slate-500">Akademik & jurusan</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-slate-900">
                Universitas Pamulang
              </h3>
              <p className="text-sm text-slate-500">Teknik Informatika</p>
            </div>
            <span className="text-xs text-slate-600 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
              2023 – Sekarang
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>Algoritma, struktur data, dan basis data.</span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>Pemrograman web: HTML, CSS, JavaScript.</span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>Jaringan komputer.</span>
            </li>
          </ul>
        </article>

        <article className="rounded-3xl bg-white border border-slate-200 p-6 shadow-soft">
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
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Desain grafis (CorelDraw, Adobe Illustrator) & manipulasi gambar
                (Photoshop).
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>Editing video (Adobe Premiere Pro).</span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Pemrograman dasar (Java Netbeans) & animasi (Adobe
                Flash/Animate).
              </span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default EducationComponents;
