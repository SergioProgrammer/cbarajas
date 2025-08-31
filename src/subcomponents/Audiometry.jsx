import { motion } from "framer-motion";

export default function Audiometry() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <motion.h1
        className="text-4xl font-bold text-teal-500 mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        Audiometría
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 text-gray-700 leading-relaxed text-xl">
          <p>
            La audiometría es una prueba no invasiva que se realiza para
            evaluar la capacidad auditiva de una persona. Se lleva a cabo en
            una sala de audición controlada, en la que se utilizan auriculares
            y tonos de diferentes frecuencias y volúmenes para medir la
            capacidad de la persona de detectar, discriminar y comprender
            diferentes sonidos.
          </p>
          <p>
            Durante la prueba, el paciente debe indicar cuando escucha un
            sonido, lo que permite determinar la audición para cada
            frecuencia. La audiometría, además de medir la capacidad auditiva,
            permite establecer el tipo y grado de pérdida auditiva, lo que
            permite a los profesionales médicos diseñar planes de tratamiento
            personalizados.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">
            Tipos de Audiometría
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-xl">
            <li>Audiometría Tonal con fines clínicos o peritajes</li>
            <li>Audiometrías específicamente infantiles</li>
            <li>Audiometrías en población especial de difícil estudio</li>
            <li>Audiometrías para el ajuste de prótesis auditivas</li>
            <li>
              Audiometrías de verificación funcional de implantes óseos y
              cocleares
            </li>
            <li>Logoaudiometrías</li>
            <li>Pruebas de Habla en Ruido</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">
            Cabinas Audiométricas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700">
            <div className="space-y-2">
              <img
                src="/instalaciones/cabina.webp"
                alt="Cabina Audiométrica Doreen Kimura"
                className="rounded-xl shadow-md w-full object-cover"
              />
              <p>
                <strong>Cabina Audiométrica "Doreen Kimura"</strong> - Cabina 1
              </p>
            </div>
            <div className="space-y-2">
              <img
                src="/instalaciones/cabina2aud.webp"
                alt="Cabina 2 Audiometría"
                className="rounded-xl shadow-md w-full object-cover"
              />
              <p>
                <strong>Cabina Audiometría</strong> - Cabina 2
              </p>
            </div>
            <div className="space-y-2">
              <img
                src="/instalaciones/cabina3aud.webp"
                alt="Cabina 3 Audiometría"
                className="rounded-xl shadow-md w-full object-cover"
              />
              <p>
                <strong>Cabina Audiometría</strong> - Cabina 3
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-teal-500 mb-2">
            Referencias
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Zenker Castro, F. (2008). La caracterización de la sensibilidad
              auditiva mediante el refuerzo visual de la conducta en niños de 0
              a 3 años. <em>Boletín de AELFA</em>, 1, 12–15. <a href="https://www.researchgate.net/publication/256238069_La_caracterizacion_de_la_sensibilidad_auditiva_mediante_el_refuerzo_visual_de_la_conducta_en_ninos_de_0_a_3_anos" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Hochmuth, S., Brand, T., Zokoll, M. A., Castro, F. Z., Wardenga,
              N., & Kollmeier, B. (2012). A Spanish matrix sentence test for
              assessing speech reception thresholds in noise. <em>International
              Journal of Audiology</em>, 51(7), 536–544. <a href="https://www.tandfonline.com/doi/full/10.3109/14992027.2012.670731" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              García-Valdecasas Bernal, J., Cardenete Muñoz, G., & Zenker
              Castro, F. (2017). Guía de Práctica Clínica de Audiometría Tonal
              por Vía Aérea y Ósea con y sin Enmascaramiento. <em>Auditio</em>,
              4(3), 74–87. <a href="https://journal.auditio.com/auditio/article/view/59" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Barajas, J. J., Olaizola, F., Tapia, M. C., Alarcon, J. L., &
              Alaminos, D. (1981). Audiometric Study of the Neonate: Impedance
              Audiometry. Behavioural Responses and Brain Stem Audiometry.
              <em>International Journal of Audiology</em>, 20(1), 41–52. <a href="https://www.tandfonline.com/doi/abs/10.3109/00206098109072681" className="text-teal-500 hover:underline">leer más</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
