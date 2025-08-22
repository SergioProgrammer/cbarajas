import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroClinica() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
    // cuando el section empieza en viewport hasta que sale por arriba
  });

  // La lista se va desvaneciendo y moviendo hacia abajo al hacer scroll
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 100]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-500 to-teal-600 py-28"
    >
      {/* Fondos decorativos */}
      <div className="absolute -top-16 -left-16 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-white/90 text-3xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
        >
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
        </motion.p>

        {/* Lista de servicios (desaparece con scroll) */}
        <motion.ul
          style={{ opacity, y }}
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 text-white font-semibold text-2xl mb-14"
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
              className="px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm shadow-sm hover:bg-white/25 hover:scale-105 transition-transform"
            >
              {servicio}
            </motion.li>
          ))}
        </motion.ul>

        {/* Lema */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center"
        >
          <span className="inline-block bg-white text-2xl text-teal-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition">
            Más de 100 años cuidando de ti
          </span>
        </motion.div>
      </div>
    </section>
  );
}
