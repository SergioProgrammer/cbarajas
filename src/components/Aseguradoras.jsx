import React from "react";

const aseguradoras = [
  { nombre: "Adeslas", logo: "/aseguradoras/adeslas.svg" },
  { nombre: "Caser", logo: "/aseguradoras/caser.png" },
  { nombre: "Santalucía", logo: "/aseguradoras/santalucia.svg" },
  { nombre: "DKV", logo: "/aseguradoras/dkv.png" },
  { nombre: "HNA", logo: "/aseguradoras/hna.png" },
];

export default function Aseguradoras() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute -top-10 -left-6 w-72 h-72 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-2 -right-6 w-60 h-50 bg-teal-300 rounded-full opacity-20 blur-2xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-12 mt-12">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-600 mb-16 drop-shadow-lg">
          Aseguradoras con las que 
          <span className="bg-teal-500 px-4 py-2 rounded-2xl text-white shadow-xl ml-2">
            trabajamos
          </span>
        </h2>

        {/* Grid de aseguradoras */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {aseguradoras.map((aseguradora, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center transition transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              {aseguradora.logo ? (
                <img
                  src={aseguradora.logo}
                  alt={aseguradora.nombre}
                  className="w-32 h-20 object-contain mb-6 group-hover:scale-105 transition"
                />
              ) : (
                <div className="w-32 h-20 flex items-center justify-center bg-teal-50 rounded-lg text-teal-600 font-bold text-xl">
                  {aseguradora.nombre}
                </div>
              )}
              <h3 className="text-xl font-semibold text-teal-700">
                {aseguradora.nombre}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
