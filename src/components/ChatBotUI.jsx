import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Calendar } from "lucide-react";

export default function SimpleChatBot() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy el asistente de Clínica Barajas 👋 ¿Qué servicio deseas reservar?" }
  ]);

  const [patientData, setPatientData] = useState({
    service: "",
    paymentType: "",
    insurance: ""
  });

  const endRef = useRef(null);

  useEffect(() => 
    { const handleOpen = () => setOpen(true); window.addEventListener("open-chat", handleOpen); 
      return () => { window.removeEventListener("open-chat", handleOpen); }; }, []);

  // auto-scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // pasos
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
      id: "paymentType",
      botMessage: "¿Deseas reservar con seguro médico o de forma privada?",
      options: [
        { value: "seguro", label: "Con Seguro Médico 🏥" },
        { value: "privado", label: "Consulta Privada 💳" }
      ],
      field: "paymentType",
      showOnlyIf: (data) => data.service === "otorrino"
    },
    {
      id: "insurance",
      botMessage: "¿Con qué aseguradora tienes la póliza?",
      options: [
        { value: "adeslas", label: "Adeslas", image: "aseguradoras/adeslas.svg" },
        { value: "caser", label: "Caser", image: "aseguradoras/caser.png" },
        { value: "santalucia", label: "Santa Lucía", image: "aseguradoras/santalucia.svg" },
        { value: "dkv", label: "DKV", image: "aseguradoras/dkv.png" },
        { value: "hna", label: "HNA", image: "aseguradoras/hna.png" }
      ],
      field: "insurance",
      showOnlyIf: (data) => data.service === "otorrino" && data.paymentType === "seguro"
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
      return "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Z1MySJXGZYj1G2UYaorMq_isNLdShlB8GduUZt2WTajE00rDqfTICPI3grFdTqZwcRv43zb5r";
    }

    if (service === "otorrino") {
      if (paymentType === "seguro") {
        return "https://calendar.app.google/MaFg9agwvoa1dwCz5";
      } else {
        return "https://calendar.app.google/A6LE86RNFE37wrvQA";
      }
    }

    return "https://calendar.google.com";
  };

  const getSummary = () => {
    const { service, paymentType, insurance } = patientData;

    const insuranceLabel = steps.find(step => step.id === "insurance")?.options.find(opt => opt.value === insurance)?.label;

    return (
      <div className="text-xs text-gray-600 space-y-1">
        {service && (
          <div>📋 Servicio: {service === "otorrino" ? "Otorrinolaringología" : "Audioprótesis"}</div>
        )}
        {paymentType && (
          <div>🏥 Modalidad: {paymentType === "seguro" ? "Con Seguro Médico" : "Privado"}</div>
        )}
        {insurance && <div>💳 Aseguradora: {insuranceLabel}</div>}
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 bg-teal-700 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-teal-800 hover:scale-105 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold text-lg">Reserva Cita</span>
        </button>
      )}

      {open && (
        <div className="w-96 h-[500px] bg-white rounded-2xl shadow-2xl mt-3 overflow-hidden flex flex-col animate-fadeIn">
          {/* Header */}
          <div className="bg-teal-700 text-white p-4 font-bold flex justify-between items-center">
            <span>Reserva tu cita</span>
            <button onClick={() => setOpen(false)} className="text-xl">×</button>
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

                    <a
                      href={getCalendarLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                    >
                      <Calendar className="w-5 h-5" />
                      Elegir Fecha y Hora
                    </a>

                    <p className="text-xs text-gray-500 mt-2">
                      Serás redirigido a nuestro calendario de citas
                    </p>
                  </div>
                )}
              </div>
            )}
            <div ref={endRef} />
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
