const checkIcon = (
  <svg
    className="w-4 h-4 text-teal-600 mr-2 mt-1 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function AudiometryInfantil() {
  return (
    <section className="bg-white">
      <HeroInfantil />

      <main className="px-6 lg:px-16 py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <SimpleCard
            title="¿Cuándo realizar una prueba auditiva infantil?"
            text="La audición es la base del aprendizaje. Puede ser recomendable realizar una evaluación si el niño presenta alguno de estos signos."
            bullets={[
              "No responde a sonidos o a su nombre.",
              "Presenta un retraso en el desarrollo del lenguaje respecto a su edad.",
              "Necesita que repitan las palabras con frecuencia o parece distraído en clase.",
              "Tiene dificultad para entender cuando hay ruido ambiental.",
              "Sube mucho el volumen de dispositivos o televisión.",
            ]}
            extra="Una pérdida auditiva no detectada suele confundirse con falta de atención o dificultades de aprendizaje. Detectarla a tiempo evita el fracaso escolar y garantiza que el niño pueda seguir el ritmo de sus compañeros."
          />

          <InfoCard
            title="Evaluación audiológica infantil adaptada"
            image="/instalaciones/cabina3aud.webp"
            alt="prueba auditiva infantil en Tenerife"
            text="La pérdida auditiva en la infancia afecta directamente al aprendizaje. Realizamos pruebas no invasivas y adaptadas al desarrollo de cada niño."
            bullets={[
              "Observación de respuestas auditivas.",
              "Audiometría infantil lúdica (jugando).",
              "Pruebas de comprensión del habla.",
              "Evaluación del desarrollo auditivo y escolar.",
            ]}
          />

          <SimpleCard
            title="Ayudas y Subvenciones para Audífonos Infantiles en Canarias 2026"
            text="Sabemos que la inversión en la salud auditiva de un hijo es una prioridad, pero también un esfuerzo familiar. En Clínica Barajas le asesoramos sobre las ayudas económicas vigentes este año."
            bullets={[
              "Prestación ortoprotésica del SCS: en 2026 el Servicio Canario de Salud mantiene convenios para la cobertura de audífonos en menores (habitualmente hasta los 16 o 26 años según el caso), que pueden cubrir gran parte o la totalidad del dispositivo.",
              "Ayudas por discapacidad: si su hijo dispone de certificado de discapacidad, existen deducciones fiscales y ayudas específicas en la Comunidad Autónoma de Canarias.",
            ]}
            extra="¿Cómo solicitarlas? Nuestro equipo le orienta en la documentación, los requisitos y los pasos para tramitar cada ayuda."
          />

          <InfoCard
            title="Adaptación de audífonos en niños y bebés"
            image="/audifonos/bebe.jpg"
            alt="adaptación audífonos niños Clínica Barajas"
            text="Cada niño tiene necesidades diferentes según su entorno (casa, parque, colegio). Realizamos una adaptación personalizada considerando:"
            bullets={[
              "Tipo de pérdida auditiva.",
              "Necesidades educativas y de logopedia.",
              "Edad y desarrollo del lenguaje.",
            ]}
            extra="Los audífonos pediátricos están diseñados para ofrecer comodidad y, sobre todo, la máxima seguridad ante golpes o manipulación."
          />

          <SimpleCard
            title="Seguimiento y acompañamiento familiar"
            text="La adaptación en niños requiere un seguimiento periódico para ajustar los dispositivos a su crecimiento. En Clínica Barajas revisamos:"
            bullets={[
              "Ajustes según el crecimiento del canal auditivo.",
              "Evolución auditiva y progreso en el lenguaje escolar.",
              "Asesoramiento a las familias: resolvemos todas sus dudas con paciencia y cercanía.",
            ]}
          />

          <SimpleCard
            title="Tipos de audífonos infantiles (Seguridad y Resistencia)"
            text="Nuestros audífonos pediátricos están preparados para el ritmo de vida de un niño:"
            bullets={[
              "Sistemas de sujeción seguros para que no se caigan durante el juego.",
              "Materiales resistentes al sudor y la humedad.",
              "Conectividad con sistemas FM del colegio: permite que el niño oiga la voz del profesor directamente en su audífono.",
              "Colores divertidos para una mejor aceptación.",
            ]}
          >
            <a
              href="/adaptacion-de-audifonos"
              className="inline-flex items-center mt-5 font-semibold text-teal-700 hover:text-teal-800 hover:underline"
            >
              Más información sobre audífonos en Tenerife para adultos
            </a>
            <a
              href="/vertigo-trastornos"
              className="inline-flex items-center mt-3 ml-4 font-semibold text-teal-700 hover:text-teal-800 hover:underline"
            >
               
              Especialistas en equilibrio y nistagmo infantil
            </a>
          </SimpleCard>

          <FaqSection />
        </div>
      </main>

      <FinalCta />
    </section>
  );
}

function HeroInfantil() {
  return (
    <header className="relative overflow-hidden bg-teal-600 text-white px-6 lg:px-16 py-16 lg:py-20">
      <div className="absolute -top-20 -left-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-sm text-teal-100 mb-4">Audiología pediátrica</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Audífonos para niños en Tenerife | Audioprótesis infantil - Clínica Barajas
          </h1>
          <p className="text-teal-50 text-lg leading-relaxed mb-4">
            La detección y adaptación precoz de audífonos es fundamental para el desarrollo del lenguaje.
            Un diagnóstico a tiempo es la mejor herramienta para asegurar el éxito escolar y la integración
            social de su hijo.
          </p>
          <p className="text-teal-50 text-lg leading-relaxed mb-8">
            En Clínica Barajas realizamos evaluación audiológica infantil y adaptación de audífonos para
            niños en Tenerife, con protocolos específicos según la edad. Nuestro objetivo es facilitar el
            acceso al sonido y favorecer la comunicación en todas las etapas de su crecimiento.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+34922275488"
              className="bg-white text-teal-700 font-semibold px-5 py-3 rounded-lg shadow hover:bg-teal-50 transition"
            >
              Llámenos ahora: 922 275 488
            </a>
            <a
              href="/contacto"
              className="bg-teal-800/70 border border-teal-200 text-white font-semibold px-5 py-3 rounded-lg hover:bg-teal-800 transition"
            >
              Hablar con un especialista infantil
            </a>
          </div>
        </div>

        <div className="bg-white/10 rounded-2xl p-3 shadow-xl">
          <img
            src="/audifonos/nino.jpg"
            alt="audífonos para niños Tenerife en Clínica Barajas"
            className="w-full h-[360px] object-cover rounded-xl"
          />
        </div>
      </div>
    </header>
  );
}

function InfoCard({ title, text, bullets, image, alt, extra }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0">
        <img src={image} alt={alt} className="w-full h-full min-h-[240px] object-cover" />
        <div className="p-7 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">{title}</h2>
          <p className="text-gray-700 leading-relaxed">{text}</p>
          {bullets && <BulletList items={bullets} className="mt-5" />}
          {extra && <p className="text-gray-700 leading-relaxed mt-4">{extra}</p>}
        </div>
      </div>
    </article>
  );
}

function SimpleCard({ title, text, bullets, extra, children }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-slate-100 p-7 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>
      {bullets && <BulletList items={bullets} className="mt-5" />}
      {extra && <p className="text-gray-700 leading-relaxed mt-4">{extra}</p>}
      {children}
    </article>
  );
}

function FaqSection() {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-7 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">
        Preguntas frecuentes sobre audífonos infantiles
      </h2>
      <div className="space-y-4">
        <FaqItem
          question="¿A qué edad puede usar audífonos un niño?"
          answer="Desde los primeros meses de vida. Cuanto antes reciba el estímulo sonoro, mejor será su desarrollo cerebral y lingüístico."
        />
        <FaqItem
          question="¿Ayudarán los audífonos a que mejore en el colegio?"
          answer="Absolutamente. Al oír con nitidez, el niño reduce la fatiga cognitiva y puede concentrarse mejor en las lecciones y en la interacción con otros niños."
        />
      </div>
    </section>
  );
}

function FaqItem({ question, answer }) {
  return (
    <details className="group border border-slate-200 rounded-xl p-4">
      <summary className="list-none cursor-pointer flex items-center justify-between font-semibold text-teal-800">
        {question}
        <span className="text-teal-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
      </summary>
      <p className="text-gray-700 mt-3 leading-relaxed">{answer}</p>
    </details>
  );
}

function FinalCta() {
  return (
    <section className="px-6 lg:px-16 py-14 bg-teal-700">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
          Solicite una evaluación auditiva infantil
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Sabemos que la salud de su hijo es lo más importante. En Clínica Barajas le ofrecemos un
          entorno de confianza y profesionalidad para cuidar de su audición.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="tel:+34922275488"
            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-3 rounded-lg transition"
          >
            Llámenos ahora: 922 275 488
          </a>
          <a
            href="/contacto"
            className="bg-white border border-teal-700 text-teal-700 font-semibold px-5 py-3 rounded-lg hover:bg-teal-50 transition"
          >
            Hablar con un especialista
          </a>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items, className = "" }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-gray-700">
          {checkIcon}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
