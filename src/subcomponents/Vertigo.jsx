import React, { useState, useEffect } from "react";

export default function VertigoTrastornos() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("VNG"); 

  const secciones = [
    {
      image: "/pruebas/pruebas.webp",
      title: "Vértigo y Trastornos del Equilibrio",
      description:
        "El vértigo es una sensación de movimiento o mareo que afecta la vida diaria y puede tener múltiples causas.",
      bullets: [
        "Náuseas y vómitos",
        "Problemas de equilibrio",
        "Pérdida de audición o zumbido",
        "Mareo por movimiento",
        "Nistagmo (movimiento ocular involuntario)",
      ],
      fullText: `El vértigo puede ser periférico (afecta oído interno o nervio vestibular) o central (afección cerebral). Entre los tipos de vértigo que diagnosticamos y tratamos se incluyen:
- Vértigo Posicional Paroxístico Benigno
- Neuritis vestibular
- Vestibulopatía bilateral
- Enfermedad de Ménière
- Migraña vestibular
- Desequilibrio en personas mayores (Presbivestibulopatía)
- Paroxismia vestibular
- Mareo por viajes (cinetosis)
- Patologías de origen central con secuelas en el equilibrio (AVC, EM, etc.)

Las causas pueden variar: migrañas, medicamentos, accidente cerebrovascular, lesiones de cabeza, diabetes, cera en el oído, entre otras. En Clínica Barajas ofrecemos diagnóstico integral y tratamiento especializado para recuperar el equilibrio y la calidad de vida.`
    },
    {
      image: "/pruebas/videonista.webp",
      title: "Pruebas Vestibulares",
      description:
        "Evaluación especializada del sistema vestibular para diagnosticar la causa del vértigo y los trastornos del equilibrio.",
      bullets: [
        "Videonistagmografía (VNG)",
        "Video Head Impulse Test (vHIT)",
        "Potencial Vestibular Miogénico Evocado (PVME)",
      ],
      fullText: {
        VNG: `La Videonistagmografía (VNG) evalúa los movimientos involuntarios de los ojos (nistagmo) para detectar trastornos vestibulares periféricos o centrales. Incluye pruebas oculares, posicionales y calóricas. Beneficios: diagnóstico preciso, planificación de tratamiento personalizado y monitoreo de evolución. Puede causar mareo temporal.`, 

        vHIT: `El Video Head Impulse Test (vHIT) analiza el reflejo vestíbulo-ocular durante movimientos rápidos de la cabeza. Permite identificar qué oído está comprometido y evaluar el grado de afectación vestibular. Es rápido, cómodo y preciso, y complementa otras pruebas de equilibrio.`,

        PVME: `El Potencial Vestibular Miogénico Evocado (PVME) mide la respuesta eléctrica de los músculos del cuello ante estímulos vestibulares. Permite evaluar la integridad del sistema vestibular y nervios relacionados, detectando alteraciones periféricas y centrales. Beneficios: valoración objetiva y cuantitativa, complementa VNG y vHIT, y ayuda a diseñar terapias personalizadas.`
      }
    },
    {
      image: "/pruebas/video-head.webp",
      title: "Rehabilitación del Vértigo",
      description:
        "Terapia personalizada que combina ejercicios y maniobras para reducir el vértigo y mejorar la estabilidad.",
      bullets: [
        "Maniobras de reposicionamiento de los cristales (Epley, Semont, Gufoni)",
        "Ejercicios de Brandt-Daroff",
        "Fortalecimiento del equilibrio y coordinación",
        "Planes adaptados a cada paciente",
      ],
      fullText: `La rehabilitación vestibular se centra en ejercicios realizados por profesionales especializados para reducir síntomas de vértigo, mareo e inestabilidad. Se utilizan maniobras específicas para tratar el VPPB y ejercicios de Brandt-Daroff para mejorar la adaptación vestibular. Cada plan se personaliza según las necesidades del paciente, combinando coordinación, fortalecimiento y reentrenamiento del equilibrio.`
    },
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
    <section className="bg-teal-500 py-16 px-6 lg:px-16" id="vertigo-trastornos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Vértigo y Trastornos del Equilibrio</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            En Clínica Barajas abordamos el vértigo y los trastornos del equilibrio con diagnóstico especializado y rehabilitación personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secciones.map((section, index) => (
            <ServiceCard key={index} {...section} onLeerMas={() => setSelected(section)} />
          ))}
        </div>
      </div>

      {/* Modal de "Leer más" con pestañas */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn"
             onClick={(e) => e.target === e.currentTarget && setSelected(null)}>
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl relative max-h-[90vh] overflow-hidden animate-scaleIn">
            <div className="relative">
              <img src={selected.image} alt={selected.title} className="w-full h-48 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <button onClick={() => setSelected(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-teal-700 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-lg">{selected.title}</h3>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
              {/* Tabs solo si es Pruebas Vestibulares */}
              {selected.title === "Pruebas Vestibulares" ? (
                <>
                  <div className="flex mb-4 border-b border-gray-200">
                    {["VNG", "vHIT", "PVME"].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-semibold ${activeTab === tab ? "text-teal-700 border-b-2 border-teal-700" : "text-gray-600"}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                    {selected.fullText[activeTab]}
                  </p>
                </>
              ) : (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">{selected.fullText}</p>
              )}
              
              <div className="mt-8 flex justify-center">
                <button onClick={() => setSelected(null)}
                        className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
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
        <button onClick={onLeerMas} className="mt-auto bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center group">
          <span className="mr-2">Leer más</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
