# 🏥 Clínica Barajas

> **Más de 100 años cuidando de ti**  
> Centro de referencia en otorrinolaringología en Tenerife y las Islas Canarias

[![Website](https://img.shields.io/badge/Website-clinicabarajas.com-teal?style=for-the-badge)](https://clinicabarajas.com)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=for-the-badge&logo=framer)](https://framer.com/motion)

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Componentes Principales](#componentes-principales)
- [SEO y Rendimiento](#seo-y-rendimiento)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## 🏨 Sobre el Proyecto

**Clínica Barajas** es una clínica especializada en otorrinolaringología con más de 100 años de experiencia, ubicada en Tenerife. Esta web moderna presenta nuestros servicios especializados, equipo médico y tecnología de vanguardia.

### 🎯 Servicios Principales

- **Otorrinolaringología** - Tratamiento integral de oído, nariz y garganta
- **Audiología** - Diagnóstico y tratamiento de problemas auditivos
- **Adaptación de Audífonos** - Soluciones personalizadas con Franz, nuestro experto audiólogo
- **Pediatría ORL** - Atención especializada para niños y adolescentes
- **Tratamiento de Vértigo** - Diagnóstico y rehabilitación vestibular
- **Patología de la Voz** - Terapia vocal y tratamiento de disfonías

### 🧪 Pruebas Clínicas

- Audiometría y Audiometría Infantil
- Timpanometría
- Otoemisiones Acústicas
- Potenciales Evocados Auditivos

## 🚀 Tecnologías Utilizadas

- **Frontend Framework**: React 18.0+
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Image Optimization**: WebP format
- **Icons**: Lucide React

## ✨ Características

### 🎨 **Diseño Moderno**
- Interfaz limpia y profesional
- Paleta de colores teal corporativa
- Diseño responsive (móvil-first)
- Animaciones fluidas y micro-interacciones

### 🦻 **Funcionalidades Específicas**
- **Página de Audífonos**: Showcase de equipos Virto Paradise, Sky Lumity, Naída Lumity, Audeo Lumity
- **Perfil del Experto**: Destacando a Franz, audiólogo especialista
- **Banner de Cookies**: Cumplimiento RGPD personalizado
- **Política de Privacidad**: Integrada y accesible

### 📱 **Optimización**
- Responsive design (móvil, tablet, desktop)
- Lazy loading de imágenes
- SEO optimizado
- Core Web Vitals optimizados
- Progressive Web App (PWA) ready

## 📁 Estructura del Proyecto

```
clinica-barajas/
│
├── public/
│   ├── hero/
│   │   └── franz.webp
│   └── audifonos/
│       ├── virto.webp
│       ├── sky.webp
│       ├── Naida.webp
│       └── audeo.webp
│
├── src/
│   ├── components/
│   │   ├── HeroClinica.jsx
│   │   ├── Audifonos.jsx
│   │   ├── CookieBanner.jsx
│   │   └── Navigation.jsx
│   │
│   ├── pages/
│   │   ├── laclinica/
│   │   ├── otorrino/
│   │   ├── audiologia/
│   │   ├── audifonos/
│   │   └── contacto/
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── utils/
│       └── constants.js
│
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠 Instalación

### Prerrequisitos
- Node.js 16.0 o superior y React
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/cbarajas.git
   cd clinica-barajas
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Construcción
npm run build        # Build para producción
npm run preview      # Preview del build

# Linting y formateo
npm run lint         # ESLint
npm run lint:fix     # Corregir errores automáticamente
npm run format       # Prettier

# Testing
npm run test         # Ejecutar tests
npm run test:watch   # Tests en modo watch
```

## 🧩 Componentes Principales

### `Hero.jsx`
- Hero section principal con animaciones
- Texto responsivo (resumido en móvil)
- Lista de servicios con efectos stagger

### `Audifonos.jsx`
- Showcase de audífonos disponibles
- Grid responsivo con hover effects
- Información detallada de cada modelo

### `CookieBanner.jsx`
- Banner de consentimiento de cookies
- Panel de configuración granular
- Cumplimiento RGPD
- Diseño teal corporativo

### `NavBar.jsx`
- Menú responsive con submenús
- Redirección externa a fundacionbarajas.es
- Navegación fluida entre secciones

## 📊 SEO y Rendimiento

### Meta Tags Optimizados
```html
<title>Clínica Barajas - Otorrinolaringología en Tenerife | +100 años</title>
<meta name="description" content="Centro de referencia en otorrinolaringología en Tenerife. Más de 100 años de experiencia. Especialistas en audifonos, vértigo, audiología y ORL pediátrica.">
<meta name="keywords" content="otorrino tenerife, audifonos canarias, vertigo, audiologia, clinica barajas">
```

### Lighthouse Score Objetivo
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 95+

## 🤝 Contribuir

### Proceso de Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/cbarajas`)
3. Commit cambios (`git commit -m 'Add some cbarajas'`)
4. Push a la rama (`git push origin feature/cbarajas`)
5. Abrir Pull Request

### Estándares de Código
- Usar Prettier para formateo
- Seguir convenciones de nombres en camelCase
- Componentes en PascalCase
- Commits siguiendo [Conventional Commits](https://conventionalcommits.org/)

## 📞 Contacto

**Clínica Barajas**
- 🌐 Website: [clinicabarajas.com](https://clinicabarajas.com)
- 🏥 Fundación: [fundacionbarajas.es](https://fundacionbarajas.es)
- 📍 Ubicación: Tenerife, Islas Canarias
- 📧 Email: info@clinicabarajas.com

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

---

<div align="center">

**Desarrollado por Sergio Sandoval de SQStudio para mejorar la salud auditiva en Canarias**

[![Clínica Barajas](https://img.shields.io/badge/Clínica%20Barajas-Más%20de%20100%20años-teal?style=for-the-badge)](https://clinicabarajas.com)

</div>