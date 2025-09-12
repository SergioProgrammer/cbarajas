import React, { useState, useEffect } from "react";

export default function PruebasVestibulares() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState(null); // No necesitamos pestañas si cada prueba es una tarjeta

  const pruebas = [
    {
      image: "/pruebas/videonista.webp",
      title: "Videonistagmografía (VNG)",
      description: "La VNG evalúa los movimientos involuntarios de los ojos (nistagmo) para detectar trastornos vestibulares. Incluye pruebas oculares, posicionales y calóricas para un diagnóstico preciso.",
      bullets: [
        "Diagnóstico de trastornos vestibulares",
        "Evaluación de nistagmo",
        "Planificación de tratamiento personalizado",
      ],
      fullText: `La Videonistagmografía (VNG) evalúa los movimientos involuntarios de los ojos (nistagmo) para detectar trastornos vestibulares periféricos o centrales. Incluye pruebas oculares, posicionales y calóricas. Beneficios: diagnóstico preciso, planificación de tratamiento personalizado y monitoreo de evolución. Puede causar mareo temporal.`
    },
    {
      image: "/pruebas/video-head.webp",
      title: "Video Head Impulse Test (vHIT)",
      description: "Esta prueba analiza el reflejo vestíbulo-ocular durante movimientos rápidos de la cabeza. Permite identificar qué oído está comprometido y evaluar el grado de afectación vestibular.",
      bullets: [
        "Identificación del oído afectado",
        "Evaluación precisa del reflejo",
        "Procedimiento rápido y cómodo",
      ],
      fullText: `El Video Head Impulse Test (vHIT) analiza el reflejo vestíbulo-ocular durante movimientos rápidos de la cabeza. Permite identificar qué oído está comprometido y evaluar el grado de afectación vestibular. Es rápido, cómodo y preciso, y complementa otras pruebas de equilibrio.`
    },
    {
      image: "/pruebas/pruebas.webp", // Cambia esta imagen si tienes una específica para PVME
      title: "Potencial Vestibular Miogénico Evocado (PVME)",
      description: "El PVME mide la respuesta eléctrica de los músculos del cuello ante estímulos vestibulares, valorando la integridad del sistema vestibular y nervios relacionados.",
      bullets: [
        "Valoración objetiva y cuantitativa",
        "Detección de alteraciones periféricas",
        "Ayuda a diseñar terapias personalizadas",
      ],
      fullText: `El Potencial Vestibular Miogénico Evocado (PVME) mide la respuesta eléctrica de los músculos del cuello ante estímulos vestibulares. Permite evaluar la integridad del sistema vestibular y nervios relacionados, detectando alteraciones periféricas y centrales. Beneficios: valoración objetiva y cuantitativa, complementa VNG y vHIT, y ayuda a diseñar terapias personalizadas.`
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
    <section className="bg-teal-500 py-16 px-6 lg:px-16" id="pruebas-vestibulares">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Pruebas Vestibulares</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Evaluación especializada del sistema vestibular para diagnosticar la causa del vértigo y los trastornos del equilibrio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pruebas.map((prueba, index) => (
            <ServiceCard key={index} {...prueba} onLeerMas={() => setSelected(prueba)} />
          ))}
        </div>
      </div>


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
        
      </div>
    </div>
  );
}