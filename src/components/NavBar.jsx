import React, { useState } from "react";

const menuItems = [
  { label: "La Clínica", href: "/laclinica" },
  {
    label: "Especialidades",
    href: "#sobre",
    subItems: [
      { label: "Otorrino", href: "/otorrino" },
      { label: "Audiología", href: "/audiologia" },
      { label: "Audífonos", href: "/adaptacion-de-audifonos" },
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
    ],
  },
  { label: "Fundación Barajas", href: "https://fundacionbarajas.es" },
  { label: "Contacto", action: "open-chat" }, 
];

export default function NavBar() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (idx) => {
    setOpenSection(openSection === idx ? null : idx);
  };

  // Función para manejar la apertura del chatbot
  const handleChatOpen = () => {
    window.dispatchEvent(new CustomEvent("open-chat"));
    
  };

  return (
    <nav className="fixed mb-10 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex justify-between h-14 md:h-20 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt="Clínica Barajas Logo"
              className="h-10 md:h-14 w-auto drop-shadow-lg"
            />
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-4 text-lg">
            {menuItems.map((item, idx) => (
              <div className="relative group" key={idx}>
                {/* Verificar si el item tiene una acción en lugar de href */}
                {item.action ? (
                  <button
                    onClick={handleChatOpen}
                    className="px-3 py-2 rounded-lg transition-all duration-200 text-teal-700 font-medium hover:text-teal-900 hover:bg-teal-50"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target={item.href?.startsWith("http") ? "_blank" : "_self"}
                    rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="px-3 py-2 rounded-lg transition-all duration-200 text-teal-700 font-medium hover:text-teal-900 hover:bg-teal-50"
                  >
                    {item.label}
                  </a>
                )}
                
                {item.subItems && (
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 text-base min-w-[200px] border border-teal-100 animate-fadeIn">
                    {item.subItems.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.href}
                        className="block px-5 py-3 text-teal-700 hover:bg-teal-50 whitespace-nowrap rounded-lg transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Botón Reservar Cita (desktop) */}
            <button
              onClick={handleChatOpen}
              className="ml-4 px-5 py-2 bg-teal-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-teal-800 transition-all duration-200"
            >
              Reservar Cita
            </button>
          </div>

          {/* Botón móvil menú */}
          <button
            id="menu-btn"
            className="md:hidden text-teal-700 text-2xl focus:outline-none p-1"
            onClick={() =>
              document.getElementById("mobile-menu").classList.toggle("hidden")
            }
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu móvil con acordeón */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-white/95 shadow-lg border-t border-teal-100 rounded-b-lg max-h-screen overflow-y-auto pb-4"
      >
        {menuItems.map((item, idx) => (
          <div key={idx} className="border-b border-teal-100">
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full text-left px-4 py-3 text-teal-700 font-semibold flex justify-between items-center hover:bg-teal-50 text-sm"
                >
                  {item.label}
                  <span className="text-xs">{openSection === idx ? "▲" : "▼"}</span>
                </button>
                {openSection === idx && (
                  <div className="pl-3 bg-teal-50">
                    {item.subItems.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.href}
                        className="block px-4 py-2.5 text-teal-700 hover:bg-teal-100 text-sm"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : item.action ? (
              // Si el item tiene una acción (como el contacto), renderizar como botón
              <button
                onClick={handleChatOpen}
                className="block w-full text-left px-4 py-3 text-teal-700 hover:bg-teal-50 font-semibold text-sm"
              >
                {item.label}
              </button>
            ) : (
              <a
                href={item.href}
                className="block px-4 py-3 text-teal-700 hover:bg-teal-50 font-semibold text-sm"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}

        {/* Botón móvil Reservar Cita */}
        <button
          onClick={handleChatOpen}
          className="block mx-3 my-3 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-teal-600 hover:to-teal-700 text-center transition-all duration-200 text-sm"
        >
          Reservar Cita
        </button>
      </div>
    </nav>
  );
}