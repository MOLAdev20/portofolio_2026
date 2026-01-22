import { useEffect, useState } from "react"
import logo from "../assets/logo.png"
import MoonSVG from "../components/icons/MoonSVG"
import SunSVG from "../components/icons/SunSVG"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  // Init theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Sync theme
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  // Lock scroll when menu open (IMPORTANT)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-800/80 backdrop-blur border-b border-slate-200 dark:border-slate-700">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Logo" width={40} className="rounded-full border" />
            <div className="leading-tight">
              <p className="font-semibold">Sabilul Hikam</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Web Developer | Tangerang, Banten
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {["skills", "experience", "projects", "education"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            <button
              onClick={() => setDark((p) => !p)}
              className="px-3 py-2 rounded-xl border cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              {dark ? <SunSVG /> : <MoonSVG />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-xl border px-3 py-2"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* ===== BACKDROP ===== */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== MOBILE MENU (BOTTOM SHEET) ===== */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-4 mb-4 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl border border-slate-200 dark:border-slate-700 p-6">
          {/* Handle */}
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-slate-300 dark:bg-slate-600" />

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-semibold text-lg">Menu</span>
            <button onClick={() => setOpen(false)} className="text-2xl">×</button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-4 text-lg">
            {[
              ["Skills", "#skills"],
              ["Experience", "#experience"],
              ["Project", "#projects"],
              ["Education", "#education"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {label}
              </a>
            ))}
          </nav>

          <hr className="my-6 border-slate-200 dark:border-slate-700" />

          {/* Theme */}
          <button
            onClick={() => {
              setDark((p) => !p)
              setOpen(false)
            }}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <span>Switch Theme</span>
            {dark ? <SunSVG /> : <MoonSVG />}
          </button>
        </div>
      </div>
    </>
  )
}