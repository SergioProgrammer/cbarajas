import { motion } from "framer-motion";

const checkIcon = (
  <svg
    className="h-5 w-5 flex-none text-cyan-500"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4.0-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default function AdaptacionDeAudifonos() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="relative mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-8 sm:py-24">
      <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,560px)] lg:gap-16">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">
            Clínica Barajas
          </p>
          <h1 className="text-left text-5xl font-extrabold tracking-tight text-gray-950 sm:text-6xl md:text-7xl">
            Adaptación de audífonos en Santa Cruz de Tenerife
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Evaluación audiológica completa, selección del dispositivo adecuado
            y seguimiento clínico orientado a mejorar la comprensión y la
            comodidad en el día a día.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-2 shadow-xl shadow-gray-900/10 sm:p-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <img
            src="/especialidades/audifonos.webp"
            alt="Adaptación de audífonos"
            className="h-[300px] w-full rounded-[24px] object-cover sm:h-[400px] lg:h-[520px]"
          />
        </motion.div>
      </section>

      <div className="space-y-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 sm:text-xl">
              <p>
                En <strong className="font-semibold text-gray-900">Clínica Barajas</strong>{" "}
                realizamos <strong className="font-semibold text-gray-900">adaptación personalizada de audífonos en Santa Cruz de Tenerife</strong>,
                partiendo siempre de una evaluación audiológica completa. El
                objetivo es seleccionar la solución auditiva más adecuada según
                el tipo y grado de pérdida de audición, las necesidades de
                comunicación y las características de cada paciente.
              </p>

              <div className="my-8 flex items-center gap-4 rounded-r-xl border-l-4 border-cyan-300 bg-cyan-50 p-6">
                <p className="text-base font-medium text-cyan-950">
                  La adaptación de audífonos no consiste únicamente en entregar
                  un dispositivo. Es un proceso clínico progresivo que incluye
                  estudio auditivo, elección del audífono, programación
                  individual, ajuste y seguimiento posterior.
                </p>
              </div>

              <p>
                Este enfoque permite favorecer una mejor comprensión del habla y
                una mayor comodidad en la vida diaria, ajustando la solución a
                las necesidades reales de cada persona.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              ¿Qué es la adaptación de audífonos?
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La adaptación de audífonos es el proceso mediante el cual se
              ajusta una prótesis auditiva a las necesidades concretas de una
              persona. Para ello es necesario valorar la capacidad auditiva,
              identificar las dificultades de comprensión y configurar el
              audífono para que proporcione una amplificación adecuada y
              confortable.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Un audífono correctamente adaptado puede ayudar a percibir mejor
              los sonidos del entorno, facilitar las conversaciones y mejorar la
              comprensión del habla en diferentes situaciones cotidianas.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Evaluación auditiva previa a la adaptación
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Antes de adaptar un audífono es imprescindible realizar una
              valoración audiológica completa. Esta evaluación permite
              determinar el tipo y grado de pérdida auditiva y orientar la
              elección del dispositivo más adecuado.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La audiometría es una prueba no invasiva que se realiza para
              evaluar la capacidad auditiva de una persona. Se lleva a cabo en
              una sala de audición controlada, utilizando auriculares y tonos de
              diferentes frecuencias y volúmenes para medir la capacidad de
              detectar, discriminar y comprender distintos sonidos.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Durante la prueba, el paciente indica cuándo escucha un sonido, lo
              que permite determinar la audición para cada frecuencia. Además de
              medir la capacidad auditiva, estas pruebas ayudan a establecer el
              tipo y el grado de pérdida auditiva para diseñar un plan de
              adaptación personalizado.
            </p>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 list-none text-lg font-medium text-gray-700 sm:grid-cols-2 sm:text-xl">
              {[
                "Audiometría tonal",
                "Logoaudiometría o pruebas de comprensión del habla",
                "Pruebas de habla en ruido",
                "Valoración audiológica personalizada",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="/revision-auditiva-tenerife"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700"
              >
                Más información sobre revisión auditiva
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Pruebas audiológicas que pueden formar parte del estudio
            </h2>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 list-none text-lg font-medium text-gray-700 sm:grid-cols-2 sm:text-xl">
              {[
                "Audiometría tonal con fines clínicos",
                "Audiometrías infantiles",
                "Audiometrías en población especial de difícil estudio",
                "Audiometrías para el ajuste de prótesis auditivas",
                "Verificación funcional de implantes óseos y cocleares cuando esté indicado",
                "Logoaudiometrías",
                "Pruebas de habla en ruido",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              No todas las pruebas son necesarias en todos los casos. La
              selección depende de la edad del paciente, de sus síntomas y de
              los objetivos clínicos de la valoración.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              ¿Cómo es el proceso de adaptación de audífonos?
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700 sm:text-xl">
              <p>
                <strong className="font-semibold text-gray-900">1. Evaluación auditiva.</strong>{" "}
                Se realiza una valoración de la audición para conocer las
                necesidades específicas del paciente.
              </p>
              <p>
                <strong className="font-semibold text-gray-900">2. Selección del audífono.</strong>{" "}
                Se elige el modelo más adecuado en función del perfil auditivo,
                la anatomía del oído, el estilo de vida y los objetivos de
                escucha.
              </p>
              <p>
                <strong className="font-semibold text-gray-900">3. Programación y ajuste.</strong>{" "}
                El audífono se configura de forma personalizada para optimizar
                la audición y la comodidad.
              </p>
              <p>
                <strong className="font-semibold text-gray-900">4. Seguimiento.</strong>{" "}
                Se realizan revisiones y ajustes progresivos para facilitar la
                adaptación al uso diario.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Tipos de audífonos
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Existen diferentes tipos de audífonos y la elección depende de
              cada caso. Entre las opciones disponibles se encuentran los
              retroauriculares, intrauriculares, modelos recargables y
              soluciones discretas o invisibles.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La recomendación debe basarse en criterios audiológicos y en las
              necesidades funcionales del paciente, no solo en el tamaño o en la
              estética del dispositivo.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
              {[
                "Retroauriculares",
                "Intrauriculares",
                "Recargables",
                "Discretos / Invisibles",
              ].map((type) => (
                <a
                  key={type}
                  href="/tipos-de-audifonos"
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center transition-colors duration-200 hover:border-blue-500 hover:bg-blue-50"
                >
                  <p className="text-sm font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 sm:text-base">
                    {type}
                  </p>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/tipos-de-audifonos"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700"
              >
                Conozca los diferentes tipos de audífonos
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              ¿Cuándo puede ser recomendable una adaptación de audífonos?
            </h2>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 list-none text-lg font-medium text-gray-700 sm:grid-cols-2 sm:text-xl">
              {[
                "Dificultad para seguir conversaciones",
                "Necesidad de subir mucho el volumen de la televisión",
                "Problemas para entender el habla en ambientes con ruido",
                "Sensación de oír pero no comprender con claridad",
                "Fatiga al mantener conversaciones durante mucho tiempo",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Ante estos síntomas, una valoración auditiva puede ayudar a
              detectar si existe una pérdida de audición y si la adaptación de
              audífonos puede resultar beneficiosa.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Evaluación en instalaciones especializadas
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La valoración auditiva y el proceso de adaptación se apoyan en
              instalaciones preparadas para realizar pruebas en condiciones
              controladas, lo que permite obtener información fiable para
              ajustar el tratamiento auditivo.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  src: "/instalaciones/cabina.webp",
                  alt: "Cabina audiométrica en Clínica Barajas",
                  title: "Cabina Audiométrica",
                  text: "Evaluación auditiva especializada",
                },
                {
                  src: "/instalaciones/cabina2aud.jpg",
                  alt: "Cabina de audiometría en Santa Cruz de Tenerife",
                  title: "Cabina Audiometría",
                  text: "Pruebas auditivas",
                },
                {
                  src: "/instalaciones/cabina3aud.webp",
                  alt: "Instalaciones de audiología en Clínica Barajas",
                  title: "Instalaciones de audiología",
                  text: "Clínica Barajas",
                },
              ].map((item) => (
                <div
                  key={item.src}
                  className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-56 w-full object-cover"
                  />
                  <div className="space-y-1 p-5 text-gray-700">
                    <p className="text-base font-semibold text-gray-950">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Seguimiento y ajustes posteriores
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La adaptación de audífonos suele requerir un periodo de ajuste
              progresivo. Durante este tiempo pueden realizarse revisiones para
              modificar parámetros, resolver dudas y comprobar la evolución del
              paciente en situaciones reales de escucha.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              El seguimiento profesional es una parte importante del proceso,
              especialmente al inicio, para favorecer una experiencia auditiva
              más natural y cómoda.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Preguntas frecuentes sobre la adaptación de audífonos
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-gray-700 sm:text-xl">
              {[
                {
                  q: "¿Es difícil acostumbrarse a los audífonos?",
                  a: "El proceso de adaptación suele requerir un periodo de ajuste progresivo. Con seguimiento y revisiones, la mayoría de los pacientes consigue adaptarse adecuadamente.",
                },
                {
                  q: "¿Los audífonos mejoran la comprensión del habla?",
                  a: "Los audífonos modernos amplifican los sonidos y pueden mejorar la comprensión cuando están correctamente ajustados a las necesidades de cada persona.",
                },
                {
                  q: "¿Cuánto dura una prueba auditiva?",
                  a: "Una evaluación audiológica suele durar entre 30 y 45 minutos, aunque puede variar según el tipo de estudio necesario.",
                },
                {
                  q: "¿Los audífonos actuales son visibles?",
                  a: "Existen modelos muy pequeños e incluso soluciones discretas o invisibles, aunque la elección debe basarse también en el perfil auditivo y no solo en la estética.",
                },
                {
                  q: "¿Es necesaria una revisión previa antes de adaptar un audífono?",
                  a: "Sí. La valoración auditiva previa permite determinar qué solución es la más adecuada y cómo debe configurarse el dispositivo.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="border-b border-gray-100 pb-8 last:border-none last:pb-0"
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-950">
                    {item.q}
                  </h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Referencias
            </h2>

            <ul className="space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              <li>
                Zenker Castro, F. (2008). La caracterización de la sensibilidad
                auditiva mediante el refuerzo visual de la conducta en niños de
                0 a 3 años. <em>Boletín de AELFA</em>, 1, 12-15.{" "}
                <a
                  href="https://www.researchgate.net/publication/256238069_La_caracterizacion_de_la_sensibilidad_auditiva_mediante_el_refuerzo_visual_de_la_conducta_en_ninos_de_0_a_3_anos"
                  className="font-semibold text-teal-600 hover:text-teal-700"
                >
                  leer más
                </a>
              </li>
              <li>
                Hochmuth, S., Brand, T., Zokoll, M. A., Castro, F. Z., Wardenga,
                N., & Kollmeier, B. (2012). A Spanish matrix sentence test for
                assessing speech reception thresholds in noise.{" "}
                <em>International Journal of Audiology</em>, 51(7), 536-544.{" "}
                <a
                  href="https://www.tandfonline.com/doi/full/10.3109/14992027.2012.670731"
                  className="font-semibold text-teal-600 hover:text-teal-700"
                >
                  leer más
                </a>
              </li>
              <li>
                García-Valdecasas Bernal, J., Cardenete Muñoz, G., & Zenker
                Castro, F. (2017). Guía de Práctica Clínica de Audiometría Tonal
                por Vía Aérea y Ósea con y sin Enmascaramiento. <em>Auditio</em>,
                4(3), 74-87.{" "}
                <a
                  href="https://journal.auditio.com/auditio/article/view/59"
                  className="font-semibold text-teal-600 hover:text-teal-700"
                >
                  leer más
                </a>
              </li>
              <li>
                Barajas, J. J., Olaizola, F., Tapia, M. C., Alarcon, J. L., &
                Alaminos, D. (1981). Audiometric Study of the Neonate: Impedance
                Audiometry. Behavioural Responses and Brain Stem Audiometry.{" "}
                <em>International Journal of Audiology</em>, 20(1), 41-52.{" "}
                <a
                  href="https://www.tandfonline.com/doi/abs/10.3109/00206098109072681"
                  className="font-semibold text-teal-600 hover:text-teal-700"
                >
                  leer más
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="/audifonos-tenerife"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700"
              >
                Volver a la página principal de audífonos en Tenerife
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
