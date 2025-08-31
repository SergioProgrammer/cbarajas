import "aos/dist/aos.css";

const doctors = [
  {
    name: "Dr. José Juan Barajas de Prat",
    role: "Médico Otorrinolaringólogo",
    img: "hero/barajas.webp",
    delay: 100,
  },
  {
    name: "Franz Zenker Castro",
    role: "Psicólogo Especialista en Audición y Lenguaje y Audioprotesista",
    img: "hero/franz.webp",
    delay: 200,
  },
  {
    name: "Beatriz González Rodríguez",
    role: "Contabilidad",
    img: "hero/beatriz.webp",
    delay: 300,
  },
  {
    name: "Romina Martín Hernandez",
    role: "Técnico en Cuidados Auxiliares de Enfermería",
    img: "hero/romina.webp",
    delay: 400,
  },
];

export default function DoctorsSection() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30 pointer-events-none"
        style={{
          backgroundImage: "url('instalaciones/cabina.webp')",
          backgroundAttachment: "fixed"
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
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 scrollbar-hide">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 group snap-center shrink-0 w-80 sm:w-auto"
              data-aos="fade-up"
              data-aos-delay={doc.delay}
            >
              <div className="relative overflow-hidden rounded-full mx-auto w-44 h-44 mb-6">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top border-4 border-white shadow-md scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal-700 mb-3 leading-tight">
                {doc.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {doc.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}