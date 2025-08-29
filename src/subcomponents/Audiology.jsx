import React, { useState, useEffect } from "react";

export default function Audiology() {
  const [selected, setSelected] = useState(null);

  const services = [
    {
      image: "/audiology/perdida.png",
      title: "Pérdida de Audición",
      description:
        "La pérdida de audición afecta la capacidad de percibir sonidos y puede tener un impacto significativo en la calidad de vida.",
      bullets: [
        "Dificultad para entender en ambientes ruidosos",
        "Necesidad de subir el volumen",
        "Zumbidos en los oídos (acúfenos)",
        "Molestia ante ruidos fuertes",
      ],
      fullText: `La pérdida de audición puede deberse a múltiples causas: factores genéticos, envejecimiento, exposición al ruido, infecciones o enfermedades.

Puede presentarse de forma progresiva o repentina, y afectar de manera parcial o total la capacidad auditiva. Un diagnóstico temprano es clave para iniciar un tratamiento adecuado que mejore la calidad de vida del paciente.

En nuestra clínica realizamos audiometrías completas, pruebas de impedancia y evaluaciones especializadas para determinar el tipo y grado de pérdida auditiva, ofreciendo soluciones personalizadas que incluyen desde terapias hasta adaptación de audífonos.`,
    },
    {
      image: "/audiology/Acufenos.webp",
      title: "Acúfenos e Hiperacusia",
      description:
        "Los acúfenos se manifiestan como zumbidos o pitidos sin fuente externa, mientras que la hiperacusia es una sensibilidad exagerada a sonidos normales.",
      bullets: [
        "Ruidos constantes o intermitentes en los oídos",
        "Posible relación con infecciones o lesiones",
        "Impacto en el sueño y concentración",
        "Sensibilidad extrema a sonidos cotidianos",
      ],
      fullText: `Los acúfenos afectan a millones de personas en el mundo y pueden estar relacionados con pérdida auditiva, estrés, problemas de circulación o traumatismos acústicos.

La hiperacusia, por su parte, genera intolerancia a ruidos cotidianos, dificultando la vida social y laboral. Estos trastornos pueden causar ansiedad, depresión y problemas de sueño.

Nuestro enfoque terapéutico incluye terapias de habituación al acúfeno (TRT), terapias cognitivo-conductuales, y técnicas de enmascaramiento sonoro que han demostrado gran eficacia en el manejo de estos síntomas.`,
    },
    {
      image: "/audiology/t-pac.jpg",
      title: "Trastornos del Procesamiento Auditivo Central (T-PAC)",
      description:
        "Los T-PAC en niños afectan la forma en que el cerebro procesa la información auditiva, dificultando la comprensión y el aprendizaje.",
      bullets: [
        "Problemas para entender en ambientes ruidosos",
        "Dificultad para seguir instrucciones verbales",
        "Retraso en habilidades de lectura y escritura",
        "Problemas de atención y concentración",
      ],
      fullText: `Los T-PAC no se deben a problemas de oído, sino a cómo el cerebro interpreta los sonidos. Esto puede ocasionar dificultades escolares, de atención y de comunicación que afectan el desarrollo académico y social del niño.

El diagnóstico requiere pruebas especializadas que evalúan diferentes aspectos del procesamiento auditivo central, incluyendo la discriminación auditiva, la memoria auditiva y la atención selectiva.

Con pruebas diagnósticas específicas y terapias auditivas personalizadas, es posible mejorar significativamente la capacidad de procesamiento y la calidad de vida de los niños afectados, ayudándoles a desenvolverse mejor en el entorno escolar y social.`,
    },
  ];

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  // Cerrar modal con tecla Escape
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
    <section className="bg-teal-500 py-16 px-6 lg:px-16" id="audiologia">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Audiología</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            En Clínica Barajas cuidamos de tu salud auditiva con un enfoque
            personalizado y profesional. Descubre nuestros servicios especializados.
          </p>
        </div>
        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              onLeerMas={() => setSelected(service)} 
            />
          ))}
        </div>
      </div>

      {/* Modal de "Leer más" mejorado */}
      {selected && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn"
          onClick={(e) => {
            // Cerrar modal si se hace clic en el backdrop
            if (e.target === e.currentTarget) {
              setSelected(null);
            }
          }}
        >
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl relative max-h-[90vh] overflow-hidden animate-scaleIn">
            {/* Header del modal con imagen */}
            <div className="relative">
              <img 
                src={selected.image} 
                alt={selected.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                aria-label="Cerrar modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white drop-shadow-lg">
                {selected.title}
              </h3>
            </div>
            
            {/* Contenido del modal */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                  {selected.fullText}
                </p>
              </div>
              
              {/* Botón de acción */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setSelected(null)}
                  className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Solicitar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}

/* --- Subcomponente de Tarjeta Mejorado --- */
function ServiceCard({ image, title, description, bullets, onLeerMas }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-teal-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 overflow-hidden flex flex-col group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 flex-1 leading-relaxed">
          {description}
        </p>
        
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