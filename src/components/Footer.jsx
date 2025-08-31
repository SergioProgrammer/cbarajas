import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          
          {/* Logo y descripción */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Clínica Barajas</h2>
            <p className="text-sm leading-relaxed">
              Centro de otorrinolaringología y audiología referente en Tenerife e
              Islas Canarias. Más de 100 años cuidando de tu salud con tecnología de
              vanguardia.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-white transition">La Clínica</a></li>
              <li><a href="#especialidades" className="hover:text-white transition">Especialidades</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Pruebas Clínicas</a></li>
              <li><a href="#fundacion" className="hover:text-white transition">Fundación Barajas</a></li>
              <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                📍 <span>Clínica Barajas, C. de Perez de Rozas, 8, 38004 Santa Cruz de Tenerife</span>
              </li>
              <li className="flex items-start gap-2">
                📞 <a href="tel:+34922275488" className="hover:text-white transition">+34 922 275 488</a>
              </li>
              <li className="flex items-start gap-2">
                ✉️ <a href="mailto:info@clinicabarajas.com" className="hover:text-white transition">info@clinicabarajas.com</a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/clinicabarajas"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110"
                title="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/clinicabarajas/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
                title="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=648131957"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 Clínica Barajas. Todos los derechos reservados. <a href="https://www.instagram.com/sqstudiodm/" className="hover:text-white transition"> Web SQStudio</a></p>
        </div>
      </div>
    </footer>
  );
}