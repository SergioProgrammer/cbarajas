import { motion } from "framer-motion";

export default function Timpanometria() {
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
        Otoemisiones Acústicas
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-lg text-xl rounded-2xl p-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Las Emisiones Otoacústicas (EOA) son una prueba de diagnóstico no invasiva que mide la actividad acústica generada por el oído interno en respuesta a un estímulo sonoro. Se realiza colocando un pequeño altavoz en el oído del paciente y registrando la respuesta que se produce en el oído interno con un micrófono colocado en el canal auditivo externo. Estas emisiones son producidas por las células ciliadas externas del oído interno y son una medida de su capacidad para detectar y procesar los sonidos. Las EOA son una herramienta útil en el diagnóstico de la pérdida auditiva y otros trastornos auditivos, ya que se pueden identificar problemas en diferentes áreas del oído interno. También son útiles para evaluar la eficacia de las intervenciones terapéuticas y para monitorear la progresión de los trastornos auditivos. Las Emisiones Otoacústicas son un procedimiento seguro y rápido que puede ser realizado en cualquier edad, desde recién nacidos hasta adultos.


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
            Tipos de Pruebas
          </h2>
          <ul className="list-disc list-inside space-y-1 text-xl text-gray-700">
            <li>Otoemisiones Otoacústicas Transitorias</li>
            <li>Productos de Distorsión
            </li>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-2">
              <img
                src="/instalaciones/cabina.webp"
                alt="Cabina de Audiometría Infantil"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
     
    </div>
  );
}
