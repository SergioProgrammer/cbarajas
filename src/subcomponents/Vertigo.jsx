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

const diagnosisTests = [
  "Videonistagmografía (VNG)",
  "vHIT (reflejo vestíbulo-ocular)",
  "Pruebas posicionales",
  "Posturografía",
  "VEMPs",
];

const differentiationPoints = [
  "Evaluación completa y orientada al diagnóstico desde el inicio",
  "Tratamiento inmediato cuando es posible",
  "Rehabilitación vestibular personalizada",
  "Tecnología diagnóstica avanzada",
  "Seguimiento clínico estructurado",
];

const treatmentOptions = [
  "Maniobras de reposicionamiento vestibular (VPPB)",
  "Tratamiento médico individualizado (cuando está indicado)",
  "Rehabilitación vestibular",
];

const virtualRealityBenefits = [
  "Entrenar el equilibrio en entornos controlados",
  "Adaptar progresivamente la dificultad según el paciente",
  "Trabajar la estabilidad visual y postural de forma conjunta",
  "Mejorar la recuperación en pacientes con mareo persistente",
];

const rehabilitationGoals = [
  "Reducir el mareo",
  "Mejorar la estabilidad",
  "Recuperar la seguridad al caminar",
  "Evitar recaídas",
];

const patientProfile = [
  "Llevan tiempo con mareo sin diagnóstico claro",
  "Han probado tratamientos sin mejoría",
  "Sienten inseguridad al caminar",
  "Presentan vértigo al cambiar de posición",
  "Quieren una evaluación completa y definitiva",
];

export default function VertigoTrastornos() {
  return (
    <section id="vertigo-trastornos" className="bg-white">
      <HeroSection />

      <main className="px-6 lg:px-16 py-14 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-8">
          <TextCard
            title="¿Siente que vive con mareo constante y no sabe por qué?"
            paragraphs={[
              "Muchos pacientes pasan meses, incluso años, con sensación de inestabilidad, inseguridad al caminar o episodios de vértigo sin un diagnóstico claro.",
              "Han consultado, han tomado medicación, pero el problema persiste.",
              "Esto ocurre porque el vértigo no es una enfermedad, sino un síntoma. Y sin un diagnóstico preciso, no hay tratamiento eficaz.",
            ]}
          />

          <TextCard
            title="Un enfoque diferente: diagnóstico + tratamiento + rehabilitación"
            paragraphs={[
              "En Clínica Barajas abordamos el vértigo de forma integral en un único centro.",
              "Esto evita pruebas innecesarias, retrasos y tratamientos ineficaces.",
            ]}
            bullets={differentiationPoints}
          />

          <FeatureImageCard
            title="Qué es el vértigo"
            image="/pruebas/videonista.webp"
            alt="Estudio del sistema vestibular para pacientes con vértigo"
            paragraphs={[
              "El vértigo es una sensación de movimiento o giro del entorno, habitualmente causada por alteraciones del sistema vestibular del oído interno.",
              "Puede aparecer de forma brusca o persistente y afectar de forma significativa a la calidad de vida.",
            ]}
          />

          <FeatureImageCard
            title="Diagnóstico avanzado del vértigo"
            image="/pruebas/pruebas.webp"
            alt="Tecnología diagnóstica avanzada para el vértigo en Clínica Barajas"
            paragraphs={[
              "El paso más importante es identificar la causa.",
              "Realizamos un estudio vestibular completo que permite analizar cómo funciona el sistema del equilibrio y detectar alteraciones con precisión.",
              "El resultado es un diagnóstico claro y un plan de tratamiento desde la primera visita.",
            ]}
            bullets={diagnosisTests}
          />

          <TreatmentSection />

          <FeatureImageCard
            title="La causa más frecuente: vértigo posicional"
            image="/pruebas/video-head.webp"
            alt="Tratamiento del vértigo posicional mediante maniobras en consulta"
            paragraphs={[
              "El vértigo que aparece al tumbarse o girar la cabeza suele deberse al VPPB.",
              "Este tipo de vértigo puede tratarse en consulta mediante maniobras específicas, como la maniobra de Epley u otras técnicas, con alta tasa de éxito.",
            ]}
          />

          <RehabilitationSection />

          <TextCard
            title="¿Para quién está indicado este estudio?"
            paragraphs={[
              "Este enfoque está especialmente indicado para pacientes que buscan una evaluación completa del origen de su mareo o inestabilidad.",
            ]}
            bullets={patientProfile}
          />

          <TextCard
            title="Centro de referencia en vértigo en Tenerife"
            paragraphs={[
              "En Clínica Barajas combinamos experiencia clínica, tecnología avanzada y un enfoque integral del paciente.",
              "Atendemos a pacientes de toda Canarias que buscan una solución real a su problema de equilibrio.",
            ]}
          />

          <FaqSection />
        </div>
      </main>

      <FinalCta />
    </section>
  );
}

function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-teal-600 text-white px-6 lg:px-16 py-16 lg:py-20">
      <div className="absolute -top-20 -left-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-16 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-sm text-teal-100 mb-4">
            Instituto del Vértigo · Clínica Barajas
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Especialistas en vértigo en Tenerife: diagnóstico preciso y abordaje integral
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-teal-50">
            <p>
              Si sufre vértigo, mareo o inestabilidad, el problema no es el síntoma, sino encontrar su causa.
            </p>
            <p>
              En Clínica Barajas realizamos un estudio completo del sistema vestibular para identificar con
              precisión el origen del vértigo y aplicar un tratamiento desde la primera visita.
            </p>
            <div className="pt-2 text-white font-semibold">
              <p>No tratamos mareos.</p>
              <p>Tratamos la causa.</p>
            </div>
          </div>

          <div className="mt-8 inline-flex flex-col gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm">
            <p className="font-semibold text-white">
              Centro especializado en diagnóstico y rehabilitación vestibular en Canarias
            </p>
            <p className="text-sm text-teal-50">
              Tecnología avanzada · Evaluación completa · Seguimiento clínico
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contacto"
              className="bg-white text-teal-700 font-semibold px-5 py-3 rounded-lg shadow hover:bg-teal-50 transition"
            >
              Solicitar cita ahora
            </a>
            <a
              href="tel:+34922275488"
              className="bg-teal-900/60 border border-teal-200 text-white font-semibold px-5 py-3 rounded-lg hover:bg-teal-900 transition"
            >
              Hablar con un especialista
            </a>
          </div>
        </div>

        <div className="bg-white/10 rounded-3xl p-3 shadow-2xl">
          <img
            src="/instalaciones/laboratorio-vestibular.jpg"
            alt="Unidad especializada en diagnóstico y rehabilitación vestibular"
            className="w-full h-[420px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </header>
  );
}

function TextCard({ title, paragraphs, bullets }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-slate-100 p-7 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">{title}</h2>
      <div className="space-y-3 text-gray-700 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {bullets && <BulletList items={bullets} className="mt-5" />}
    </article>
  );
}

function FeatureImageCard({ title, paragraphs, bullets, image, alt }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0">
        <img src={image} alt={alt} className="w-full h-full min-h-[260px] object-cover" />
        <div className="p-7 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">{title}</h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {bullets && <BulletList items={bullets} className="mt-5" />}
        </div>
      </div>
    </article>
  );
}

function TreatmentSection() {
  return (
    <article className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-7 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">Tratamiento del vértigo</h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>El tratamiento del vértigo depende de la causa, no del síntoma.</p>
            <p>
              En muchos casos, el problema puede resolverse de forma inmediata o en pocas sesiones. En otros,
              es necesario un abordaje progresivo y personalizado.
            </p>
            <p>
              El objetivo no es solo eliminar el vértigo, sino recuperar la estabilidad y evitar recaídas.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-teal-800 mb-3">Opciones de tratamiento</h3>
            <BulletList items={treatmentOptions} />
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">
            En situaciones menos frecuentes, pueden ser necesarias otras opciones terapéuticas que se valoran
            de forma individual en función del diagnóstico.
          </p>
        </div>

        <img
          src="/pruebas/pruebas.webp"
          alt="Tratamiento personalizado del vértigo tras un diagnóstico vestibular preciso"
          className="w-full h-full min-h-[300px] object-cover"
        />
      </div>
    </article>
  );
}

function RehabilitationSection() {
  return (
    <section className="grid gap-6">
      <article className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
              Rehabilitación vestibular: recuperar el equilibrio
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Cuando el vértigo persiste, el tratamiento no es medicación, sino reentrenar el sistema del
                equilibrio.
              </p>
              <p>
                Diseñamos programas personalizados para que el cerebro se adapte y el paciente recupere
                estabilidad.
              </p>
              <p>
                En Clínica Barajas contamos con una sala específica de rehabilitación vestibular equipada con
                tecnología avanzada, incluyendo sistemas de realidad virtual para el entrenamiento del equilibrio.
              </p>
              <p>
                Esto permite trabajar el sistema vestibular de forma progresiva, controlada y adaptada a cada
                paciente.
              </p>
            </div>
          </div>

          <img
            src="/instalaciones/sala.webp"
            alt="Sala de rehabilitación vestibular con tecnología avanzada"
            className="w-full h-full min-h-[320px] object-cover"
          />
        </div>
      </article>

      <article className="bg-white rounded-2xl shadow-lg border border-slate-100 p-7 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4">
          Entrenamiento del equilibrio con realidad virtual
        </h3>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p>
            Utilizamos sistemas avanzados de rehabilitación vestibular que combinan estímulos visuales y
            posturales para entrenar el equilibrio en condiciones controladas.
          </p>
          <p>
            Esto permite reproducir situaciones reales, como movimiento, entornos complejos o inestabilidad, de
            forma segura, facilitando la adaptación del sistema nervioso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="text-lg font-semibold text-teal-800 mb-3">Qué nos permite</h4>
            <BulletList items={virtualRealityBenefits} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-teal-800 mb-3">Objetivos</h4>
            <BulletList items={rehabilitationGoals} />
          </div>
        </div>
      </article>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-7 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6">Preguntas frecuentes sobre el vértigo</h2>
      <div className="space-y-4">
        <FaqItem
          question="¿El vértigo siempre se trata con medicación?"
          answer="No. El tratamiento depende de la causa. En muchos casos son necesarias maniobras específicas o rehabilitación vestibular, no medicación."
        />
        <FaqItem
          question="¿Se puede obtener un diagnóstico desde la primera visita?"
          answer="Ese es el objetivo del estudio vestibular completo: identificar la causa con precisión y plantear un plan de tratamiento desde el inicio siempre que sea posible."
        />
        <FaqItem
          question="¿El vértigo posicional puede resolverse en consulta?"
          answer="Sí. El VPPB suele tratarse mediante maniobras de reposicionamiento vestibular, como la maniobra de Epley, con alta tasa de éxito."
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
        <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">Deje de convivir con el vértigo</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Si lleva tiempo con mareo, inestabilidad o episodios de vértigo, el siguiente paso no es probar otro
          tratamiento, sino obtener un diagnóstico preciso. En Clínica Barajas podemos ayudarle.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contacto"
            className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-5 py-3 rounded-lg transition"
          >
            Solicitar cita ahora
          </a>
          <a
            href="tel:+34922275488"
            className="bg-white border border-teal-700 text-teal-700 font-semibold px-5 py-3 rounded-lg hover:bg-teal-50 transition"
          >
            Llamar: 922 275 488
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
