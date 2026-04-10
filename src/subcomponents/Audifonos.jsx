import { motion } from "framer-motion";

export default function AudifonosTenerife() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        duration: 0.6 
      } 
    },
  };

  const openReservationChat = () => {
    window.dispatchEvent(new CustomEvent("open-chat"));
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
            Audífonos en Santa Cruz de Tenerife
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Evaluación auditiva completa, adaptación personalizada y seguimiento orientado a mejorar la comprensión y la comodidad en el día a día.
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
            src="/instalaciones/cabina3.jpg"
            alt="Tipos de audífonos modernos"
            className="h-[300px] w-full rounded-[24px] object-cover sm:h-[400px] lg:h-[520px]"
          />
        </motion.div>
      </section>

      {/* Bloques de Contenido - Diseño limpio (Flat) sin sombras pesadas, mejor legibilidad */}
      <div className="space-y-10">
        
        {/* Intro */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
            <div className="space-y-6 text-gray-700 text-lg sm:text-xl leading-relaxed">
              <p>
                En <strong className="font-semibold text-gray-900">Clínica Barajas</strong> combinamos tecnología de vanguardia con un enfoque clínico orientado al diagnóstico y tratamiento de la pérdida auditiva.
              </p>

              {/* Elemento destacado sutil */}
              <div className="my-8 flex items-center gap-4 border-l-4 border-cyan-300 bg-cyan-50 p-6 rounded-r-xl">
                <p className="font-medium text-cyan-950 text-base">
                  Si estás buscando audífonos en Santa Cruz de Tenerife, es importante entender que la clave no está solo en el dispositivo, sino en cómo se evalúa la audición y cómo se adapta posteriormente a cada persona.
                </p>
              </div>

              <p>
                Nuestro proceso comienza con una valoración completa que permite conocer con precisión el tipo y grado de pérdida auditiva. A partir de este diagnóstico, seleccionamos y ajustamos la solución más adecuada, acompañando al paciente con un seguimiento continuo para optimizar los resultados en su vida diaria.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Evaluación */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Evaluación auditiva
            </h2>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              ¿Necesito audífonos?
            </h3>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              No todas las pérdidas auditivas requieren audífonos de forma inmediata, por lo que es importante valorar cada situación antes de tomar una decisión.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Para ello realizamos una evaluación auditiva completa que permite determinar con precisión el tipo y grado de pérdida de audición.
            </p>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 list-none text-gray-700 text-lg sm:text-xl font-medium">
              {[
                "Audiometría tonal",
                "Pruebas de comprensión del habla",
                "Evaluación auditiva personalizada",
                "Estudio del historial auditivo"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-none text-cyan-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4.0-5.5z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Después de esta evaluación se decide si realmente el paciente los necesita o no.
            </p>

            <div className="pt-4">
              <a
                href="/revision-auditiva-tenerife"
                className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 text-lg"
              >
                Más información
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Adaptación */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Adaptación de audífonos
            </h2>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              Adaptación personalizada de audífonos
            </h3>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Cada audífono se ajusta en función de las características auditivas individuales. La adaptación se realiza mediante programación precisa y ajustes progresivos orientados a mejorar la comprensión del habla y la comodidad en el uso cotidiano.
            </p>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 list-none text-gray-700 text-lg sm:text-xl font-medium">
              {[
                "Selección del audífono según perfil auditivo",
                "Programación personalizada",
                "Adaptación progresiva",
                "Seguimiento y revisiones periódicas"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-none text-cyan-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4.0-5.5z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="/adaptacion-de-audifonos"
                className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 text-lg"
              >
                Más información
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
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
              Profesionales en adaptación de audífonos
            </h2>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              Equipo especializado
            </h3>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              La adaptación de audífonos requiere experiencia y un seguimiento cercano a lo largo del tiempo.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              El paciente es atendido siempre por los mismos profesionales, que conocen su caso y se responsabilizan del proceso, acompañándole en todo momento para conseguir un resultado útil y estable en su día a día.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              En Clínica Barajas, este proceso es realizado de forma personalizada por Franz Zenker y Natalia Rodríguez, profesionales con amplia experiencia en adaptación de audífonos.
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
              Readaptación de audífonos
            </h2>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              Revisión y mejora de audífonos ya adaptados
            </h3>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              No siempre es necesario cambiar de audífonos para mejorar la audición. En muchos casos, una readaptación adecuada permite obtener mejores resultados con los dispositivos actuales.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              En Clínica Barajas revisamos el ajuste previo y analizamos si los audífonos están funcionando correctamente en función de la audición actual del paciente, aunque hayan sido adaptados en otro centro.
            </p>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 list-none text-gray-700 text-lg sm:text-xl font-medium">
              {[
                "Revisión del estado y funcionamiento del audífono",
                "Comprobación del ajuste existente",
                "Reprogramación según la audición actual",
                "Evaluación de la comprensión del habla",
                "Ajustes para mejorar el rendimiento en situaciones reales"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-none text-cyan-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4.0-5.5z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              El objetivo es que los audífonos funcionen bien en el día a día, optimizando su rendimiento y mejorando la experiencia de uso sin necesidad de sustituirlos, independientemente de dónde se hayan adquirido.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={openReservationChat}
                className="group inline-flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700"
              >
                Solicitar revisión
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </button>
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
              Reparación y mantenimiento de audífonos
            </h2>

            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              Servicio técnico y ajuste
            </h3>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Los audífonos requieren un mantenimiento periódico para asegurar su correcto funcionamiento y un buen rendimiento en el día a día.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              En Clínica Barajas revisamos el estado de los dispositivos y realizamos los ajustes necesarios para garantizar que funcionen correctamente. Trabajamos con la mayoría de marcas de audífonos, independientemente de dónde se hayan adaptado.
            </p>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 list-none text-gray-700 text-lg sm:text-xl font-medium">
              {[
                "Revisión y limpieza de audífonos",
                "Sustitución de filtros y componentes",
                "Comprobación del funcionamiento",
                "Ajustes y pequeñas reparaciones",
                "Asesoramiento sobre el uso y mantenimiento"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg className="h-5 w-5 flex-none text-cyan-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4.0-5.5z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              En caso necesario, gestionamos la reparación con el fabricante para asegurar un resultado adecuado.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={openReservationChat}
                className="group inline-flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700"
              >
                Solicitar revisión
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </button>
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
              Un enfoque diferente en la adaptación de audífonos
            </h2>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Decidir utilizar audífonos requiere tiempo y una buena orientación. No se trata solo de oír más, sino de comprender mejor en el día a día.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              En Clínica Barajas realizamos una adaptación progresiva, permitiendo al paciente probar los audífonos en su entorno habitual antes de tomar una decisión.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Esto ayuda a comprobar si realmente le aportan beneficio antes de realizar una inversión.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Además, no siempre es el momento de empezar. En algunos casos, lo más adecuado es hacer un seguimiento y valorar cuándo iniciar la adaptación.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              El objetivo es que, cuando el paciente dé el paso, lo haga con seguridad y con la confianza de que los va a usar y le van a resultar útiles.
            </p>
          </div>
        </motion.div>

        {/* Tipos */}
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

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Tipos de audífonos
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-2">
              {[
                "Retroauriculares",
                "Intrauriculares",
                "Recargables",
                "Discretos / Invisibles"
              ].map((type) => (
                <a
                  key={type}
                  href="/tipos-de-audifonos"
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center transition-colors duration-200 hover:border-blue-500 hover:bg-blue-50"
                >
                  <p className="font-semibold text-gray-900 text-sm sm:text-base transition-colors duration-200 hover:text-blue-700">
                    {type}
                  </p>
                </a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/tipos-de-audifonos"
                  className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 text-lg"
                >
                  Más información
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
              <img
                src="/audifonos/todos.jpg"
                alt="Modelos de audífonos"
                className="h-[260px] w-full object-cover sm:h-[340px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Pérdida auditiva */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Pérdida auditiva
            </h2>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              La pérdida auditiva puede afectar a la comunicación, la vida social y la calidad de vida. Detectarla a tiempo permite aplicar soluciones que mejoren la audición y la comprensión del habla.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Cuando una persona se plantea utilizar audífonos, lo más importante no es el dispositivo en sí, sino empezar a cuidar su audición.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Esto implica realizar revisiones periódicas y repetir la audiometría al menos una vez al año para ver cómo evoluciona.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              En Clínica Barajas realizamos un seguimiento continuo que permite detectar a tiempo cualquier cambio y tomar decisiones en el momento adecuado.
            </p>

            <div className="pt-2">
              <a
                href="/perdida-auditiva"
                className="group inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 text-lg"
              >
                Más información
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10 space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Preguntas frecuentes
            </h2>

            <div className="space-y-8 text-gray-700 text-lg sm:text-xl leading-relaxed">
              {[
                {
                  q: "¿Cuándo es recomendable utilizar audífonos?",
                  a: "Cuando existe dificultad para comprender conversaciones o se necesita subir mucho el volumen de televisión o teléfono."
                },
                {
                  q: "¿Es difícil adaptarse a los audífonos?",
                  a: "La adaptación suele ser progresiva. Con ajustes adecuados y seguimiento, la mayoría de los pacientes se acostumbran de forma natural."
                },
                {
                  q: "¿Es necesario realizar una prueba auditiva?",
                  a: "Sí. La evaluación auditiva permite seleccionar y ajustar el audífono de forma adecuada para cada caso. Y sobre todo saber si es realmente necesario."
                },
                {
                  q: "¿Dónde comprar audífonos en Tenerife?",
                  a: "Más que el lugar, lo importante es el proceso de evaluación y adaptación. Un mismo audífono puede ofrecer resultados muy distintos según cómo se ajuste."
                }
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-8 last:border-none last:pb-0">
                  <h3 className="font-semibold text-gray-950 text-xl mb-3">
                    {item.q}
                  </h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
