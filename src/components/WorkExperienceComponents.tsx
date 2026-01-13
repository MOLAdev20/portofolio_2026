const WorkExperienceComponents = () => {
  return (
    <section id="experience" className="py-10">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold text-slate-900">
          Pengalaman Kerja
        </h2>
        <p className="text-sm text-slate-500">
          Timeline & highlight kontribusi
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        {/* PT Sakura */}
        <article className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-soft">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                PT Sakura Mitra Internasional — Web Developer
              </h3>
              <p className="text-sm text-slate-500">Tangerang, Indonesia</p>
            </div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
              Okt 2021 - Des 2025
            </span>
          </div>

          <ul className="mt-5 grid gap-3 text-slate-600 leading-relaxed">
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Berkolaborasi lintas divisi untuk analisis kebutuhan, desain
                solusi, dan implementasi aplikasi internal.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Membangun sistem keuangan internal (CI4 + JS): invoice,
                cashflow, reimbursement, proyeksi bulanan & tahunan.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Mengembangkan Sistem Informasi Siswa: data siswa, absensi,
                nilai, dan dukungan keputusan kelulusan.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Monitoring alumni + visualisasi peta alumni di Jepang
                menggunakan Leaflet.js.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Fitur pencatatan job dari Jepang & monitoring pasca pelatihan
                untuk proses matching kandidat.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Student Portal: progres belajar, jadwal ujian, riwayat
                perkembangan, update kondisi & lokasi real-time.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Sistem pendaftaran online + dashboard analitik status pendaftar
                & rekap bulanan/tahunan.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Sistem seleksi siswa berbasis React.js + Firebase untuk rekap
                hasil.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Instalasi & konfigurasi web server dan mail server (Ubuntu,
                iRedMail).
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
        <article className="rounded-3xl bg-white border border-slate-200 p-6 md:p-8 shadow-soft">
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
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Mengembangkan Sistem Manajemen Sekolah berbasis web menggunakan
                PHP (CodeIgniter 3) dan JavaScript.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Fitur inti: tabungan siswa, data siswa, manajemen kelas, nilai,
                absensi, guru, mata pelajaran.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Analisis kebutuhan & perancangan alur agar administrasi sekolah
                lebih terstruktur dan efisien.
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <span>•</span>
              <span>
                Komunikasi aktif dengan klien untuk sinkron fitur, tampilan, dan
                perubahan kebutuhan.
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
