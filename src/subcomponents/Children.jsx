import React, { useState, useEffect } from "react";

export default function DeteccionPrecozDeLaSordera() {
  const [selected, setSelected] = useState(null);

  const secciones = [
    {
      image: "/audifonos/bebe.jpg",
      title: "Detección Precoz de la Sordera",
      description:
        "La detección temprana de la pérdida auditiva es crucial para prevenir retrasos en el desarrollo del habla y del lenguaje, y mejorar la calidad de vida.",
      bullets: [
        "Prevención de retrasos en el habla y lenguaje",
        "Detección en infantes y niños pequeños",
        "Impacto positivo en desarrollo social y emocional",
        "Mejora de la calidad de vida en adultos",
      ],
      fullText: `La sordera no detectada o no tratada en niños puede afectar gravemente la capacidad del niño para aprender a hablar y comprender las palabras. Además, impacta en las habilidades sociales y emocionales. En adultos, puede afectar el trabajo, las relaciones y la calidad de vida general.

Es fundamental realizar pruebas de audición desde etapas tempranas y buscar atención médica inmediata ante signos de pérdida auditiva. La detección y tratamiento tempranos permiten que los pacientes se desarrollen plenamente en su comunidad y vida cotidiana.`,
    },
    {
      image: "/audifonos/sky.webp",
      title: "Audífonos en niños",
      description:
        "Abordaje integral de la pérdida auditiva infantil con tecnología avanzada y enfoque personalizado.",
      bullets: [
        "Diagnóstico audiológico preciso",
        "Adaptación protésica personalizada",
        "Verificación electroacústica con equipo clínico",
        "Coordinación con centros educativos",
        "Acompañamiento familiar durante todo el proceso",
        "Promoción del desarrollo comunicativo",
      ],
      fullText: `Nuestro equipo ofrece evaluación clínica adaptada a la edad, ajuste de audífonos según perfil auditivo y mediciones objetivas con equipo clínico. Coordinamos con colegios y orientamos a las familias, promoviendo lenguaje, socialización y bienestar.

La labor se basa en evidencia científica, tecnología avanzada y enfoque humano, garantizando desarrollo integral del menor.`,
    },
    {
      image: "/audifonos/nino.jpg",
      title: "Trastornos del Neurodesarrollo",
      description:
        "Diagnóstico y seguimiento integral de trastornos del neurodesarrollo para potenciar habilidades y prevenir dificultades.",
      bullets: [
        "Evaluación integral: cognitiva, emocional y social",
        "Intervención temprana personalizada",
        "Apoyo y orientación a familias",
        "Coordinación con colegios y terapeutas",
      ],
      fullText: `Los trastornos del neurodesarrollo pueden afectar el aprendizaje, la comunicación y la interacción social del niño. Nuestro equipo multidisciplinar realiza evaluación neurológica, psicopedagógica y auditiva, ofreciendo seguimiento continuo y estrategias personalizadas.

Con intervención temprana, se favorece el desarrollo cognitivo, comunicativo y emocional, promoviendo el bienestar y la inclusión del niño en su entorno.`,
    },
  ];

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selected) {
        setSelected(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selected]);

  return (
    <section className="bg-teal-50 py-16 px-6 lg:px-16" id="deteccion-precoz">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">Detección Precoz</h2>
          <p className="text-lg text-teal-900 max-w-2xl mx-auto">
            En Clínica Barajas cuidamos la audición y el desarrollo de los más pequeños con un enfoque integral y personalizado. Descubre nuestras áreas de especialización.
          </p>
        </div>

        {/* Grid de secciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secciones.map((section, index) => (
            <ServiceCard
              key={index}
              {...section}
              onLeerMas={() => setSelected(section)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl relative max-h-[90vh] overflow-hidden animate-scaleIn">
            <div className="relative">
              <img src={selected.image} alt={selected.title} className="w-full h-48 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-teal-700 shadow-lg"
                aria-label="Cerrar modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-lg">{selected.title}</h3>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">{selected.fullText}</p>
              
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
      `}</style>
    </section>
  );
}

function ServiceCard({ image, title, description, bullets, onLeerMas }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-teal-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1 leading-relaxed">{description}</p>

        {bullets && (
          <ul className="space-y-2 mb-6">
            {bullets.map((item, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <svg className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onLeerMas}
          className="mt-auto bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center group"
        >
          <span className="mr-2">Leer más</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
