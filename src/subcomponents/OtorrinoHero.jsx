import React, { useState } from "react";
import { Ear, Activity, Mic, Wind, ChevronDown, ChevronUp } from "lucide-react";

export default function OtorrinoHero() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const servicios = [
    {
      icon: <Ear className="w-10 h-10 text-teal-600" />,
      title: "Enfermedades del Oído",
      image: "/enfermedades/oido.webp",
      content: [
        { subtitle: "Otitis", desc: "Inflamación del oído causada por infecciones, alergias o limpieza excesiva. Síntomas: dolor, fiebre y pérdida de audición." },
        { subtitle: "Otitis media serosa", desc: "Acumulación de líquido en el oído medio por mala ventilación." },
        { subtitle: "Hipoacusia o pérdida de audición", desc: "Puede pasar desapercibida en silencio, pero afecta en ambientes ruidosos. Puede deberse a tapón de cera, enfermedades neurológicas o tumores." },
        { subtitle: "Sordera profunda o cofósis", desc: "Pérdida auditiva total. A veces requiere implante coclear." },
        { subtitle: "Acúfenos / Tinnitus", desc: "Ruidos en los oídos de múltiples causas." },
        { subtitle: "Otoesclerosis", desc: "Fijación del estribo que provoca sordera y mareos. Tratamiento quirúrgico." },
        { subtitle: "Vértigos y Trastornos del equilibrio", desc: "Sensación de giro o inestabilidad. Puede estar relacionado con enfermedad de Ménière o lesiones vestibulares." },
        { subtitle: "Colesteatoma", desc: "Lesión benigna que puede crecer y dañar estructuras del oído." },
        { subtitle: "Otros", desc: "Algiacusia (dolor al sonido), perforación timpánica, coloboma." }
      ]
    },
    {
      icon: <Wind className="w-10 h-10 text-teal-600" />,
      title: "Enfermedades de la Nariz",
      image: "/enfermedades/nariz.webp",
      content: [
        { subtitle: "Obstrucciones nasales y Congestión", desc: "Evaluación y tratamiento personalizado." },
        { subtitle: "Rinitis", desc: "Inflamación nasal causada por alergias o infecciones." },
        { subtitle: "Poliposis Nasal", desc: "Afecta respiración y olfato. Tratamiento avanzado." },
        { subtitle: "Hemorragias Nasales", desc: "Frecuentes en alérgicos. Se cauterizan con láser." },
        { subtitle: "Desviaciones del tabique nasal", desc: "Solucionadas con cirugía." },
        { subtitle: "Hipertrofia de Cornetes", desc: "Tratada con cirugía endoscópica o láser." },
        { subtitle: "Otros", desc: "Sinusitis aguda o crónica, traumatismos, roncopatía y apnea del sueño." }
      ]
    },
    {
      icon: <Activity className="w-10 h-10 text-teal-600" />,
      title: "Enfermedades de la Garganta",
      image: "/enfermedades/laringe.webp", 
      content: [
        { subtitle: "Amigdalitis", desc: "Frecuente en niños, debe diferenciarse de la bacteriana." },
        { subtitle: "Hipertrofia amigdalina", desc: "Provoca apnea del sueño." },
        { subtitle: "Amígdalas con tonsolitos", desc: "Restos de comida que producen mal aliento." },
        { subtitle: "Otros", desc: "Dolores de garganta, dificultad para tragar o respirar, tos crónica, lesiones en el cuello y cáncer de garganta/laringe." }
      ]
    },
    {
      icon: <Mic className="w-10 h-10 text-teal-600" />,
      title: "Enfermedades de la Laringe",
      image: "/enfermedades/laringe.webp",
      content: [
        { subtitle: "Disfonía", desc: "Alteración de la voz." },
        { subtitle: "Reflujo faringolaríngeo", desc: "Produce tos seca y sensación de cuerpo extraño." },
        { subtitle: "Edema de Reinke", desc: "Común en fumadores." },
        { subtitle: "Laringitis agudas o crónicas", desc: "Relacionadas con infecciones." },
        { subtitle: "Pólipos y nódulos", desc: "Lesiones en cuerdas vocales." },
        { subtitle: "Papilomatosis laríngea (VPH)", desc: "Debe diferenciarse de carcinoma." }
      ]
    }
  ];

  return (
    <section className="relative bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-700 drop-shadow mb-8">
          Otorrinolaringología
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
          Tratamos de forma especializada las enfermedades del oído, nariz, garganta y laringe,
          ofreciendo una atención médica integral.
        </p>

        {/* Acordeón */}
        <div className="space-y-8 text-left">
          {servicios.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-teal-200 rounded-3xl shadow-lg"
              style={{ minHeight: "110px" }}
            >
              <button
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between p-8 text-xl font-semibold text-gray-800 hover:bg-teal-50 rounded-3xl transition"
                style={{ minHeight: "110px" }}
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  {item.title}
                </div>
                {activeIndex === idx ? (
                  <ChevronUp className="w-7 h-7 text-teal-600" />
                ) : (
                  <ChevronDown className="w-7 h-7 text-teal-600" />
                )}
              </button>
              {activeIndex === idx && (
                <div className="p-8 border-t border-teal-100 bg-teal-50/60 rounded-b-3xl space-y-6">
                  {/* Imagen destacada más alta en desktop */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover rounded-2xl shadow-md mb-6 h-56 md:h-96 transition-all duration-300"
                  />
                  {/* Contenido */}
                  {item.content.map((sub, i) => (
                    <div key={i} className="pb-2">
                      <h4 className="text-lg font-bold text-teal-700 mb-1">{sub.subtitle}</h4>
                      <p className="text-gray-800">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}