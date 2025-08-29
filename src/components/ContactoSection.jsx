import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const subject = 'Consulta desde Clínica Barajas';
    const body = `Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono || 'No proporcionado'}

Mensaje:
${formData.mensaje}`;

    const mailtoLink = `mailto:sergiosanpacheco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      setErrors({});
    }, 500);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-teal-50/30 py-16 px-6 lg:px-16" id="contacto">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Encuéntranos en la clínica o contáctanos directamente.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Ubicación */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <MapPin className="text-teal-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Ubicación</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              C. de Pérez de Rozas, 8<br />
              38004 Santa Cruz de Tenerife<br />
              Islas Canarias, España
            </p>
          </div>

          {/* Teléfono */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Phone className="text-teal-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Teléfono</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              <a href="tel:+34922275488" className="hover:text-teal-700 transition-colors">
                +34 922 27 54 88
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-1">Atención al paciente</p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Mail className="text-teal-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              <a href="mailto:info@clinicabarajas.com" className="hover:text-teal-700 transition-colors">
                info@clinicabarajas.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-1">Consultas generales</p>
          </div>

          {/* Horario */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-teal-100 p-3 rounded-full">
                <Clock className="text-teal-600 w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Horario</h3>
            </div>
            <div className="text-gray-600 leading-relaxed">
              <p>Lunes y Miércoles: 9:00 - 19:00</p>
              <p>Martes, Jueves y Viernes: 9:00 - 17:00</p>
              <p>Sábados: Cerrado</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Nuestra Ubicación</h3>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=C.+de+Perez+de+Rozas,+8,+38004+Santa+Cruz+de+Tenerife&output=embed"
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

        {/* Formulario */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-teal-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-teal-100 p-2 rounded-full">
              <Send className="text-teal-600 w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-teal-700">Escríbenos</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Tu nombre completo"
              className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-200 ${
                errors.nombre ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Tu email"
              className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-200 ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleInputChange}
              placeholder="Tu teléfono (opcional)"
              className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-200 hover:border-gray-300"
            />

            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
              rows="5"
              placeholder="¿En qué podemos ayudarte?"
              className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none resize-none transition-all duration-200 ${
                errors.mensaje ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            />
            {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-teal-700 hover:bg-teal-800 active:scale-95 shadow-lg hover:shadow-xl text-white"
            >
              <Send className="w-4 h-4" />
              Enviar mensaje
            </button>
          </form>

          <div className="mt-6 p-4 bg-teal-50 rounded-lg flex gap-3 items-start">
            <CheckCircle className="text-teal-600 w-5 h-5 mt-1" />
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-700">Al enviar el formulario:</span>  
              Se abrirá tu cliente de email con el mensaje preparado para enviar a nuestra clínica.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
