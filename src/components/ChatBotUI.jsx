import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Calendar } from "lucide-react";

export default function SimpleChatBot() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text:
        "¡Hola! Estás hablando con un asistente virtual automático de Clínica Barajas 🤖 " +
        "No es un profesional sanitario y no ofrece diagnósticos ni consejo médico: " +
        "sólo te ayuda a reservar tu cita. ¿Qué servicio deseas reservar?"
    }
  ]);

  // Aceptación de las Condiciones de Reserva antes de confirmar la cita.
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [patientData, setPatientData] = useState({
    service: "",
    doctor: "",
    paymentType: "",
    insurance: ""
  });

  const endRef = useRef(null);

  useEffect(() => { 
    const handleOpen = () => setOpen(true); 
    window.addEventListener("open-chat", handleOpen); 
    return () => { window.removeEventListener("open-chat", handleOpen); }; 
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const steps = [
    {
      id: "service",
      botMessage: "Selecciona el servicio:",
      options: [
        { value: "otorrino", label: "Otorrinolaringología 👂" },
        { value: "audioprotesis", label: "Audioprótesis 🦻" }
      ],
      field: "service"
    },
    {
      id: "doctor",
      botMessage: "¿Con qué médico deseas reservar?",
      options: [
        { value: "barajas", label: "Dr. José Juan Barajas de Prat" },
        { value: "ayoze", label: "Dr. Ayoze Lemes Robayna" },
        { value: "francisco", label: "Dr. Francisco González Sammarco" }
      ],
      field: "doctor",
      showOnlyIf: (data) => data.service === "otorrino"
    },
    {
      id: "paymentType",
      botMessage: "¿Deseas reservar con seguro médico o de forma privada?",
      options: [
        { value: "seguro", label: "Con Seguro Médico 🏥" },
        { value: "privado", label: "Consulta Privada 💳" }
      ],
      field: "paymentType",
      showOnlyIf: (data) => data.service === "otorrino" && data.doctor === "barajas"
    },
    {
      id: "insurance",
      botMessage: "¿Con qué aseguradora tienes la póliza?",
      options: [
        { value: "adeslas", label: "Adeslas", image: "/aseguradoras/adeslas.svg" },
        { value: "caser", label: "Caser", image: "/aseguradoras/caser.png" },
        { value: "santalucia", label: "Santa Lucía", image: "/aseguradoras/santalucia.svg" },
        { value: "dkv", label: "DKV", image: "/aseguradoras/dkv.png" },
        { value: "hna", label: "HNA", image: "/aseguradoras/hna.png" },
        { value: "aura", label: "Aura", image: "/aseguradoras/aura.png" },
        { value: "savia", label: "Savia", image: "/aseguradoras/savia.png" }
      ],
      field: "insurance",
      showOnlyIf: (data) => data.service === "otorrino" && data.paymentType === "seguro"
    },
    {
      id: "phone",
      botMessage:
        "Para pedir cita con el Dr. Ayoze Lemes Robayna o el Dr. Francisco González Sammarco, puede contactar por teléfono en el 922 275 488 o por WhatsApp.",
      type: "phone",
      showOnlyIf: (data) =>
        data.service === "otorrino" &&
        (data.doctor === "ayoze" || data.doctor === "francisco")
    },
    {
      id: "calendar",
      botMessage: "¡Excelente! Ya tienes todo listo. Haz clic en el botón para elegir tu fecha y hora:",
      type: "calendar"
    }
  ];

  const addMessage = (from, text) => {
    setMessages(prev => [...prev, { from, text }]);
  };

  const handleOptionClick = (option) => {
    const currentStepData = steps[currentStep];
    addMessage("user", option.label);

    setPatientData(prev => ({
      ...prev,
      [currentStepData.field]: option.value
    }));

    setTimeout(() => {
      let nextStep = currentStep + 1;

      while (
        nextStep < steps.length &&
        steps[nextStep].showOnlyIf &&
        !steps[nextStep].showOnlyIf({ ...patientData, [currentStepData.field]: option.value })
      ) {
        nextStep++;
      }

      if (nextStep < steps.length) {
        setCurrentStep(nextStep);
        addMessage("bot", steps[nextStep].botMessage);
      }
    }, 500);
  };

  const getCalendarLink = () => {
    const { service, paymentType } = patientData;

    if (service === "audioprotesis") {
      return "https://calendar.app.google/gZeVuxYnYbHjJwNX9";
    }

    if (service === "otorrino") {
      if (paymentType === "seguro") {
        return "https://calendar.app.google/1NwmBzJcvip9EAMa6";
      } else {
        return "https://calendar.app.google/7C3jKPxXgBbbQe7Z8";
      }
    }

    return "https://calendar.google.com";
  };

  const getSummary = () => {
    const { service, doctor, paymentType, insurance } = patientData;

    const insuranceLabel = steps.find(step => step.id === "insurance")?.options.find(opt => opt.value === insurance)?.label;
    const doctorLabel = steps.find(step => step.id === "doctor")?.options.find(opt => opt.value === doctor)?.label;

    return (
      <div className="text-xs text-gray-600 space-y-1">
        {service && (
          <div>📋 Servicio: {service === "otorrino" ? "Otorrinolaringología" : "Audioprótesis"}</div>
        )}
        {doctor && (
          <div>👨‍⚕️ Médico: {doctorLabel}</div>
        )}
        {paymentType && (
          <div>🏥 Modalidad: {paymentType === "seguro" ? "Con Seguro Médico" : "Privado"}</div>
        )}
        {insurance && <div>💳 Aseguradora: {insuranceLabel}</div>}
      </div>
    );
  };

  return (
    <div className="fixed z-50">
      {/* Botón inicial siempre abajo a la derecha */}
      {!open && (
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 bg-teal-700 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-teal-800 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold text-lg">Reserva Cita</span>
            <span className="sr-only">con nuestro asistente virtual automático</span>
          </button>
        </div>
      )}

      {/* Chat abierto */}
      {open && (
        <div className="fixed bottom-6 md:right-6 md:left-auto left-1/2 -translate-x-1/2">
          <div className="w-96 max-w-[90vw] max-h-[80vh] h-[500px] bg-white rounded-2xl shadow-2xl mt-3 overflow-hidden flex flex-col animate-fadeIn">
            {/* Header */}
            <div className="bg-teal-700 text-white p-4 flex justify-between items-start gap-3">
              <div>
                <span className="font-bold block leading-tight">Reserva tu cita</span>
                <span className="text-xs font-normal text-teal-100">
                  🤖 Asistente virtual automático · no es un profesional sanitario
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar el chat"
                className="text-xl leading-none"
              >
                ×
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 p-4 overflow-auto bg-gray-50 flex flex-col gap-3">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-3 rounded-2xl leading-relaxed ${
                    message.from === "bot"
                      ? "bg-teal-700 text-white self-start"
                      : "bg-white text-gray-900 self-end border border-gray-200"
                  }`}
                >
                  {message.text}
                </div>
              ))}

              {currentStep < steps.length && (
                <div className="mt-2">
                  {steps[currentStep].options && (
                    <div className="grid gap-2">
                      {steps[currentStep].options.map((option, i) => (
                        <button
                          key={i}
                          onClick={() => handleOptionClick(option)}
                          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
                        >
                          {option.image ? (
                            <img src={option.image} alt={option.label} className="w-8 h-8 object-contain" />
                          ) : (
                            <span className="text-xl">{option.icon}</span>
                          )}
                          <span className="text-gray-700 font-medium">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {steps[currentStep].type === "calendar" && (
                    <div className="mt-4 p-4 bg-white rounded-lg border border-teal-200 text-center">
                      <div className="mb-3">
                        <strong className="text-sm text-gray-700">Resumen:</strong>
                        {getSummary()}
                      </div>

                      <label className="flex items-start gap-2 text-left mb-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={acceptedTerms}
                          onChange={() => setAcceptedTerms(prev => !prev)}
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-teal-600 focus:ring-2 focus:ring-teal-500"
                        />
                        <span className="text-xs leading-snug text-gray-700">
                          Acepto las{" "}
                          <a
                            href="/condiciones-reserva"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-700 font-semibold underline"
                          >
                            Condiciones de Reserva
                          </a>
                          , el{" "}
                          <a
                            href="/aviso-legal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-700 font-semibold underline"
                          >
                            Aviso Legal
                          </a>
                          , la{" "}
                          <a
                            href="/politica-privacidad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-700 font-semibold underline"
                          >
                            Política de Privacidad
                          </a>{" "}
                          y la{" "}
                          <a
                            href="/cookies"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-700 font-semibold underline"
                          >
                            Política de Cookies
                          </a>
                          <span className="text-red-500"> *</span>
                        </span>
                      </label>

                      {acceptedTerms ? (
                        <a
                          href={getCalendarLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                        >
                          <Calendar className="w-5 h-5" />
                          Elegir Fecha y Hora
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="w-full flex items-center justify-center gap-2 bg-gray-300 text-gray-600 py-3 px-4 rounded-lg font-semibold cursor-not-allowed"
                        >
                          <Calendar className="w-5 h-5" />
                          Elegir Fecha y Hora
                        </button>
                      )}

                      <p className="text-xs text-gray-500 mt-2">
                        Serás redirigido a Google Calendar, servicio de Google Ireland Ltd.,
                        donde se recogerán tus datos para gestionar la cita. No facilites
                        datos de salud en este chat.
                      </p>
                    </div>
                  )}

                  {steps[currentStep].type === "phone" && (
                    <div className="mt-4 p-4 bg-white rounded-lg border border-teal-200 text-center">
                      <div className="mb-3">
                        <strong className="text-sm text-gray-700">Resumen:</strong>
                        {getSummary()}
                      </div>

                      <ContactButtons />

                      <p className="text-xs text-gray-500 mt-2">
                        La cita con estos doctores se gestiona por teléfono o WhatsApp
                      </p>
                    </div>
                  )}
                </div>
              )}
              <div ref={endRef} />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function ContactButtons() {
  return (
    <div className="flex flex-col gap-3">
      <a
        href="tel:+34922275488"
        className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
      >
        Llamar al 922 275 488
      </a>

      <a
        href="https://wa.me/34613003092"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.14 1.58 5.94L0 24l6.32-1.66a11.89 11.89 0 005.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.41zM12.08 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.75.98 1-3.65-.23-.37a9.9 9.9 0 01-1.52-5.24c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91A9.86 9.86 0 0122 11.92c0 5.47-4.45 9.92-9.92 9.92zm5.44-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.85.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
        </svg>
        Hablar por WhatsApp
      </a>
    </div>
  );
}
