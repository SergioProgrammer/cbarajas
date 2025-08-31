import { motion } from "framer-motion";

export default function PotencialesEvocadosAuditivos() {
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
        Potenciales Evocados Auditivos
      </motion.h1>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4 text-gray-700 leading-relaxed text-xl">
          <p>
            Los Potenciales Evocados Auditivos (PEA) son una serie de pruebas
            electrofisiológicas que ayudan a evaluar la función auditiva del
            sistema nervioso central. Consisten en la colocación de electrodos
            en el cuero cabelludo, que registran la actividad eléctrica del
            cerebro en respuesta a estímulos auditivos. Los estímulos son
            sonidos administrados a través de auriculares, y se registran las
            respuestas cerebrales en forma de ondas eléctricas. Estas respuestas
            permiten determinar la capacidad auditiva del paciente en diferentes
            niveles de intensidad. Los PEA son especialmente útiles para evaluar
            la capacidad auditiva de bebés y niños de corta edad.
          </p>
          <p>
            Los PEA pueden detectar problemas en varias áreas del sistema
            auditivo, incluyendo el nervio auditivo y el tronco cerebral, y
            constituyen una prueba valiosa para determinar la necesidad de
            audífonos o implantes cocleares. Esta prueba es segura y no
            invasiva, proporcionando información crítica para el diagnóstico y
            tratamiento de la pérdida auditiva y otros trastornos auditivos.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="bg-white shadow-lg rounded-2xl p-6 space-y-3 text-xl text-gray-700">
          <ul className="list-disc list-inside space-y-1">
          <p>
            En Clínica Barajas, llevamos a cabo estos registros que nos
            permiten estudiar toda la vía auditiva. Algunos de los tipos de
            Potenciales Evocados Auditivos que realizamos incluyen:
          </p>
            <li>Potenciales Evocados Auditivos del Tronco Cerebral</li>
            <li>Potenciales Evocados Auditivos de Estado Estable</li>
            <li>Potenciales Evocados Auditivos de Latencia Media</li>
            <li>Potenciales Evocados Auditivos de Larga Latencia</li>
          </ul>
          <p>
            El Dr. Barajas, junto con distintos profesionales de la Clínica
            Barajas, ha publicado numerosos artículos científicos sobre este
            tipo de pruebas, siendo un referente internacional en estas
            técnicas. El reconocimiento internacional del Dr. Barajas y su
            equipo en el campo de los Potenciales Evocados Auditivos es notable,
            siendo solicitados para impartir cursos y conferencias en todo el
            mundo sobre este tema.
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
            Cabinas Audiométricas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700">
            <div className="space-y-2">
              <img
                src="/pruebas/potenciales-evocados.webp"
                alt="Cabina Audiométrica Doreen Kimura"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <img
                src="/pruebas/potenciales-evocados-auditivos.jpeg"
                alt="Cabina 2 Audiometría"
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
              Barajas, J. J. (1982). Evaluation of ipsilateral and contralateral
              brainstem auditory evoked potentials in multiple sclerosis
              patients. <em>Journal of the Neurological Sciences</em>, 54(1),
              69–78. <a href="https://linkinghub.elsevier.com/retrieve/pii/0022510X82902192" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Martin, L., Barajas, J. J., Fernandez, R., & Torres, E. (1988).
              Auditory event-related potentials in well-characterized groups of
              children. <em>Electroencephalography and Clinical
              Neurophysiology</em>, 71(5), 375–381. <a href="https://pubmed.ncbi.nlm.nih.gov/2457489/" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Barajas, J. J. (1991). The effects of age on human p3 latency.
              <em>Acta Oto-Laryngologica</em>, 111(S476), 157–160. <a href="https://www.tandfonline.com/doi/abs/10.3109/00016489109127272" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Mora, J. A., Expósito, M., Solís, C., & Barajas, J. J. (1990).
              Filter Effects and Low Stimulation Rate on the Middle-Latency
              Response in Newborns. <em>Audiology</em>, 29(6), 329–335. <a href="https://www.tandfonline.com/doi/abs/10.3109/00206099009072864" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Barajas, J. J. (1985). Brainstem Response Audiometry as Subjective
              and Objective Test for Neurological Diagnosis. <em>Scandinavian
              Audiology</em>, 14(1), 57–62. <a href="https://www.tandfonline.com/doi/abs/10.3109/01050398509045923" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Barajas, J. J., Olaizola, F., Tapia, M. C., Alarcon, J. L., &
              Alaminos, D. (1981). Audiometric Study of the Neonate: Impedance
              Audiometry. Behavioural Responses and Brain Stem Audiometry.
              <em>International Journal of Audiology</em>, 20(1), 41–52. <a href="https://www.tandfonline.com/doi/abs/10.3109/00206098109072681" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Zenker Castro, F., Estrada Alonso, M. M., Larumbe Zabala, E., &
              Barajas De Prat, J. J. (2013). Fiabilidad diagnóstica de los
              potenciales evocados auditivos del tronco cerebral en una muestra
              de pacientes en edad infantil. <em>Actas Del IX Congreso de La
              Asociación Española de Audiología</em>, 153–159. <a href="256238070_Fiabilidad_diagnostica_de_los_potenciales_evocados_auditivos_del_tronco_cerebral_en_una_muestra_de_pacientes_en_edad_infantil" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Zenker Castro, F., Fernández Belda, R., & Barajas de Prat, J. J.
              (2006). La adaptación audioprotésica pediátrica precoz a partir de
              registros de potenciales evocados auditivos de estado estable.
              <em>Acta Otorrinolaringológica Española</em>, 57(9), 388–393. <a href="https://www.sciencedirect.com/science/article/abs/pii/S0001651906787350?via%3Dihub" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Zenker Castro, F., & Barajas de Prat, J. J. (2008). Part A-The
              Role of Auditory Steady-State Responses in Fitting Hearing Aids.
              <em>Auditory Steady-State Response: Generation, Recording, and
              Clinical Applications</em>, 241–259. <a href="https://www.amazon.com/Auditory-Steady-State-Response-Generation-Application/dp/1597561614" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Zenker, F., & Barajas, J. J. (1999). Auditory P300 development
              from an active, passive and single-tone paradigms. <em>
                International Journal of Psychophysiology
              </em> (Vol. 33, Issue 2, pp. 99–111). <a href="https://www.sciencedirect.com/science/article/abs/pii/S0167876099000331?via%3Dihub" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Zenker Castro, F., Fernández Belda, R., & Barajas De Prat, J. J.
              (2006). Fitting hearing aids in newborns from auditory steady
              state responses. <em>Acta Otorrinolaringologica Espanola</em>,
              57(9). <a href="#" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Barajas del Prat, J. J., & Zenker, F. (2021). Potenciales Evocados
              Auditivos Continuos. <em>Auditio</em>, 1(2), 19–23. <a href="https://journal.auditio.com/auditio/article/view/10" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Delgado Hernández, J., Zenker Castro, F., & Barajas de Prat, J. J.
              (2003). Normalización de los Potenciales Evocados Auditivos del
              Tronco Cerebral I: Resultados en una muestra de adultos
              normoyentes. <em>Auditio: Revsita Electrónica de Audiología</em>,
              2(11), 13–18. <a href="https://journal.auditio.com/auditio/article/view/20" className="text-teal-500 hover:underline">leer más</a>
            </li>
            <li>
              Zenker Castro, F. (2008). La caracterización de la sensibilidad
              auditiva mediante pruebas electrofisiológicas en niños de 0 a 3
              años. <em>Boletín de AELFA</em>, 2, 9–11. <a href="256238172_La_caracterizacion_de_la_sensibilidad_auditiva_mediante_pruebas_electrofisiologicas_en_ninos_de_0_a_3_anos" className="text-teal-500 hover:underline">leer más</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
