import React, { useState, useEffect } from "react";

export default function VozSeccion() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("GRABS");

  const secciones = [
    {
      image: "/enfermedades/medico.jpg",
      title: "Disfonías",
      description:
        "Alteraciones en la calidad de la voz que pueden afectar el timbre, la intensidad o la duración.",
      bullets: [
        "Ronquera o voz áspera",
        "Fatiga vocal",
        "Pérdida parcial de la voz",
        "Sensación de esfuerzo al hablar"
      ],
      fullText: `Las disfonías pueden ser orgánicas (lesiones en las cuerdas vocales, pólipos, nódulos, parálisis laríngea) o funcionales (uso inadecuado de la voz). 
El diagnóstico precoz es fundamental para prevenir complicaciones y recuperar la salud vocal mediante tratamiento médico y rehabilitación foniátrica.`
    },
    {
      image: "/enfermedades/lineas.png",
      title: "Percepción GRABS",
      description:
        "Método clínico de evaluación perceptiva de la voz utilizado internacionalmente.",
      bullets: [
        "Grado de disfonía",
        "Rugosidad",
        "Aire en la voz",
        "Tensión",
        "Estabilidad tonal"
      ],
      fullText: {
        GRABS: `El protocolo GRABS (o GRBAS) valora perceptivamente la voz en cinco parámetros: Grado, Rugosidad, Soplo/Aire, Astenia y Tensión. Es una herramienta fundamental para medir la severidad de la disfonía y planificar un tratamiento individualizado.`
      }
    },
    {
      image: "/enfermedades/cuerdas.png",
      title: "Videoestroboscopia",
      description:
        "Técnica endoscópica que permite observar el movimiento de las cuerdas vocales durante la fonación.",
      bullets: [
        "Visualización de lesiones",
        "Evaluación de vibración laríngea",
        "Detección de alteraciones tempranas"
      ],
      fullText: `La videoestroboscopia utiliza una cámara con luz estroboscópica que sincroniza la vibración de las cuerdas vocales, creando una ilusión de movimiento lento. 
Permite detectar alteraciones mínimas y lesiones que no se aprecian en una laringoscopia convencional.`
    },
    {
      image: "/enfermedades/laringe.webp",
      title: "Análisis Acústico de la Voz",
      description:
        "Estudio computarizado que cuantifica las características acústicas de la voz.",
      bullets: [
        "Frecuencia fundamental",
        "Rango tonal",
        "Tiempo máximo de fonación",
        "Perturbaciones (jitter, shimmer)"
      ],
      fullText: `El análisis acústico es una herramienta objetiva que mide parámetros de la señal vocal. Permite complementar la evaluación clínica, monitorear la evolución de la voz durante el tratamiento y establecer comparaciones antes y después de la terapia.`
    }
  ];

  useEffect(() => {
    if (selected) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [selected]);

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape' && selected) setSelected(null); };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selected]);

  return (
    <section className="bg-white py-20 px-6" id="voz-seccion">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
            Evaluación y Tratamiento de la Voz
          </h2>
          <p className="text-xl text-teal-600 max-w-3xl mx-auto leading-relaxed">
            Diagnóstico completo de las alteraciones de la voz con técnicas modernas y protocolos internacionales
          </p>
        </div>

        {/* Grid horizontal responsivo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {secciones.map((section, index) => (
            <HorizontalServiceCard key={index} {...section} onLeerMas={() => setSelected(section)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn"
             onClick={(e) => e.target === e.currentTarget && setSelected(null)}>
          <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl relative max-h-[90vh] overflow-hidden animate-scaleIn">
            <div className="relative">
              <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent"></div>
              <button onClick={() => setSelected(null)}
                      className="absolute top-4 right-4 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center text-teal-700 hover:text-teal-800 shadow-lg transition-all duration-200 hover:scale-105">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-lg">{selected.title}</h3>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-14rem)]">
              {selected.title === "Percepción GRABS" ? (
                <>
                  <div className="flex mb-6 border-b border-teal-200">
                    {["GRABS"].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 font-semibold transition-all duration-200 ${
                          activeTab === tab 
                            ? "text-teal-700 border-b-3 border-teal-700" 
                            : "text-teal-500 hover:text-teal-600"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                    {selected.fullText[activeTab]}
                  </p>
                </>
              ) : (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">{selected.fullText}</p>
              )}

              <div className="mt-10 flex justify-center">
                <button onClick={() => setSelected(null)}
                        className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Solicitar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }
        @keyframes scaleIn { from {opacity:0; transform:scale(0.9);} to {opacity:1; transform:scale(1);} }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
      `}</style>
    </section>
  );
}

function HorizontalServiceCard({ image, title, description, bullets, onLeerMas }) {
  return (
    <div className="bg-white backdrop-blur-sm rounded-2xl shadow-lg border border-teal-200 hover:shadow-2xl hover:border-teal-300 transition-all duration-300 overflow-hidden group hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row h-full">
        {/* Imagen */}
        <div className="relative overflow-hidden sm:w-48 flex-shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 sm:h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Contenido */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-teal-700 mb-3 group-hover:text-teal-800 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              {description}
            </p>
            
            {/* Bullets compactos */}
            {bullets && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {bullets.slice(0, 3).map((item, index) => (
                    <span key={index} className="inline-flex items-center text-sm text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                      <svg className="w-3 h-3 text-teal-600 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </span>
                  ))}
                  {bullets.length > 3 && (
                    <span className="inline-flex items-center text-sm text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200 font-medium">
                      +{bullets.length - 3} más
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Botón */}
          <button 
            onClick={onLeerMas} 
            className="self-start bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center group/btn"
          >
            <span className="mr-2">Leer más</span>
            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}