import React, { useEffect, useRef, useState } from "react";

const menuItems = [
  { label: "La Clínica", href: "/laclinica" },
  {
    label: "Especialidades",
    href: "#sobre",
    subItems: [
      { label: "Otorrino", href: "/otorrino" },
      { label: "Audiología", href: "/audiologia" },
      { label: "Audífonos", href: "/audifonos-tenerife" },
      { label: "Niños y Adolescentes", href: "/deteccion-precoz-de-la-sordera" },
      { label: "Vértigo", href: "/vertigo-trastornos" },
      { label: "Voz", href: "/analisis-acustico-de-la-voz" },
    ],
  },
  {
    label: "Pruebas Clínicas",
    href: "#servicios",
    subItems: [
      { label: "Audiometría", href: "/audiometria" },
      { label: "Audiometría Infantil", href: "/audinfantil" },
      { label: "Timpanometría", href: "/timpanometria" },
      { label: "Otoemisiones Acústicas", href: "/otoemisiones-acusticas" },
      { label: "Potenciales Evocados Auditivos", href: "/potenciales-evocados-auditivos" },
      { label: "Vértigo", href: "/pruebas_vestibulares" },

    ],
  },
  { label: "Fundación Barajas", href: "https://fundacionbarajas.es" },
  { label: "Contacto", href: "/contacto" },
];

export default function NavBar() {
  const [openSection, setOpenSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopOpenIndex, setDesktopOpenIndex] = useState(null);
  const navRef = useRef(null);

  const toggleSection = (idx) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDesktopOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChatOpen = () => {
    window.dispatchEvent(new CustomEvent("open-chat"));
    setMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed mb-10 w-full z-50 bg-white/85 backdrop-blur-xl border-b border-teal-100/80 shadow-[0_8px_24px_rgba(15,118,110,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex justify-between h-14 md:h-24 items-center">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt="Clínica Barajas Logo"
              className="h-10 md:h-15 w-auto drop-shadow-lg"
            />
          </a>

          <div className="hidden md:flex items-center gap-1.5 text-[24px]">
            {menuItems.map((item, idx) => (
              <div className="relative" key={idx}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() =>
                        setDesktopOpenIndex(desktopOpenIndex === idx ? null : idx)
                      }
                      className="px-3 py-2.5 rounded-xl transition-all duration-200 text-teal-700 font-semibold hover:text-teal-900 hover:bg-teal-50 inline-flex items-center gap-1.5 leading-none"
                      aria-expanded={desktopOpenIndex === idx}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          desktopOpenIndex === idx ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 mt-2 min-w-[290px] bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl border border-teal-100 p-2 transition-all duration-200 ${
                        desktopOpenIndex === idx
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                    >
                      {item.subItems.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.href}
                          className="block px-4 py-3 text-[18px] text-teal-700 hover:bg-teal-50 rounded-xl whitespace-nowrap transition-colors"
                          onClick={() => setDesktopOpenIndex(null)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : item.action ? (
                  <button
                    onClick={handleChatOpen}
                    className="px-3 py-2.5 rounded-xl transition-all duration-200 text-teal-700 font-semibold hover:text-teal-900 hover:bg-teal-50 leading-none"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target={item.href?.startsWith("http") ? "_blank" : "_self"}
                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="px-3 py-2.5 rounded-xl transition-all duration-200 text-teal-700 font-semibold hover:text-teal-900 hover:bg-teal-50 leading-none"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            <button
              onClick={handleChatOpen}
              className="ml-3 px-5 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-[19px] font-semibold rounded-full shadow-md hover:shadow-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200 leading-none"
            >
              Reservar Cita
            </button>
          </div>

          <button
            className="md:hidden text-teal-700 p-2 rounded-xl hover:bg-teal-50 transition-colors"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white/95 shadow-lg border-t border-teal-100 rounded-b-2xl max-h-screen overflow-y-auto transition-all duration-200 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {menuItems.map((item, idx) => (
          <div key={idx} className="border-b border-teal-100">
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full text-left px-4 py-4 text-teal-700 font-semibold flex justify-between items-center hover:bg-teal-50 text-lg"
                >
                  {item.label}
                  <span className="text-xs">{openSection === idx ? "▲" : "▼"}</span>
                </button>
                {openSection === idx && (
                  <div className="pl-3 bg-teal-50/70">
                    {item.subItems.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.href}
                        className="block px-4 py-3 text-teal-700 hover:bg-teal-100 text-base rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : item.action ? (
              <button
                onClick={handleChatOpen}
                className="block w-full text-left px-4 py-4 text-teal-700 hover:bg-teal-50 font-semibold text-lg"
              >
                {item.label}
              </button>
            ) : (
              <a
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : "_self"}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block px-4 py-4 text-teal-700 hover:bg-teal-50 font-semibold text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            )}
          </div>
        ))}

        <button
          onClick={handleChatOpen}
          className="block mx-3 my-4 px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-teal-700 hover:to-teal-800 text-center transition-all duration-200 text-lg"
        >
          Reservar Cita
        </button>
      </div>
    </nav>
  );
}
