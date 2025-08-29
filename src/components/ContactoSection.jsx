import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Simulación envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-teal-50/30 py-16 px-6 lg:px-16" id="contacto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Encuéntranos en la clínica o contáctanos por teléfono o email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          
          {/* Información */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard 
                icon={<MapPin className="text-teal-600 w-6 h-6" />} 
                title="Ubicación"
                text={
                  <>
                    C. de Pérez de Rozas, 8<br />
                    38004 Santa Cruz de Tenerife<br />
                    Islas Canarias, España
                  </>
                }
              />
              <InfoCard 
                icon={<Phone className="text-teal-600 w-6 h-6" />} 
                title="Teléfono"
                text={<a href="tel:+34922123456" className="hover:text-teal-700">+34 922 123 456</a>}
                subtitle="Atención al paciente"
              />
              <InfoCard 
                icon={<Mail className="text-teal-600 w-6 h-6" />} 
                title="Email"
                text={<a href="mailto:info@clinicabarajas.com" className="hover:text-teal-700">info@clinicabarajas.com</a>}
                subtitle="Consultas generales"
              />
              <InfoCard 
                icon={<Clock className="text-teal-600 w-6 h-6" />} 
                title="Horario"
                text={
                  <>
                    <p>Lun - Vie: 8:00 - 20:00</p>
                    <p>Sábados: 9:00 - 14:00</p>
                    <p>Domingos: Cerrado</p>
                  </>
                }
              />
            </div>

            {/* Mapa */}
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Nuestra Ubicación</h3>
              <div className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=Clínica+Barajas,+C.+de+Perez+de+Rozas,+8,+38004+Santa+Cruz+de+Tenerife&output=embed"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0 w-full"
                  title="Mapa Clínica Barajas"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Haz clic en el mapa para ver direcciones detalladas
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-teal-100 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-100 p-2 rounded-full">
                <Send className="text-teal-600 w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-teal-700">Escríbenos</h3>
            </div>

            {/* Estado */}
            {submitStatus === 'success' && (
              <Alert type="success" text="¡Mensaje enviado correctamente! Te contactaremos pronto." />
            )}
            {submitStatus === 'error' && (
              <Alert type="error" text="Error al enviar el mensaje. Por favor, intenta de nuevo." />
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField name="nombre" value={formData.nombre} onChange={handleInputChange} error={errors.nombre} placeholder="Tu nombre completo" />
              <InputField name="email" type="email" value={formData.email} onChange={handleInputChange} error={errors.email} placeholder="Tu email" />
              <InputField name="telefono" type="tel" value={formData.telefono} onChange={handleInputChange} placeholder="Tu teléfono (opcional)" />
              <TextAreaField name="mensaje" value={formData.mensaje} onChange={handleInputChange} error={errors.mensaje} placeholder="¿En qué podemos ayudarte?" />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-teal-700 hover:bg-teal-800 active:scale-95 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Subcomponentes para limpiar código --- */
function InfoCard({ icon, title, text, subtitle }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-teal-100 p-3 rounded-full">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-600 leading-relaxed">{text}</div>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
}

function InputField({ name, value, onChange, placeholder, type = "text", error }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
        className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-200 ${error ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function TextAreaField({ name, value, onChange, placeholder, error }) {
  return (
    <div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="5"
        placeholder={placeholder}
        aria-label={placeholder}
        className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none resize-none transition-all duration-200 ${error ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function Alert({ type, text }) {
  const styles = type === "success" 
    ? "bg-green-50 border border-green-200 text-green-700"
    : "bg-red-50 border border-red-200 text-red-700";
  const Icon = type === "success" ? CheckCircle : AlertCircle;

  return (
    <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${styles}`}>
      <Icon className="w-5 h-5" />
      <p className="text-sm">{text}</p>
    </div>
  );
}
