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

export default function PerdidaAuditiva() {
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
            Pérdida auditiva en Santa Cruz de Tenerife
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Valoración audiológica para detectar alteraciones de la audición,
            identificar su impacto en la comunicación y orientar la solución
            más adecuada en cada caso.
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
            src="/especialidades/perdida-audicion.webp"
            alt="Pérdida auditiva"
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
                La <strong className="font-semibold text-gray-900">pérdida auditiva</strong>{" "}
                puede afectar de forma progresiva a la comunicación, la vida
                social y la calidad de vida. En muchos casos, los primeros
                síntomas aparecen de manera gradual, por lo que no siempre se
                detectan de inmediato.
              </p>

              <div className="my-8 flex items-center gap-4 rounded-r-xl border-l-4 border-cyan-300 bg-cyan-50 p-6">
                <p className="text-base font-medium text-cyan-950">
                  En <strong>Clínica Barajas</strong>, en Santa Cruz de Tenerife,
                  realizamos <strong>revisión auditiva y valoración audiológica</strong>{" "}
                  para detectar alteraciones de la audición y orientar la
                  solución más adecuada en cada caso.
                </p>
              </div>
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
              ¿Qué es la pérdida auditiva?
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La pérdida auditiva es la disminución de la capacidad para oír
              sonidos o comprender el habla con normalidad. Puede presentarse de
              forma leve, moderada o severa y afectar a uno o ambos oídos.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              En ocasiones, la persona nota que oye menos; en otras, lo que
              percibe es que escucha pero le cuesta entender las conversaciones,
              especialmente en ambientes con ruido.
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
              Síntomas frecuentes de pérdida auditiva
            </h2>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 list-none text-lg font-medium text-gray-700 sm:grid-cols-2 sm:text-xl">
              {[
                "Dificultad para entender conversaciones",
                "Necesidad de subir mucho el volumen de la televisión",
                "Problemas para seguir conversaciones en ambientes con ruido",
                "Sensación de escuchar pero no comprender con claridad",
                "Pedir con frecuencia que repitan lo que se ha dicho",
                "Fatiga al mantener conversaciones durante mucho tiempo",
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
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Posibles causas de pérdida auditiva
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La pérdida auditiva puede deberse a diferentes causas. Algunas
              están relacionadas con la edad, otras con la exposición al ruido
              o con determinadas alteraciones del oído.
            </p>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 list-none text-lg font-medium text-gray-700 sm:grid-cols-2 sm:text-xl">
              {[
                "Envejecimiento",
                "Exposición prolongada a ruido",
                "Tapón de cerumen u otras alteraciones del conducto auditivo",
                "Antecedentes familiares",
                "Algunas patologías del oído",
                "Procesos que afecten a la transmisión o percepción del sonido",
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
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Tipos de pérdida auditiva
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Tras la valoración audiológica puede determinarse el tipo y grado
              de pérdida auditiva. Esta información es importante para orientar
              el tratamiento o la posible adaptación de audífonos.
            </p>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 list-none text-lg font-medium text-gray-700 sm:grid-cols-2 sm:text-xl">
              {[
                "Pérdida auditiva leve",
                "Pérdida auditiva moderada",
                "Pérdida auditiva severa",
                "Afectación de uno o ambos oídos",
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
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              ¿Cómo se detecta la pérdida auditiva?
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Para detectar la pérdida auditiva es necesario realizar una
              <strong className="font-semibold text-gray-900"> revisión auditiva</strong>{" "}
              con pruebas audiológicas que permitan evaluar la capacidad de oír
              y comprender sonidos.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Estas pruebas permiten establecer el tipo y el grado de pérdida de
              audición, y ayudan a decidir si puede ser recomendable una
              solución auditiva como la adaptación de audífonos.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="/revision-auditiva-tenerife"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700"
              >
                Más información sobre revisión auditiva en Tenerife
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
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
              ¿Cuándo conviene consultar?
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Es recomendable realizar una valoración auditiva cuando aparecen
              dificultades para escuchar o comprender conversaciones, cuando se
              percibe un cambio en la audición o cuando existe exposición
              frecuente a ruido.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La detección temprana ayuda a valorar opciones que mejoren la
              comunicación y la calidad de vida.
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
              Soluciones para la pérdida auditiva
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La solución adecuada depende del origen y del grado de pérdida
              auditiva. En algunos casos puede ser necesario seguimiento médico
              y, en otros, puede valorarse la adaptación de audífonos para
              mejorar la percepción del sonido y la comprensión del habla.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              La elección debe realizarse siempre tras una valoración
              individualizada.
            </p>

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
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Preguntas frecuentes sobre pérdida auditiva
            </h2>

            <div className="space-y-8 text-lg leading-relaxed text-gray-700 sm:text-xl">
              {[
                {
                  q: "¿Cómo saber si tengo pérdida auditiva?",
                  a: "Algunos signos frecuentes son la dificultad para entender conversaciones, la necesidad de subir el volumen de la televisión o la sensación de escuchar pero no comprender bien.",
                },
                {
                  q: "¿La pérdida auditiva puede aparecer de forma progresiva?",
                  a: "Sí. En muchos casos aparece gradualmente, por lo que puede pasar desapercibida al principio.",
                },
                {
                  q: "¿Es necesario hacerse una revisión auditiva?",
                  a: "Sí. La revisión auditiva permite confirmar si existe una pérdida de audición y determinar su tipo y grado.",
                },
                {
                  q: "¿La pérdida auditiva siempre requiere audífonos?",
                  a: "No siempre. La indicación depende de la causa y del grado de pérdida auditiva, por lo que es necesario valorar cada caso de forma individual.",
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
              Volver a la página principal de audífonos en Tenerife
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
