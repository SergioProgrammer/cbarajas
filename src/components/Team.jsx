import { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";

const doctors = [
  {
    name: "Dr. José Juan Barajas de Prat",
    role: "Especialista en Otorrinolaringología y Cirugía de Cabeza y Cuello",
    img: "/hero/barajas.webp",
    imageClassName: "object-[center_18%] scale-[1.18]",
    modalImageClassName: "object-[center_10%]",
    delay: 100,
    email: "clinicabarajas@gmail.com",
    images: ["/hero/Dr-Jose-Juan.webp", "/hero/Dr-Jose-Juan2.webp"],
    fullText: `El Dr. J.J. Barajas, médico otorrinolaringólogo, nace en Santa Cruz de Tenerife, obtiene la licenciatura en Medicina y Cirugía en la Universidad de Navarra. Continúa su formación en el Reino Unido donde obtenie el diploma en Laringología y Otología por el Real Colegio de Cirujanos de Londres.

Recibe la Beca Fulbrigth y acude a la Fundación de Otología de los Ángeles (EEUU) y a la Universidad de California (UCLA) donde investiga la fisiología de la cóclea. Becado en el Hospital Universitario de Odense en Dinamarca. Becado por la Fundación Alexander von Humboldt, acude al Departamento de Neurología de la Universidad de Ulm en Alemania, para llevar a cabo estudios de electrofisiología auditiva.

El reconocimiento internacional del Dr. Barajas queda constatado al formar parte de los principales comités ejecutivos de las asociaciones relacionadas con su especialidad, ocupando el cargo de presidente de la International Societies of Audiology y de la Association of Physicians in Audiology. Ha sido presidente y organizador del IV Congreso Internacional de Medicina Audiológica, el XX Congreso Internacional de Audiología, el XVIII Simposium Bianual de la Sociedad Internacional de Audiometrías Electrofisiológicas y el IX Congreso de la Federación Europea de Sociedades de Audiología. En el año 2017 recibe el premio International Award for Hearing otorgado por la Academia Americana de Audiología.

El Dr. Barajas ha fundamentado este prestigio en un trabajo de investigación de más de 30 años, con publicaciones en revistas de gran renombre, destacando especialmente en el área de la electrofisiología del sistema nervioso auditivo.`,
  },
  {
    name: "Dr. Ayoze Lemes Robayna",
    role: "Especialista en Otorrinolaringología y Cirugía de Cabeza y Cuello",
    img: "/hero/ayoze.jpg",
    imageClassName: "object-[center_42%] scale-[1.16]",
    modalImageClassName: "object-[center_31%]",
    modalImageClasses: ["object-[center_31%]", "object-[center_38%]"],
    delay: 300,
    images: ["/hero/ayoze.jpg", "/hero/ayoze2.jpg"],
    fullText: `El Dr. Ayoze Lemes Robayna es especialista en Otorrinolaringología y Cirugía de Cabeza y Cuello, nacido en Lanzarote. Se licenció en Medicina por la Universidad de Granada y completó su formación como especialista en el Hospital Universitario de Albacete. Actualmente trabaja como otorrinolaringólogo en el Hospital Universitario Nuestra Señora de Candelaria (Tenerife) y ha compaginado su actividad asistencial con la docencia como profesor externo en la Universidad de La Laguna. Cuenta con el título Fellow of the European Board of ORL-HNS (FEBEORL-HNS) y ha realizado estancias formativas en centros de referencia internacionales, como la University of Miami (Estados Unidos) o el Guy's and St Thomas' NHS Foundation Trust (Londres), ampliando su formación en rinología.

Sus áreas de especial interés incluyen la rinología y la otorrinolaringología pediátrica enfocado en el diagnóstico y tratamiento de la apnea obstructiva del sueño infantil, ofreciendo una atención médica actualizada y basada en la evidencia.`,
  },
  {
    name: "Dr. Francisco González Sammarco",
    role: "Especialista en Otorrinolaringología y Cirugía de Cabeza y Cuello",
    img: "/hero/francisco.jpg",
    imageClassName: "object-[center_28%] scale-[1.6]",
    modalImageClassName: "object-[center_58%]",
    modalImageClasses: ["object-[center_28%]", "object-[28%_45%] scale-[1.08]"],
    delay: 350,
    images: ["/hero/francisco.jpg", "/hero/francisco2.jpg"],
    fullText: `El Dr. Francisco González Sammarco es graduado en Medicina por la Universidad de La Laguna y especialista vía MIR en Otorrinolaringología por el Hospital Universitario Nuestra Señora de Candelaria.

Con una sólida trayectoria en el diagnóstico y tratamiento de patologías de oído, nariz y garganta, el Dr. González destaca por su alta especialización en Otología, Audiología y Otoneurología. Su práctica clínica se centra especialmente en la cirugía del oído medio, la patología de la cadena osicular y el tratamiento avanzado del colesteatoma.

Para ofrecer los tratamientos más innovadores, ha completado su formación en centros de prestigio internacional en Francia: la Clinique Causse (Béziers) con el Dr. Robert Vincent y el Institut Portmann (Burdeos) con el Dr. Didier Portmann, ambos referentes mundiales en cirugía otológica.

Actualmente, compagina su actividad asistencial en el Hospital Universitario Nuestra Señora de Candelaria con su práctica privada en la Clínica Barajas, manteniendo un compromiso constante con la excelencia y la actualización científica.`,
  },
  {
    name: "Franz Zenker Castro",
    role: "Técnico en Audiología y Audioprótesis, Psicólogo en Audición y Lenguaje",
    img: "/hero/franz.webp",
    imageClassName: "object-[center_22%] scale-[1.18]",
    delay: 400,
    email: "efas2009@gmail.com",
    images: ["/hero/Franz-Zenker-03.webp", "/hero/Franz-Zenker-04.webp"],
    fullText: `Franz Zenker es psicólogo especialista en audición y lenguaje y técnico superior en audiología protésica. Ha ejercido roles destacados como secretario científico en congresos internacionales de la Federación Europea de Audiología (IX EFAS) y de la Sociedad Internacional de Respuestas Evocadas (XVIII IERASG). Fue presidente del VI Congreso Nacional de la Asociación Española de Audiología y recibió becas de la Universidad de Nottingham y la Universidad de Helsinki para cursos avanzados en tinnitus y neurociencia cognitiva.

Zenker es co-fundador, junto al Dr. Barajas, del Spanish Journal of Audiology y editor asociado en revistas como Chilena de Fonoaudiología, AMCAOF (México) y AELFA (España). Su contribución en la Revista de AELFA 2012 le valió un accésit al mejor artículo científico. En 2013 recibió el Premio Nacional de Investigación sobre Discapacidad Auditiva FIAPAS. Del 2014 al 2020 fue presidente de la Asociación Española de Audiología (AEDA).

Con publicaciones en revistas internacionales como The International Journal of Audiology y The International Journal of Psychophysiology, también participó en la obra “The Auditory Steady-State Response: Generation, Recording & Clinical Application”, un manual de referencia en electrofisiología auditiva. Destaca su papel en la validación del Test de Habla en Ruido Matrix junto a la Carl von Ossietzky Universität de Oldenburg (Alemania).

Ha sido editor del manual de Trastornos del Procesamiento Auditivo Central, impulsando el Test de Dígitos Dicóticos, ampliamente usado en el diagnóstico de pacientes neurológicos. 

Además, es formador nacional e internacional en cursos de adaptación audioprotésica en niños y adultos, así como en la verificación de audífonos. Actualmente desarrolla su labor asistencial e investigadora en la Clínica Barajas, consolidándose como un referente en audiología y salud auditiva a nivel nacional e internacional.`,
  },
  {
    name: "Natalia Rodríguez Rodríguez",
    role: "Técnico en Audiología y Audioprótesis",
    img: "/hero/nati.JPG",
    imageClassName: "object-[center_35%] scale-[1.15]",
    delay: 450,
  },
  {
    name: "Romina Martín Hernandez",
    role: "Técnico en Cuidados Auxiliares de Enfermería",
    img: "/hero/romina.webp",
    imageClassName: "object-[center_22%] scale-[1.16]",
    delay: 550,
  },
  {
    name: "Beatriz González Rodríguez",
    role: "Auxiliar de Consulta",
    img: "/hero/beatriz.webp",
    imageClassName: "object-[center_20%] scale-[1.16]",
    delay: 650,
  },
];

export default function DoctorsSection() {
  const [selected, setSelected] = useState(null);
  const [mobileScrollIndex, setMobileScrollIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);
  const resetTimeoutRef = useRef(null);
  const featuredDoctors = doctors.filter((doctor) => doctor.fullText);
  const supportDoctors = doctors.filter((doctor) => !doctor.fullText);
  const mobileDoctors = [...doctors, ...doctors];
  const desktopRows = [
    doctors.filter((doctor) =>
      [
        "Dr. José Juan Barajas de Prat",
        "Dr. Ayoze Lemes Robayna",
        "Dr. Francisco González Sammarco",
      ].includes(doctor.name)
    ),
    doctors.filter((doctor) =>
      [
        "Franz Zenker Castro",
        "Natalia Rodríguez Rodríguez",
      ].includes(doctor.name)
    ),
    doctors.filter((doctor) =>
      [
        "Romina Martín Hernandez",
        "Beatriz González Rodríguez",
      ].includes(doctor.name)
    ),
  ];

  const renderCard = (doc, options = {}) => {
    const { mobile = false } = options;
    const sharedCardClassName =
      "bg-white rounded-3xl border border-teal-100 p-6 flex flex-col justify-between transition-all duration-500 transform group overflow-hidden text-left";
    const imageClassName = `w-full h-full object-cover border-4 border-white shadow-md transition-transform duration-500 group-hover:scale-105 ${
      doc.imageClassName ?? "object-top scale-110"
    }`;
    const layoutClassName = mobile
      ? "snap-center shrink-0 w-80"
      : "";

    if (doc.fullText) {
      return (
        <button
          key={doc.name}
          type="button"
          onClick={() => setSelected(doc)}
          className={`${sharedCardClassName} ${layoutClassName} cursor-pointer hover:scale-105`}
          data-aos="fade-up"
          data-aos-delay={doc.delay}
        >
          <div className="flex-grow">
            <div className="relative overflow-hidden rounded-full mx-auto w-44 h-44 mb-6 ring-4 ring-teal-500 group-hover:ring-teal-700 transition-all duration-500">
              <img src={doc.img} alt={doc.name} className={imageClassName} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-bold text-teal-800 mb-2 leading-tight">
              {doc.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              {doc.role}
            </p>
          </div>
        </button>
      );
    }

    return (
      <div
        key={doc.name}
        className={`${sharedCardClassName} ${layoutClassName} hover:scale-105`}
        data-aos="fade-up"
        data-aos-delay={doc.delay}
      >
        <div className="flex-grow">
          <div className="relative overflow-hidden rounded-full mx-auto w-44 h-44 mb-6 ring-4 ring-teal-500 group-hover:ring-teal-700 transition-all duration-500">
            <img src={doc.img} alt={doc.name} className={imageClassName} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <h3 className="text-2xl font-bold text-teal-800 mb-2 leading-tight">
            {doc.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            {doc.role}
          </p>
        </div>
      </div>
    );
  };
   
    
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

    const getScrollStep = () => {
      const firstCard = container.firstElementChild;
      if (!firstCard) return 0;

      const styles = window.getComputedStyle(container);
      const gap = parseFloat(styles.columnGap || styles.gap || "0");
      return firstCard.getBoundingClientRect().width + gap;
    };

    const interval = setInterval(() => {
      const step = getScrollStep();
      if (!step) return;

      const nextIndex = mobileScrollIndex + 1;
      container.scrollTo({
        left: nextIndex * step,
        behavior: "smooth",
      });
      setMobileScrollIndex(nextIndex);

      if (nextIndex === doctors.length) {
        if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "auto" });
          setMobileScrollIndex(0);
        }, 450);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [mobileScrollIndex, isVisible]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-teal-50 py-20 relative overflow-hidden">      
      <svg
        className="absolute bottom-0 left-0 w-full z-0 pointer-events-none opacity-100"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#14b8a6"
          fillOpacity="1"
          d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,224C672,235,768,213,864,192C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-20">
        {/* Título dinámico */}
        
          <h2 className="text-4xl sm:text-5xl font-extrabold text-teal-500 mb-20 sm:mb-24 leading-snug">
            Conoce a nuestro
            <br className="block sm:hidden" />
            <span className="bg-white px-3 pt-2 pb-1 rounded-xl text-teal-500 shadow-lg inline-block ml-2">
              Equipo
            </span>
          </h2>

        {/* Carrusel en mobile / grid en desktop */}
        <div className="space-y-8">
          <div
            ref={carouselRef}
            id="carousel-container"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 sm:hidden scrollbar-hide"
          >
            {mobileDoctors.map((doc, index) => (
              <div key={`${doc.name}-${index}`}>{renderCard(doc, { mobile: true })}</div>
            ))}
          </div>

          <div className="hidden sm:flex sm:flex-col sm:gap-6">
            {desktopRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid gap-6 mx-auto w-full ${
                  row.length === 3
                    ? "lg:grid-cols-3 lg:max-w-6xl"
                    : "lg:grid-cols-2 lg:max-w-4xl"
                }`}
              >
                {row.map((doc) => renderCard(doc))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal flotante */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl relative max-h-[95vh] overflow-hidden animate-scaleIn">
            {/* Botón de cierre */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-teal-700 transition-all shadow-lg z-20 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Carrusel de imágenes en el modal */}
            <div className="relative flex overflow-x-auto snap-x snap-mandatory">
              {(selected.images?.length ? selected.images : [selected.img]).map(
                (src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={selected.name}
                  className={`w-full h-64 sm:h-80 object-cover snap-center ${
                    selected.modalImageClasses?.[i] ??
                    (i === 0
                      ? selected.modalImageClassName ??
                        (selected.name === "Dr. José Juan Barajas de Prat"
                          ? "object-[center_10%]"
                          : "object-center")
                      : "object-center")
                  }`}
                />
              ))}
            </div>

            {/* Contenido del modal */}
            <div className="p-8 overflow-y-auto max-h-[calc(95vh-16rem)] sm:max-h-[calc(95vh-20rem)]">
              <h3 className="text-3xl font-bold text-teal-800 mb-2">
                {selected.name}
              </h3>
              {selected.email && (
                <p className="text-sm text-gray-500 mb-4 font-light">
                  {selected.email}
                </p>
              )}
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-base">
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
