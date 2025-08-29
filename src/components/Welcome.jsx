import { motion } from "framer-motion";

export default function HeroClinica() {
  return (
    <section className="relative overflow-hidden bg-teal-500 py-28">
      {/* Fondos decorativos */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-white/90 text-lg md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          <span className="hidden md:inline">
            En <span className="font-semibold text-white">Clínica Barajas</span>{" "}
            somos el centro de referencia en{" "}
            <span className="font-semibold text-white">
              otorrinolaringología
            </span>{" "}
            en Tenerife y las Islas Canarias. Nuestro equipo multidisciplinar de
            otorrinos y audiólogos combina una{" "}
            <span className="font-semibold text-white">
              experiencia centenaria
            </span>{" "}
            con tecnología de vanguardia para brindarte el mejor diagnóstico y
            tratamiento en:
          </span>
          <span className="md:hidden">
            <span className="font-semibold text-white">Clínica Barajas</span>,{" "}
            centro de referencia en{" "}
            <span className="font-semibold text-white">otorrinolaringología</span>{" "}
            en Canarias. Especialistas en:
          </span>
        </motion.p>

        {/* Lista de servicios */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } },
          }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 text-white font-semibold text-lg md:text-2xl mb-14"
        >
          {[
            "Sordera y pérdida auditiva",
            "Adaptación de audífonos",
            "Acúfenos y tinnitus",
            "Vértigo y equilibrio",
            "Patología de cuello, garganta, nariz y oído",
          ].map((servicio, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="px-4 md:px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm shadow-sm hover:bg-white/25 hover:scale-105 transition-transform"
            >
              {servicio}
            </motion.li>
          ))}
        </motion.ul>

        {/* Lema */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <span className="inline-block bg-white text-xl md:text-2xl text-teal-700 font-semibold px-6 md:px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition">
            Más de 100 años cuidando de ti
          </span>
        </motion.div>
      </div>
    </section>
  );
}