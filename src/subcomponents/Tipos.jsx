import { motion } from "framer-motion";

export default function TiposDeAudifonos() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.6 },
    },
  };

  return (
    <div className="relative mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-8 sm:py-24">
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
            Tipos de audífonos en Santa Cruz de Tenerife
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Conozca los principales formatos de audífonos y qué factores se valoran para elegir la solución más adecuada en cada caso.
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
            src="/audifonos/todos2.png"
            alt="Tipos de audífonos"
            className="h-[300px] w-full rounded-[24px] object-cover sm:h-[400px] lg:h-[520px]"
          />
        </motion.div>
      </section>

      {/* Intro */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-4 text-gray-700 leading-relaxed text-xl">
          <p>
            Existen diferentes <strong>tipos de audífonos</strong> y la elección
            del modelo adecuado depende de varios factores, como el tipo y grado
            de pérdida auditiva, la anatomía del oído, el estilo de vida y las
            necesidades de comunicación de cada paciente.
          </p>
          <p>
            En <strong>Clínica Barajas</strong>, en Santa Cruz de Tenerife,
            realizamos una valoración audiológica completa para orientar la
            selección de la solución auditiva más adecuada en cada caso.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          <img
            src="/audifonos/Naida.webp"
            alt="Audífono retroauricular"
            className="h-40 w-full rounded-2xl border border-gray-200 object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          />
          <img
            src="/audifonos/virto.webp"
            alt="Audífono intrauricular"
            className="h-40 w-full rounded-2xl border border-gray-200 object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          />
          <img
            src="/audifonos/sky.webp"
            alt="Audífono discreto"
            className="h-40 w-full rounded-2xl border border-gray-200 object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          />
          <img
            src="/audifonos/audeo.webp"
            alt="Audífono con conectividad"
            className="h-40 w-full rounded-2xl border border-gray-200 object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </motion.div>

      {/* Por qué hay distintos tipos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">
            ¿Por qué existen distintos tipos de audífonos?
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            No todas las pérdidas auditivas son iguales. Algunas personas
            necesitan una amplificación mayor, otras priorizan la discreción,
            y en otros casos es importante mejorar la comprensión del habla en
            ambientes con ruido.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed">
            Por eso existen distintos formatos y prestaciones. La recomendación
            no debe basarse solo en la estética, sino en una evaluación
            audiológica y en el uso real que el paciente hará del audífono.
          </p>
        </div>
      </motion.div>

      {/* Retroauriculares */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-3">
          <div className="space-y-4 md:flex md:items-start md:gap-6 md:space-y-0">
            <img
              src="/audifonos/retroauricular.jpg"
              alt="Audífonos retroauriculares"
              className="h-56 w-full rounded-2xl border border-gray-200 object-cover shadow-sm md:h-64 md:w-5/12 md:shrink-0"
            />
            <div className="space-y-3 md:w-7/12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-950">
                Audífonos retroauriculares
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                Los audífonos retroauriculares se colocan detrás de la oreja y se
                conectan al oído mediante un tubo o un pequeño auricular. Son una
                de las opciones más utilizadas por su versatilidad y por su
                capacidad para adaptarse a distintos grados de pérdida auditiva.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1 text-xl text-gray-700 marker:text-cyan-500">
                <li>Adecuados para diferentes grados de pérdida auditiva</li>
                <li>Buena potencia y rendimiento</li>
                <li>Fáciles de manipular y mantener</li>
                <li>Disponibles en diferentes tamaños y prestaciones</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Intrauriculares */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-3">
          <div className="space-y-4 md:flex md:items-start md:gap-6 md:space-y-0">
            <img
              src="/audifonos/intrauricular.jpg"
              alt="Audífonos intrauriculares"
              className="h-56 w-full rounded-2xl border border-gray-200 object-cover shadow-sm md:h-64 md:w-5/12 md:shrink-0"
            />
            <div className="space-y-3 md:w-7/12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-950">
                Audífonos intrauriculares
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                Los audífonos intrauriculares se alojan parcial o totalmente dentro
                del oído. Son una opción más discreta y su indicación depende tanto
                del grado de pérdida auditiva como de la anatomía del conducto
                auditivo.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1 text-xl text-gray-700 marker:text-cyan-500">
                <li>Diseño más discreto</li>
                <li>Buena opción en determinados casos</li>
                <li>Adaptación personalizada según el oído</li>
                <li>Su elección depende de criterios audiológicos y anatómicos</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Invisibles */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-3">
          <div className="space-y-4 md:flex md:items-start md:gap-6 md:space-y-0">
            <img
              src="/audifonos/invisible.jpg"
              alt="Audífonos discretos"
              className="h-56 w-full rounded-2xl border border-gray-200 object-cover shadow-sm md:h-64 md:w-5/12 md:shrink-0"
            />
            <div className="space-y-3 md:w-7/12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-950">
                Audífonos discretos o invisibles
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                Algunas personas buscan soluciones lo más discretas posible. Existen
                audífonos muy pequeños e incluso modelos invisibles, aunque no
                siempre son la mejor opción para todos los perfiles auditivos.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                En estos casos, la decisión debe valorar no solo la estética, sino
                también la comodidad, la manipulación del dispositivo y la calidad
                de audición que puede ofrecer.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Recargables */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-3">
          <div className="space-y-4 md:flex md:items-start md:gap-6 md:space-y-0">
            <img
              src="/audifonos/recargable.jpg"
              alt="Audífonos recargables"
              className="h-56 w-full rounded-2xl border border-gray-200 object-cover shadow-sm md:h-64 md:w-5/12 md:shrink-0"
            />
            <div className="space-y-3 md:w-7/12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-950">
                Audífonos recargables
              </h2>
              <p className="text-gray-700 text-xl leading-relaxed">
                Los audífonos recargables permiten prescindir del cambio frecuente
                de pilas y ofrecen una mayor comodidad en el día a día. Son una
                opción cada vez más demandada por su facilidad de uso.
              </p>
              <ul className="list-disc list-inside space-y-1 pl-1 text-xl text-gray-700 marker:text-cyan-500">
                <li>Mayor comodidad de uso diario</li>
                <li>No requieren cambio continuo de pilas</li>
                <li>Prácticos para muchos pacientes</li>
                <li>Disponibles en distintos formatos</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conectividad */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">
            Audífonos con conectividad
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Algunos audífonos incorporan conectividad con teléfono móvil,
            televisión u otros dispositivos. Estas funciones pueden mejorar la
            experiencia auditiva en determinadas situaciones y facilitar el uso
            cotidiano.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed">
            La elección de este tipo de soluciones depende de las necesidades
            tecnológicas de cada persona y de sus hábitos diarios.
          </p>
        </div>
      </motion.div>

      {/* Cómo elegir */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">
            ¿Cómo se elige el tipo de audífono más adecuado?
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            La elección del audífono debe hacerse tras una revisión auditiva y
            una valoración personalizada. Algunos de los aspectos que se tienen
            en cuenta son:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1 text-xl text-gray-700 marker:text-cyan-500">
            <li>Tipo y grado de pérdida auditiva</li>
            <li>Anatomía del oído</li>
            <li>Capacidad de manipulación del dispositivo</li>
            <li>Necesidades de comunicación en la vida diaria</li>
            <li>Preferencias de comodidad y discreción</li>
          </ul>
        </div>
      </motion.div>

      {/* Relación con adaptación */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">
            Valoración auditiva y adaptación personalizada
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Antes de elegir entre los diferentes tipos de audífonos, es
            importante realizar una valoración audiológica que permita orientar
            correctamente la adaptación.
          </p>
          <div className="flex flex-col gap-2 text-lg">
            <a
              href="/revision-auditiva-tenerife"
              className="font-semibold text-teal-600 transition-colors duration-200 hover:text-cyan-600 hover:underline"
            >
              Más información sobre revisión auditiva en Tenerife
            </a>
            <a
              href="/adaptacion-de-audifonos"
              className="font-semibold text-teal-600 transition-colors duration-200 hover:text-cyan-600 hover:underline"
            >
              Más información sobre adaptación de audífonos
            </a>
          </div>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950">
            Preguntas frecuentes sobre tipos de audífonos
          </h2>
          <div className="space-y-4 text-gray-700 text-xl leading-relaxed">
            <p>
              <strong>¿Cuál es el mejor tipo de audífono?</strong>
              <br />
              No existe un único modelo mejor para todos los casos. La elección
              depende del perfil auditivo, la anatomía del oído y las
              necesidades de cada persona.
            </p>
            <p>
              <strong>¿Los audífonos invisibles son adecuados para todo el mundo?</strong>
              <br />
              No siempre. Aunque son una opción discreta, su indicación depende
              del tipo de pérdida auditiva y de las características del oído.
            </p>
            <p>
              <strong>¿Qué diferencia hay entre un audífono retroauricular y uno intrauricular?</strong>
              <br />
              El retroauricular se coloca detrás de la oreja, mientras que el
              intrauricular se sitúa dentro del oído. Cada formato tiene
              indicaciones diferentes.
            </p>
            <p>
              <strong>¿Es necesario realizar una revisión auditiva antes de elegir audífonos?</strong>
              <br />
              Sí. La evaluación auditiva permite identificar la solución más
              adecuada y orientar correctamente la adaptación.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Enlace de vuelta */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <div className="p-2">
          <a
            href="/audifonos-tenerife"
            className="text-teal-600 hover:text-cyan-600 hover:underline text-lg"
          >
            Volver a la página principal de audífonos en Tenerife
          </a>
        </div>
      </motion.div>
    </div>
  );
}
