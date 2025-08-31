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
        Timpanometría
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-lg text-xl rounded-2xl p-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            La impedanciometría es un examen que se utiliza para evaluar la
            función del oído medio. Consiste en la medición de la impedancia
            acústica de la membrana timpánica, así como de la movilidad de los
            huesecillos del oído medio. Esta prueba se lleva a cabo colocando
            una sonda en el conducto auditivo externo, que luego transfiere
            tonos y patrones acústicos específicos al oído medio, mientras
            registra la respuesta de la membrana timpánica.
          </p>
          <p>
            La prueba de impedanciometría también se utiliza a menudo con
            estudios audiométricos para evaluar la pérdida auditiva y
            determinar la posible causa de la misma. Además, esta prueba es útil
            para determinar la presencia de anomalías congénitas en el oído. Es
            un procedimiento indoloro y no invasivo que puede ayudar a los
            profesionales médicos a detectar, diagnosticar y tratar problemas de
            audición y equilibrio.
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
            <li>Reflejos Estapediales</li>
            <li>Timpanometrías de Banda Ancha</li>
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
              Barajas de Prat, J. J., & Olaizola, F. (1979). Parámetros del
              reflejo estapedial. <em>Acta Otorrinolaringol Esp</em>, 30,
              103–115.
            </li>
            <li>
              Barajas de Prat, J. J., Olaizola, F., Tapia, M. C., & Alaminos, D.
              (1979). Evaluation of ipsilateral and contralateral brainstem
              auditory evoked potentials in multiple sclerosis patients.
              <em>Acta Otorrinolaringol Esp</em>, 30, 215–229.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
