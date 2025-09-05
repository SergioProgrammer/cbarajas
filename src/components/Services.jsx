import React, { useEffect } from "react";

const services = [
  {
    title: "Otorrinolaringología",
    description:
      "Diagnóstico y Diagnóstico y tratamiento de las enfermedades de cuello, garganta, nariz y oído. En nuestro centro somos especialistas en enfermedades como otitis, amigdalitis o rinitis así como el diagnóstico médico de la sordera, hipoacusia o el vértigo y problemas de equilibrio.",
    image: "/especialidades/otorrinolaringologia.webp",
    link: "/otorrino",
  },
  {
    title: "Pérdida de Audición",
    description:
      "Estudio de la pérdida auditiva en adultos, niños y recién nacidos. La sordera en distinto grado puede complicar severamente la vida de quien la padece. En nuestro centro somos especialistas en el diagnostico, tratamiento y seguimiento de la audición a lo largo de toda la vida del paciente.",
    image: "/especialidades/perdida-audicion.webp",
    link: "/audiologia",
  },
  {
    title: "Audífonos",
    description:
      "Adaptación de audífonos con un enfoque profesional centrándonos en las necesidades clínicas de cada paciente. Nuestro compromiso con un diagnóstico preciso y un seguimiento clínico exhaustivo nos permite asegurar una adaptación óptima durante un largo periódo de tiempo. Contamos con especialistas capacitados en atender tanto a niños como a adultos.",
    image: "/especialidades/audifonos.webp",
    link: "/adaptacion-de-audifonos",
  },
  {
    title: "Vértigo",
    description:
      "Diagnóstico y rehabilitación de los trastornos del equilibrio, vértigos y mareos. Contamos con la tecnología para el diagnóstico única en Canarias. Estudiamos y tratamos patología vestibular como la enfermedad de Ménière, la neuritis vestibular, o el Vertigo Paroxistico Beningno.",
    image: "/especialidades/vertigo.webp",
    link: "/vertigo-trastornos",
  },
  {
    title: "Ruido en los Oídos",
    description:
      "Los ruidos en los oídos de manera ocasional o constante pueden ser motivo de malestar y causar problemas como imsonio o dificultades para oír. En nuestro centro estudiamos el ruido en los oídos, el acúfeno o tinnitus, mediante la tecnología más avanzada indicando el tratamiento mas apropiado para cada paciente.",
    image: "/especialidades/ruido-oido.webp",
    link: "/otorrino",
  },
  {
    title: "Niños y Recién Nacidos",
    description:
      "Abordamos tempranamente problemas en los oídos y la audición. Especializados en el tratamiento de infecciones de oído y en el diagnóstico de la pérdida auditiva en recién nacidos y niños pequeños. Abarcamos el estudio de las dificultades auditivas que pueden interferir en el desarrollo escolar y que pueden darse junto a otros trastornos del desarrollo.",
    image: "/especialidades/pruebas-clinicas.webp",
    link: "/deteccion-precoz-de-la-sordera",
  },
];

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll("[data-aos]");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, []);

  return (
    <>
      <style>
        {`
          [data-aos] {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.7s ease-out, transform 0.7s ease-out;
          }
          
          .card-container {
            perspective: 1000px;
            height: 300px;
            cursor: pointer;
          }
          
          .flip-card {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.6s ease-in-out;
          }
          
          @media (min-width: 768px) {
            .card-container:hover .flip-card {
              transform: rotateY(180deg);
            }
            
            .card-container:hover {
              transform: translateY(-5px);
            }
            
            .card-container {
              transition: transform 0.3s ease;
            }
          }
          
          .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1rem;
            overflow: hidden;
          }
          
          .card-front {
            background: white;
            display: flex;
            flex-direction: column;
          }
          
          .card-back {
            background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
            color: white;
            transform: rotateY(180deg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            text-align: center;
          }
          
          .service-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
          }
          
          .service-title {
            padding: 1.5rem;
            font-size: 1.125rem;
            font-weight: 600;
            color: #0f766e;
            text-align: center;
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .card-back h3 {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }
          
          .card-back p {
            font-size: 0.95rem;
            line-height: 1.6;
            opacity: 0.95;
          }
          
          @media (max-width: 767px) {
            .card-back {
              display: none;
            }
          }
          
          .card-container {
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            transition: box-shadow 0.3s ease;
          }
          
          .card-container:hover {
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          }
        `}
      </style>

      <section className="py-14 bg-[#14b8a6]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12 leading-snug">
            Nuestras
            <br className="block sm:hidden" />
            <span className="bg-white px-3 pt-2 pb-1 rounded-xl text-teal-500 shadow-lg inline-block ml-2">
              Especialidades
            </span>
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <a
                key={service.title}
                href={service.link}
                className="card-container block"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flip-card">
                  <div className="card-face card-front">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-img"
                    />
                    <h3 className="service-title">{service.title}</h3>
                  </div>

                  <div className="card-face card-back">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
