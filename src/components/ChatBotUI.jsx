import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Calendar, User, Phone } from "lucide-react";

export default function SimpleChatBot() {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy el asistente de Clínica Barajas 👋 ¿Te ayudo a reservar una cita?" }
  ]);
  
  // Datos del paciente
  const [patientData, setPatientData] = useState({
    paymentType: "",
    insurance: "",
    consultationType: "",
    name: "",
    phone: ""
  });

  const endRef = useRef(null);
  useEffect(() => {
  const handleOpen = () => setIsOpen(true);

  window.addEventListener("open-chat", handleOpen);

  return () => {
    window.removeEventListener("open-chat", handleOpen);
  };
}, []);

  // escuchar el evento open-chat
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-chat", handleOpen);
    return () => {
      window.removeEventListener("open-chat", handleOpen);
    };
  }, []);

  // auto-scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Configuración de pasos
  const steps = [
    {
      id: "start",
      botMessage: "¿Deseas reservar con seguro médico o de forma privada?",
      options: [
        { value: "seguro", label: "Con Seguro Médico", icon: "🏥" },
        { value: "privado", label: "Consulta Privada", icon: "💳" }
      ],
      field: "paymentType"
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
      showOnlyIf: (data) => data.paymentType === "seguro"
    },
    {
      id: "consultation",
      botMessage: "Perfecto. ¿Qué tipo de consulta necesitas?",
      options: [
        { value: "otorrino", label: "Otorrinolaringología", icon: "👂" },
        { value: "audiologia", label: "Audiología", icon: "🦻" },
        { value: "audifonos", label: "Audífonos", icon: "🔊" },
        { value: "pediatria", label: "Niños y Adolescentes", icon: "👶" },
        { value: "vertigo", label: "Vértigo", icon: "🌀" },
        { value: "voz", label: "Patología de la Voz", icon: "🎤" }
      ],
      field: "consultationType"
    },
    {
      id: "name",
      botMessage: "¿Cuál es tu nombre completo?",
      type: "input",
      field: "name",
      placeholder: "Ej: María García López"
    },
    {
      id: "phone",
      botMessage: "Por último, ¿cuál es tu número de teléfono?",
      type: "input", 
      field: "phone",
      placeholder: "Ej: 622 123 456"
    },
    {
      id: "calendar",
      botMessage: "¡Excelente! Ya tienes todo listo. Haz clic en el botón para elegir tu fecha y hora preferida:",
      type: "calendar"
    }
  ];

  const addMessage = (from, text) => {
    setMessages(prev => [...prev, { from, text }]);
  };

  const handleOptionClick = (option) => {
    // Agregar respuesta del usuario
    addMessage("user", option.label);
    
    // Actualizar datos del paciente
    const currentStepData = steps[currentStep];
    setPatientData(prev => ({
      ...prev,
      [currentStepData.field]: option.value
    }));

    // Avanzar al siguiente paso
    setTimeout(() => {
      let nextStep = currentStep + 1;
      
      // Saltar pasos que no aplican (ej: seguro si es privado)
      while (nextStep < steps.length && 
             steps[nextStep].showOnlyIf && 
             !steps[nextStep].showOnlyIf({ ...patientData, [currentStepData.field]: option.value })) {
        nextStep++;
      }
      
      if (nextStep < steps.length) {
        setCurrentStep(nextStep);
        addMessage("bot", steps[nextStep].botMessage);
      }
    }, 500);
  };

  const handleInputSubmit = (value) => {
    if (!value.trim()) return;

    // Agregar respuesta del usuario
    addMessage("user", value);
    
    // Actualizar datos del paciente
    const currentStepData = steps[currentStep];
    setPatientData(prev => ({
      ...prev,
      [currentStepData.field]: value
    }));

    // Avanzar al siguiente paso
    setTimeout(() => {
      let nextStep = currentStep + 1;
      
      // Saltar pasos que no aplican
      while (nextStep < steps.length && 
             steps[nextStep].showOnlyIf && 
             !steps[nextStep].showOnlyIf({ ...patientData, [currentStepData.field]: value })) {
        nextStep++;
      }
      
      if (nextStep < steps.length) {
        setCurrentStep(nextStep);
        addMessage("bot", steps[nextStep].botMessage);
      }
    }, 500);
  };

  const getCalendarLink = () => {
    const { paymentType, consultationType, name, phone } = patientData;
    
    // URLs base de Google Calendar (cambiar por las tuyas)
    const calendars = {
      seguro: {
        otorrino: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1234567890",
        audiologia: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0987654321", 
        audifonos: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1122334455",
        pediatria: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ5544332211",
        vertigo: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ9988776655",
        voz: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ6677889900"
      },
      privado: {
        otorrino: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1111111111",
        audiologia: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2222222222",
        audifonos: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3333333333", 
        pediatria: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ4444444444",
        vertigo: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ5555555555",
        voz: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ6666666666"
      }
    };
    
    const baseUrl = calendars[paymentType]?.[consultationType];
    
    if (!baseUrl) return "https://calendar.google.com/calendar";

    // Encontrar el nombre de la consulta para la descripción
    const consultationName = steps[1].options.find(opt => opt.value === consultationType)?.label || consultationType;
    const paymentTypeName = paymentType === 'seguro' ? 'Con Seguro Médico' : 'Consulta Privada';
    
    // Parámetros para pre-rellenar Google Calendar
    const params = new URLSearchParams({
      // Pre-llenar nombre y teléfono si Google Calendar lo soporta
      'prefill_name': name || '',
      'prefill_phone': phone || '',
      // Información adicional en las notas
      'prefill_notes': `Tipo: ${paymentTypeName}\nConsulta: ${consultationName}\nTeléfono: ${phone}\nReservado via ChatBot`
    });

    return `${baseUrl}?${params.toString()}`;
  };

  const InputStep = ({ step }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      handleInputSubmit(inputValue);
      setInputValue("");
    };

    return (
      <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={step.placeholder}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
          autoFocus
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
        >
          Enviar
        </button>
      </form>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 bg-teal-700 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-teal-800 hover:scale-105 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-teal-400"
          aria-label="Abrir chat para reservar cita"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-semibold text-lg">Reserva Cita</span>
        </button>
      )}

      {/* Panel del chat */}
      {open && (
        <div className="w-96 h-[500px] bg-white rounded-2xl shadow-2xl mt-3 overflow-hidden flex flex-col animate-fadeIn">
          {/* Header */}
          <div className="bg-teal-700 text-white p-4 font-bold flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Reserva tu cita</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-xl hover:scale-125 transition-transform"
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-4 overflow-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-4 py-3 rounded-2xl leading-relaxed shadow-sm ${
                  message.from === "bot"
                    ? "bg-teal-700 text-white self-start rounded-tl-md"
                    : "bg-white text-gray-900 self-end rounded-tr-md border border-gray-200"
                }`}
              >
                {message.text}
              </div>
            ))}

            {/* Opciones interactivas */}
            {currentStep < steps.length && (
              <div className="mt-2">
                {steps[currentStep].options && (
                  <div className="grid gap-2">
                    {steps[currentStep].options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(option)}
                        className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 text-left"
                      >
                        {option.image ? (
                          <img 
                            src={option.image} 
                            alt={option.label}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <span className="text-xl">{option.icon}</span>
                        )}
                        <span className="text-gray-700 font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                {steps[currentStep].type === "input" && (
                  <InputStep step={steps[currentStep]} />
                )}

                {steps[currentStep].type === "calendar" && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-teal-200">
                    <div className="text-center mb-4">
                      <div className="text-sm text-gray-600 mb-2">
                        <strong>Resumen:</strong>
                      </div>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div>👤 {patientData.name}</div>
                        <div>📞 {patientData.phone}</div>
                        <div>🏥 {patientData.paymentType === 'seguro' ? 'Con Seguro' : 'Privado'}</div>
                        {patientData.insurance && (
                          <div>💳 {steps[1].options.find(opt => opt.value === patientData.insurance)?.label}</div>
                        )}
                        <div>📋 {steps.find(step => step.field === 'consultationType')?.options.find(opt => opt.value === patientData.consultationType)?.label}</div>
                      </div>
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
                    
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Te redirigiremos a nuestro calendario de citas
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
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}