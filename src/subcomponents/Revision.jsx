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

export default function RevisionAuditiva() {
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
            Revisión auditiva en Santa Cruz de Tenerife
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Pruebas audiológicas no invasivas para evaluar la capacidad auditiva,
            detectar posibles pérdidas de audición y orientar el tratamiento más adecuado.
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
            src="/especialidades/pruebas-clinicas.webp"
            alt="Revisión auditiva"
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
                realizamos <strong className="font-semibold text-gray-900">revisiones auditivas en Santa Cruz de Tenerife</strong>{" "}
                mediante pruebas audiológicas que permiten evaluar la capacidad
                auditiva y detectar posibles pérdidas de audición.
              </p>

              <div className="my-8 flex items-center gap-4 rounded-r-xl border-l-4 border-cyan-300 bg-cyan-50 p-6">
                <p className="text-base font-medium text-cyan-950">
                  La revisión auditiva es un estudio no invasivo que analiza cómo
                  percibe una persona diferentes sonidos y frecuencias para orientar
                  el tratamiento o las soluciones auditivas más adecuadas.
                </p>
              </div>

              <p>
                Estos datos permiten identificar alteraciones auditivas de forma
                temprana y valorar si es necesario realizar seguimiento, tratamiento
                o adaptación de audífonos.
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
              ¿En qué consiste una revisión auditiva?
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Una revisión auditiva incluye diferentes pruebas audiológicas
              destinadas a evaluar la sensibilidad auditiva y la comprensión del
              habla. Estas pruebas se realizan en condiciones controladas dentro
              de cabinas audiométricas especializadas.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Durante la prueba, el paciente escucha sonidos de distintas
              frecuencias y volúmenes a través de auriculares y debe indicar
              cuándo los percibe. Esto permite elaborar un audiograma que refleja
              el nivel de audición para cada frecuencia.
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
              ¿Qué permite detectar una revisión auditiva?
            </h2>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 list-none text-lg font-medium text-gray-700 sm:grid-cols-2 sm:text-xl">
              {[
                "Pérdida auditiva leve, moderada o severa",
                "Dificultades para comprender conversaciones",
                "Alteraciones en la percepción de determinadas frecuencias",
                "Cambios en la capacidad auditiva con el paso del tiempo",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Detectar estos cambios de forma temprana permite valorar las
              opciones de tratamiento y mejorar la calidad de vida del paciente.
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
              Pruebas audiológicas que pueden realizarse
            </h2>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 list-none text-lg font-medium text-gray-700 sm:grid-cols-2 sm:text-xl">
              {[
                "Audiometría tonal",
                "Logoaudiometría o pruebas de comprensión del habla",
                "Pruebas de habla en ruido",
                "Evaluación audiológica personalizada",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Estas pruebas ayudan a determinar el tipo y grado de pérdida
              auditiva y a orientar posibles soluciones auditivas, como la
              adaptación de audífonos cuando sea necesario.
            </p>

            <div className="pt-4">
              <a
                href="/adaptacion-de-audifonos"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700"
              >
                Más información sobre adaptación de audífonos
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
              Instalaciones para evaluación auditiva
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  src: "/instalaciones/cabina.webp",
                  alt: "Cabina audiométrica Clínica Barajas",
                  title: "Cabina audiométrica",
                  text: "Evaluación auditiva",
                },
                {
                  src: "/instalaciones/cabina2aud.jpg",
                  alt: "Cabina de audiometría en Tenerife",
                  title: "Cabina audiometría",
                  text: "Pruebas auditivas",
                },
                {
                  src: "/instalaciones/cabina3aud.webp",
                  alt: "Instalaciones de audiología",
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
              ¿Cuándo puede ser recomendable realizar una revisión auditiva?
            </h2>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 list-none text-lg font-medium text-gray-700 sm:grid-cols-2 sm:text-xl">
              {[
                "Dificultad para entender conversaciones",
                "Necesidad de subir el volumen de televisión o teléfono",
                "Sensación de escuchar pero no comprender bien",
                "Exposición frecuente a ruido",
                "Antecedentes familiares de pérdida auditiva",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  {checkIcon}
                  {item}
                </li>
              ))}
            </ul>
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
              Preguntas frecuentes sobre revisión auditiva
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-gray-700 sm:text-xl">
              {[
                {
                  q: "¿Cuánto dura una revisión auditiva?",
                  a: "La evaluación auditiva suele durar entre 30 y 45 minutos, dependiendo de las pruebas necesarias.",
                },
                {
                  q: "¿La revisión auditiva es dolorosa?",
                  a: "No. Se trata de pruebas no invasivas y completamente seguras.",
                },
                {
                  q: "¿Es necesario prepararse antes de la prueba?",
                  a: "No se requiere preparación especial. Simplemente acudir a la cita programada.",
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
          <div className="mx-auto max-w-4xl p-2">
            <a
              href="/audifonos-tenerife"
              className="group inline-flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700"
            >
              Volver a información sobre audífonos en Tenerife
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
