import { motion } from "framer-motion";

export default function AudiometryInfantil() {
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
        Audiometría Infantil
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white text-xl shadow-lg rounded-2xl p-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            La audiometría infantil es una prueba diseñada específicamente para
            evaluar la capacidad auditiva de los niños. Se realiza en un entorno
            adaptado y con métodos lúdicos que facilitan la colaboración del
            menor, empleando estímulos visuales y auditivos adecuados a su edad.
          </p>
          <p>
            Su objetivo es detectar de manera temprana posibles alteraciones
            auditivas, permitiendo intervenir a tiempo y garantizar el
            desarrollo adecuado del lenguaje y la comunicación en los niños.
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
            Métodos de Evaluación Infantil
          </h2>
          <ul className="list-disc text-xl list-inside space-y-1 text-gray-700">
            <li>Audiometría por refuerzo visual (niños 6 meses - 3 años)</li>
            <li>Juego condicionados para niños en edad preescolar</li>
            <li>Audiometría tonal y vocal adaptada a la edad</li>
            <li>Pruebas objetivas como Otoemisiones acústicas (OEA)</li>
            <li>Potenciales evocados auditivos de tronco cerebral (PEATC)</li>
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
            Sala de Audiometría
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-2">
              <img
                src="/instalaciones/cabina.webp"
                alt="Cabina de Audiometría Infantil"
                className="rounded-xl shadow-md w-full object-cover"
              />
              <p>
                <strong>Cabina de Audiometría </strong> - Adaptada con refuerzo visual.
              </p>
            </div>
            <div className="space-y-2">
              <img
                src="/instalaciones/cabina3aud.webp"
                alt="Audiometría con juegos"
                className="rounded-xl shadow-md w-full object-cover"
              />
              <p>
                <strong>Audiometría con juegos</strong> - Método lúdico para
                niños en edad preescolar.
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
              a 3 años. <em>Boletín de AELFA</em>, 1, 12–15. <a href="https://www.auditio.com/docs/pdf/aelfa-vra.pdf" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              García-Valdecasas Bernal, J., Cardenete Muñoz, G., & Zenker
              Castro, F. (2017). Guía de Práctica Clínica de Audiometría Tonal
              en población infantil. <em>Auditio</em>, 4(3), 74–87. <a href="https://journal.auditio.com/auditio/article/download/59/155/826" className="text-teal-500 hover:underline">leer más</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
