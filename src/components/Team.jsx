import { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";

const doctors = [
  {
    name: "Dr. José Juan Barajas de Prat",
    role: "Médico Otorrinolaringólogo",
    img: "hero/barajas.webp",
    delay: 100,
    email: "barajas@clinicabarajas.com",
    images: ["hero/Dr-Jose-Juan.webp", "hero/Dr-Jose-Juan2.webp"],
    fullText: `El Dr. J.J. Barajas, médico otorrinolaringólogo, nace en Santa Cruz de Tenerife, obtiene la licenciatura en Medicina y Cirugía en la Universidad de Navarra. Continúa su formación en el Reino Unido donde obtenie el diploma en Laringología y Otología por el Real Colegio de Cirujanos de Londres.

Recibe la Beca Fulbrigth y acude a la Fundación de Otología de los Ángeles (EEUU) y a la Universidad de California (UCLA) donde investiga la fisiología de la cóclea. Becado en el Hospital Universitario de Odense en Dinamarca. Becado por la Fundación Alexander von Humboldt, acude al Departamento de Neurología de la Universidad de Ulm en Alemania, para llevar a cabo estudios de electrofisiología auditiva.

El reconocimiento internacional del Dr. Barajas queda constatado al formar parte de los principales comités ejecutivos de las asociaciones relacionadas con su especialidad, ocupando el cargo de presidente de la International Societies of Audiology y de la Association of Physicians in Audiology. Ha sido presidente y organizador del IV Congreso Internacional de Medicina Audiológica, el XX Congreso Internacional de Audiología, el XVIII Simposium Bianual de la Sociedad Internacional de Audiometrías Electrofisiológicas y el IX Congreso de la Federación Europea de Sociedades de Audiología. En el año 2017 recibe el premio International Award for Hearing otorgado por la Academia Americana de Audiología.

El Dr. Barajas ha fundamentado este prestigio en un trabajo de investigación de más de 30 años, con publicaciones en revistas de gran renombre, destacando especialmente en el área de la electrofisiología del sistema nervioso auditivo.`,
  },
  {
    name: "Franz Zenker Castro",
    role: "Técnico en Audiología y Audioprótesis, Psicólogo en Audición y Lenguaje",
    img: "hero/franz.webp",
    delay: 200,
    email: "zenker@clinicabarajas.com",
    images: ["hero/Franz-Zenker-03.webp", "hero/Franz-Zenker-04.webp"],
    fullText: `Franz Zenker es psicólogo especialista en audición y lenguaje y técnico superior en audiología protésica. Ha ejercido roles destacados como secretario científico en congresos internacionales de la Federación Europea de Audiología (IX EFAS) y de la Sociedad Internacional de Respuestas Evocadas (XVIII IERASG). Fue presidente del VI Congreso Nacional de la Asociación Española de Audiología y recibió becas de la Universidad de Nottingham y la Universidad de Helsinki para cursos avanzados en tinnitus y neurociencia cognitiva.

Zenker es co-fundador, junto al Dr. Barajas, del Spanish Journal of Audiology y editor asociado en revistas como Chilena de Fonoaudiología, AMCAOF (México) y AELFA (España). Su contribución en la Revista de AELFA 2012 le valió un accésit al mejor artículo científico. En 2013 recibió el Premio Nacional de Investigación sobre Discapacidad Auditiva FIAPAS. Del 2014 al 2020 fue presidente de la Asociación Española de Audiología (AEDA).

Con publicaciones en revistas internacionales como The International Journal of Audiology y The International Journal of Psychophysiology, también participó en la obra “The Auditory Steady-State Response: Generation, Recording & Clinical Application”, un manual de referencia en electrofisiología auditiva. Destaca su papel en la validación del Test de Habla en Ruido Matrix junto a la Carl von Ossietzky Universität de Oldenburg (Alemania).

Ha sido editor del manual de Trastornos del Procesamiento Auditivo Central, impulsando el Test de Dígitos Dicóticos, ampliamente usado en el diagnóstico de pacientes neurológicos. 

Además, es formador nacional e internacional en cursos de adaptación audioprotésica en niños y adultos, así como en la verificación de audífonos. Actualmente desarrolla su labor asistencial e investigadora en la Clínica Barajas, consolidándose como un referente en audiología y salud auditiva a nivel nacional e internacional.`,
  },
  {
    name: "Natalia Rodríguez Rodríguez",
    role: "Técnico en Audiología y Audioprótesis",
    img: "hero/nati.JPG",
    delay: 300,
  },
  {
    name: "Romina Martín Hernandez",
    role: "Técnico en Cuidados Auxiliares de Enfermería",
    img: "hero/romina.webp",
    delay: 400,
  },
  {
    name: "Beatriz González Rodríguez",
    role: "Auxiliar de Consulta",
    img: "hero/beatriz.webp",
    delay: 500,
  },
];

export default function DoctorsSection() {
  const [selected, setSelected] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selected]);

  // Detectar cuando el carrusel entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  // Autoscroll solo en mobile y cuando es visible
  useEffect(() => {
    const container = document.getElementById("carousel-container");
    if (!container || window.innerWidth >= 640 || !isVisible) return;

    const interval = setInterval(() => {
      const nextIndex = (scrollIndex + 1) % doctors.length;
      container.scrollTo({
        left: nextIndex * container.clientWidth * 0.9,
        behavior: "smooth",
      });
      setScrollIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollIndex, isVisible]);

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('instalaciones/cabina.webp')",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-36">
        {/* Título */}
        <h2 className="text-4xl md:text-5xl mb-28 font-extrabold text-teal-500 drop-shadow-lg">
          Nuestro equipo de
          <span className="bg-teal-500 px-3 py-1 rounded-xl text-white shadow-lg ml-3">
            profesionales
          </span>
        </h2>

        {/* Carrusel en mobile / grid en desktop */}
        <div
          ref={carouselRef}
          id="carousel-container"
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-8 scrollbar-hide"
        >
          {doctors.map((doc, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between transition-all duration-300 group snap-center shrink-0 w-80 sm:w-auto ${
                index < 2
                  ? "hover:scale-105 hover:shadow-2xl"
                  : "hover:shadow-2xl"
              }`}
              data-aos="fade-up"
              data-aos-delay={doc.delay}
            >
              <div>
                <div className="relative overflow-hidden rounded-full mx-auto w-44 h-44 mb-6">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className={`w-full h-full object-cover border-4 border-white shadow-md scale-110 transition-transform duration-500 
                      ${
                        doc.name === "Natalia Rodríguez Rodríguez"
                          ? "object-[center_35%]"
                          : "object-top"
                      }`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-teal-700 mb-3 leading-tight">
                  {doc.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  {doc.role}
                </p>
              </div>
              {index < 2 && (
                <button
                  onClick={() => setSelected(doc)}
                  className="mt-auto px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-xl shadow-md transition-all"
                >
                  Saber más
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal flotante */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-2xl relative max-h-[90vh] overflow-hidden animate-scaleIn">
            {/* Botón fijo para cerrar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-teal-700 transition-all shadow-lg z-20"
            >
              ✕
            </button>

            <div className="relative flex overflow-x-auto snap-x snap-mandatory">
              {selected.images?.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={selected.name}
                  className={`w-full h-64 object-cover snap-center
                    ${
                      selected.name === "Dr. José Juan Barajas de Prat" &&
                      i === 0
                        ? "object-[center_10%]" 
                        : "object-center"
                    }`}
                />
              ))}
            </div>

            {/* Contenido */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
              <h3 className="text-2xl font-bold text-teal-700 mb-2">
                {selected.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{selected.email}</p>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {selected.fullText}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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
