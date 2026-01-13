const ExperienceComponents = () => {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 p-5">
        <p className="text-sm text-slate-500">Pengalaman</p>
        <p className="mt-1 text-xl font-semibold text-slate-900">4+ Tahun</p>
        <p className="mt-2 text-sm text-slate-600">
          Web apps internal & client.
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 p-5">
        <p className="text-sm text-slate-500">Stack utama</p>
        <p className="mt-1 text-xl font-semibold text-slate-900">CI4 + JS</p>
        <p className="mt-2 text-sm text-slate-600">
          PHP (CodeIgniter 4), JavaScript.
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 p-5">
        <p className="text-sm text-slate-500">Pendukung</p>
        <p className="mt-1 text-xl font-semibold text-slate-900">
          Node / React
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Express.js, React, Firebase, MySQL.
        </p>
      </div>
    </div>
  );
};

export default ExperienceComponents;
