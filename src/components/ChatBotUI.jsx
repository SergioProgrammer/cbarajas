import React, { useEffect, useRef, useState } from "react";

export default function ChatBotUI() {
  const [open, setOpen] = useState(false);
  const [meta, setMeta] = useState({ services: [], professionals: [], insurances: [] });
  const [messages, setMessages] = useState([{ from: "bot", text: "¡Hola! Te ayudo a reservar tu cita. Elige servicio:" }]);
  const [serviceId, setServiceId] = useState("");
  const [professionalId, setProfessionalId] = useState("");
  const [insuranceId, setInsuranceId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const endRef = useRef(null);
  const scrollDown = () => endRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollDown, [messages, slots]);

  useEffect(() => {
    fetch("/api/meta").then(r => r.json()).then(setMeta);
  }, []);

  const push = (from, text) => setMessages(prev => [...prev, { from, text }]);
  const handleService = (e) => { const id = e.target.value; setServiceId(id); push("user", meta.services.find(x => x.id === id)?.name || "Servicio"); push("bot", "Ahora selecciona el profesional:"); };
  const handleProfessional = (e) => { const id = e.target.value; setProfessionalId(id); push("user", meta.professionals.find(x => x.id === id)?.name || "Profesional"); push("bot", "¿Vienes por seguro o privado?"); };
  const handleInsurance = (e) => { const id = e.target.value; setInsuranceId(id); push("user", meta.insurances.find(x => x.id === id)?.name || "Seguro"); push("bot", "Escribe tu nombre completo:"); };
  const handleName = (e) => setName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const submitName = () => { if (name.trim().length < 2) return; push("user", name); push("bot", "Tu teléfono:"); };
  const submitPhone = () => { if (phone.trim().length < 6) return; push("user", phone); push("bot", "Tu email (opcional). Pulsa continuar si no quieres indicarlo."); };
  const submitEmail = () => { if (email) push("user", email); else push("user", "(Sin email)"); push("bot", "Selecciona un día en el calendario:"); };

  const onDateChange = async (d) => {
    setDate(d);
    const dateISO = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
    push("user", dateISO);
    push("bot", "Buscando huecos disponibles...");
    const res = await fetch("/api/slots", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ professionalId, serviceId, insuranceId, dateISO })});
    const data = await res.json();
    setSlots(data.slots || []);
    if ((data.slots || []).length === 0) push("bot", "No hay huecos ese día. Prueba otra fecha.");
    else push("bot", "Elige un horario:");
  };

  const confirm = async () => {
    if (!selectedSlot) return;
    push("user", `Reservar ${new Date(selectedSlot.start).toLocaleString()}`);
    const res = await fetch("/api/book", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ professionalId, serviceId, insuranceId, patientName:name, patientPhone:phone, patientEmail:email||null, startISO:selectedSlot.start, endISO:selectedSlot.end })});
    if (res.ok) {
      const data = await res.json();
      push("bot", `¡Listo! Cita confirmada para ${new Date(data.booking.startsAt).toLocaleString()}. Te esperamos 👋`);
      setSlots([]); setSelectedSlot(null);
    } else {
      const err = await res.json();
      push("bot", `Ups: ${err.message}. Vuelve a elegir otro hueco, por favor.`);
      setSelectedSlot(null);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 focus:outline-none"
      >
        Reserva Cita
      </button>

      {/* Panel desplegable */}
      {open && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-xl mt-2 overflow-hidden flex flex-col">
          <div className="bg-teal-600 text-white p-3 font-bold flex justify-between items-center">
            <span>Reserva tu cita</span>
            <button onClick={() => setOpen(false)} className="text-lg font-bold">×</button>
          </div>

          <div className="flex-1 p-3 overflow-auto bg-gray-100">
            {messages.map((m,i)=>(<div key={i} className={`bubble ${m.from}`}>{m.text}</div>))}

            {/* Aquí puedes colocar tus paneles de selección y inputs como en tu código original */}
            {/* Por ejemplo: servicios, profesionales, seguro, datos y slots */}

            <div ref={endRef} />
          </div>

          <style jsx>{`
            .bubble { max-width:80%; padding:8px 12px; border-radius:16px; margin:4px 0; line-height:1.3; }
            .bubble.bot { background:#0ea5a6; color:#fff; align-self:flex-start; }
            .bubble.user { background:#e5f6f6; color:#083344; align-self:flex-end; }
          `}</style>
        </div>
      )}
    </div>
  );
}
