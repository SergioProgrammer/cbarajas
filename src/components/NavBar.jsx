import React from "react";

const menuItems = [
  { label: "La Clínica", href: "/laclinica" },
  {
    label: "Especialidades",
    href: "#sobre",
    subItems: [
      { label: "Otorrino", href: "/otorrino" },
      { label: "Audiología", href: "/audiologia" },
      { label: "Audífonos", href: "/audifonos" },
      { label: "Niños y Adolescentes", href: "/ninos" },
      { label: "Vértigo", href: "/vertigo" },
      { label: "Voz", href: "/voz" },
    ],
  },
  {
    label: "Pruebas Clínicas",
    href: "#servicios",
    subItems: [
      { label: "Audiometría", href: "/audiometria" },
      { label: "Audiometría Infantil", href: "/audinfantil" },
      { label: "Timpanometría", href: "/timpanometria" },
      { label: "Otoemisiones Acústicas", href: "/otoemisiones" },
      { label: "Potenciales Evocados Auditivos", href: "/evocados" },
    ],
  },
  { label: "Fundación Barajas", href: "www.fundacionbarajas.com" },
  { label: "Contacto", href: "/contacto" },
];

export default function NavBar() {
  return (
    <nav className="fixed mb-10 w-full z-50 bg-white/90 backdrop-blur-lg shadow-md border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/Logohorizontal.svg"
              alt="Clínica Barajas Logo"
              className="h-36 w-auto drop-shadow-lg"
            />
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-4 text-lg">
            {menuItems.map((item, idx) => (
              <div className="relative group" key={idx}>
                <a
                  href={item.href}
                  className="px-3 py-2 rounded-lg transition-all duration-200 text-teal-700 font-medium hover:text-teal-900 hover:bg-teal-50"
                >
                  {item.label}
                </a>
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
              onClick={() => window.dispatchEvent(new Event("open-chat"))}
              className="ml-4 px-5 py-2 bg-teal-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-teal-700 transition-all duration-200"
            >
              Reservar Cita
            </button>
          </div>

          {/* Botón móvil menú */}
          <button
            id="menu-btn"
            className="md:hidden text-teal-700 text-3xl focus:outline-none"
            onClick={() =>
              document.getElementById("mobile-menu").classList.toggle("hidden")
            }
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu móvil */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-white/95 shadow-lg border-t border-teal-100 rounded-b-lg"
      >
        {menuItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <a
              href={item.href}
              className="block px-5 py-4 text-teal-700 hover:bg-teal-50 font-semibold"
            >
              {item.label}
            </a>
            {item.subItems && (
              <div className="pl-5 bg-teal-50">
                {item.subItems.map((sub, subIdx) => (
                  <a
                    key={subIdx}
                    href={sub.href}
                    className="block px-5 py-3 text-teal-700 hover:bg-teal-100"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Botón móvil Reservar Cita */}
        <button
          onClick={() => window.dispatchEvent(new Event("open-chat"))}
          className="block mx-4 my-4 px-5 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-teal-600 hover:to-teal-700 text-center transition-all duration-200"
        >
          Reservar Cita
        </button>
      </div>
    </nav>
  );
}
