import React from "react";

const aseguradoras = [
  { nombre: "Adeslas", logo: "/aseguradoras/adeslas.svg" },
  { nombre: "Caser", logo: "/aseguradoras/caser.png" },
  { nombre: "Santalucía", logo: "/aseguradoras/santalucia.svg" },
  { nombre: "DKV", logo: "/aseguradoras/dkv.png" },
  { nombre: "HNA", logo: "/aseguradoras/hna.png" },
  { nombre: "Aura", logo: "/aseguradoras/aura.png" },
  { nombre: "Savia", logo: "/aseguradoras/savia.png" },
];

export default function Aseguradoras() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e293b] py-20 px-6 md:px-16">
      {/* Fondos decorativos */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-200"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Subtítulo */}
        <p className="text-teal-400 font-medium tracking-wide mb-4 animate-fadeIn">
          Confían en nuestros servicios
        </p>

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg animate-fadeInUp">
          Aseguradoras y <span className="text-teal-400">Mutuas</span>
        </h2>

        {/* Texto descriptivo */}
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fadeInUp">
          Trabajamos con las principales compañías aseguradoras y mutuas, no
          dude en preguntar por la suya:
        </p>

        {/* Grid de aseguradoras */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-7">
          {aseguradoras.map((aseguradora, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-xl group"
            >
              {aseguradora.logo ? (
                <img
                  src={aseguradora.logo}
                  alt={aseguradora.nombre}
                  className="w-32 h-20 object-contain mb-4 group-hover:scale-110 transition duration-300"
                />
              ) : (
                <div className="w-32 h-20 flex items-center justify-center bg-teal-100 rounded-lg text-teal-600 font-bold text-xl">
                  {aseguradora.nombre}
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition">
                {aseguradora.nombre}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
