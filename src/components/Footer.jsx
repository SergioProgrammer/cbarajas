import { Facebook, Instagram } from "lucide-react";

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

          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Enlaces rápidos</h3>
              <ul class="space-y-2">
                <li><a href="/laclinica" class="hover:text-white transition">La Clínica</a></li>
                <li><a href="/otorrino" class="hover:text-white transition">Especialidades</a></li>
                <li><a href="/audiologia" class="hover:text-white transition">Pruebas Clínicas</a></li>
                <li><a href="https://fundacionbarajas.es" class="hover:text-white transition">Fundación Barajas</a></li>
                <li><a href="/contacto" class="hover:text-white transition">Contacto</a></li>
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
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.14 1.58 5.94L0 24l6.32-1.66a11.89 11.89 0 005.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.41zM12.08 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.75.98 1-3.65-.23-.37a9.9 9.9 0 01-1.52-5.24c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91A9.86 9.86 0 0122 11.92c0 5.47-4.45 9.92-9.92 9.92zm5.44-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.85.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
                </svg>
                <a
                  href="https://wa.me/34613003092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp: +34 613 003 092
                </a>
              </li>
              <li className="flex items-start gap-2">
                ✉️ <a href="mailto:info@clinicabarajas.com" className="hover:text-white transition">clinicabarajas@gmail.com</a>
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
                href="https://wa.me/34613003092"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-110"
                title="WhatsApp"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.14 1.58 5.94L0 24l6.32-1.66a11.89 11.89 0 005.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.41zM12.08 21.8h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.75.98 1-3.65-.23-.37a9.9 9.9 0 01-1.52-5.24c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91A9.86 9.86 0 0122 11.92c0 5.47-4.45 9.92-9.92 9.92zm5.44-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.85.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-white px-6 py-6 text-center shadow-sm">
          <h3 className="mx-auto max-w-4xl text-center text-base font-semibold uppercase tracking-[0.12em] text-gray-800 md:text-lg">
            Apoyo a la Dual en su fase formativa fuera del centro educativo
          </h3>
          <p className="mx-auto mt-5 max-w-4xl text-sm leading-relaxed text-gray-600 md:text-[15px]">
            Esta empresa u organismo equiparado participa en esta actuacion participando en
            la formacion del alumnado de ciclos formativos de grado medio y superior de
            centros educativos sostenidos con fondos publicos que participan en Proyectos de
            Formacion Profesional Dual.
          </p>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-6 md:gap-10">
            <img
              src="/hero/gobcan.JPG"
              alt="Gobierno de Canarias"
              className="h-12 w-auto object-contain md:h-14"
              loading="lazy"
            />
            <img
              src="/hero/ue.png"
              alt="Unión Europea"
              className="h-12 w-auto object-contain md:h-14"
              loading="lazy"
            />
            <img
              src="/hero/hacienda.png"
              alt="Hacienda"
              className="h-12 w-auto object-contain md:h-14"
              loading="lazy"
            />
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <a href="/politica-privacidad" className="hover:text-white transition">
              Política de Privacidad
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="/cookies" className="hover:text-white transition">
              Política de Cookies
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="/aviso-legal" className="hover:text-white transition">
              Aviso Legal
            </a>
          </div>
          <p>&copy; 2025 Clínica Barajas. Todos los derechos reservados. <a href="https://www.instagram.com/sqstudiodm/" className="hover:text-white transition"> Web SQStudio</a></p>
        </div>
      </div>
    </footer>
  );
}
