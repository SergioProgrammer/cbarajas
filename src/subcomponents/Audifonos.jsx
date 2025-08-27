import { motion } from "framer-motion";

export default function Audifonos() {
  const audifonos = [
 {
   nombre: "Virto Paradise",
   imagen: "audifonos/virto.webp",
   descripcion: "De pequeño tamaño dentro del oído, ofrece conectividad universal y calidad sonora inigualable para mantenerse conectado con confianza.",
   caracteristicas: ["Invisible", "Sonido natural", "Cómodo todo el día"]
 },
 {
   nombre: "Sky Lumity",
   imagen: "audifonos/sky.webp", 
   descripcion: "Audífonos pediátricos, cuenta con una amplia gama de combinación de color para que los niños puedan aceptar su singularidad.",
   caracteristicas: ["Resistente", "Colores divertidos", "Seguro para niños"]
 },
 {
   nombre: "Naída Lumity",
   imagen: "audifonos/Naida.webp",
   descripcion: "Audífonos potentes, que ofrecen una solución robusta y fiable a quienes desean aprovechar todas las oportunidades.",
   caracteristicas: ["Máxima potencia", "Tecnología avanzada", "Durabilidad"]
 },
 {
   nombre: "Audeo Lumity",
   imagen: "audifonos/audeo.webp",
   descripcion: "La solución ideal para quienes desean un audífono discreto, con la tecnología más avanzada para pérdidas auditivas leves a severas.",
   caracteristicas: ["Versátil", "Conectividad", "Diseño moderno"]
 }
];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-teal-500 py-20">
        {/* Fondos decorativos */}
        <div className="absolute -top-16 -left-16 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenido */}
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Adaptación de Audífonos
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-white/90 text-xl leading-relaxed mb-8"
              >
                <span className="block md:hidden">
                  Franz Zenker, audiólogo en Clínica Barajas, es un referente nacional e internacional en el{" "}
                  <span className="font-semibold text-white">ajuste y selección de prótesis auditivas.</span>{" "}
                  Su trayectoria se respalda con la publicación de múltiples artículos científicos sobre la adaptación de audífonos en niños y adultos, 
                  lo que avala su prestigio y experiencia.
                </span>
                
                <span className="hidden md:block">
                  Franz Zenker, audiólogo en Clínica Barajas, es un referente nacional e internacional en el{" "}
                  <span className="font-semibold text-white">ajuste y selección de prótesis auditivas.</span>{" "}
                   Su trayectoria se respalda con la publicación de múltiples artículos científicos sobre la adaptación de audífonos en niños y adultos, 
                   lo que avala su prestigio y experiencia.
                </span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <span className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow-lg">
                  Asesoramiento especializado
                </span>
              </motion.div>
            </div>

            {/* Imagen de Franz */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="hero/franz.webp" 
                  alt="Franz - Experto Audiólogo de Clínica Barajas" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white font-semibold text-xl">Franz Zencker</h3>
                  <p className="text-white/90">Audiólogo Especialista</p>
                </div>
              </div>
              
              {/* Elemento decorativo */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Audífonos */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              Nuestros Audífonos de Última Generación
            </h2>
            <p className="text-teal-700 text-xl max-w-3xl mx-auto">
              Trabajamos con las mejores marcas para ofrecerte soluciones 
              auditivas personalizadas según tu estilo de vida y necesidades
            </p>
          </motion.div>

          {/* Grid de Audífonos */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {audifonos.map((audifono, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-64 bg-white">
                  <img 
                    src={audifono.imagen} 
                    alt={audifono.nombre}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-teal-700 mb-3">
                    {audifono.nombre}
                  </h3>
                  <p className="text-teal-700 mb-4 text-lg">
                    {audifono.descripcion}
                  </p>
                  
                  <div className="space-y-2">
                    {audifono.caracteristicas.map((caracteristica, j) => (
                      <div key={j} className="flex items-center text-base text-teal-700">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        {caracteristica}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para mejorar tu audición?
              </h3>
              <p className="text-teal-50 mb-8 text-lg">
                Agenda una consulta personalizada con Franz y descubre 
                qué audífono se adapta mejor a ti
              </p>
              <button className="bg-white text-teal-600 font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                Solicitar Consulta Gratuita
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}