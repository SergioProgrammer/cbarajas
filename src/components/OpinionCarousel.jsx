import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    author_name: "Marisa Hernandez",
    text: "Buena atención y explicaciones por parte del doctor. Cuenta con buena aparatología y pruebas diagnósticas de todo tipo. No se queda en lo superficial.",
    rating: 5,
    relative_time_description: "Hace 5 meses",
    profile_photo_url: ""
  },
  {
    author_name: "Alyf69 MG",
    text: "La verdad es que me sorprendió, tanto el Doctor como el especialista en Audiometría. El Doctor tras dicha prueba me aclaró las dudas de mi dolencia.",
    rating: 5,
    relative_time_description: "Hace 7 meses",
    profile_photo_url: ""
  },
  {
    author_name: "Santi Correa",
    text: "Siempre un magnífico trato. Muchas gracias por la cordial atención que me dispensan todos los profesionales de la clínica en cada cita. Agradecimientos al doctor y todo su equipo.",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    profile_photo_url: ""
  },
  {
    author_name: "Gabriela Vargas Jiménez",
    text: "Muchas gracias al Doctor y todo el personal (recepción y técnicos) por el trato y efectividad. El mismo día que fui tuve una solución completa a años de no saber qué tenía. Gracias 🙏",
    rating: 5,
    relative_time_description: "Hace 6 meses",
    profile_photo_url: ""
  },
  {
    author_name: "Carmen Dolores Gomez Perez",
    text: "Es la primera vez que voy y me ha parecido muy bien tanto el personal como el Doctor, muy bien explicado. Gracias por todo.",
    rating: 5,
    relative_time_description: "Hace 4 meses",
    profile_photo_url: ""
  }
];

// Componente del logotipo de Google en SVG 
const GoogleLogo = ({ height = "40" }) => (
  <svg width={height * 2.72} height={height} viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      {/* G - Azul */}
      <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
      {/* o - Rojo */}
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
      {/* o - Amarillo */}
      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
      {/* g - Azul */}
      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
      {/* l - Verde */}
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
      {/* e - Rojo */}
      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
    </g>
  </svg>
);


const getAvatarUrl = (name, photoUrl) => {
  if (photoUrl) return photoUrl;
  const initial = name.charAt(0).toUpperCase();
  return `https://ui-avatars.com/api/?name=${initial}&background=random&color=fff&size=128&bold=true`;
};

export default function OpinionCarousel() {
  if (!reviews.length) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0", color: "#888" }}>
        No hay reseñas disponibles.
      </div>
    );
  }

  return (
    <div style={{ position: "relative", padding: "40px 0", background: "#f9fafb" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        <h2 style={{ 
          textAlign: "center", 
          fontSize: "32px", 
          fontWeight: "700", 
          marginBottom: "40px", 
          color: "#0d9488",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap"
        }}>
          <span>Reseñas de</span>
          <GoogleLogo height="40" />
          <span>de nuestros pacientes</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: "50px" }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "28px 22px",
                    boxShadow: "0 6px 22px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "320px",        
                    minHeight: "320px",     
                  }}
                >
                  {/* Cabecera con foto/nombre */}
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
                    <img
                      src={getAvatarUrl(review.author_name, review.profile_photo_url)}
                      alt={review.author_name}
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginRight: "12px",
                      }}
                    />
                    <div>
                      <h3 style={{ fontWeight: 600, color: "#222", fontSize: "16px" }}>
                        {review.author_name}
                      </h3>
                      <span style={{ fontSize: "13px", color: "#aaa" }}>{review.relative_time_description}</span>
                    </div>
                  </div>

                  {/* Texto */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#444",
                      marginBottom: "18px",
                      flex: 1,
                      lineHeight: "1.5",
                      overflow: "hidden",        
                      textOverflow: "ellipsis",  
                      display: "-webkit-box",
                      WebkitLineClamp: 5,        
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {review.text}
                  </p>

                  {/* Estrellas */}
                  <div style={{ color: "#f59e0b", fontSize: "18px" }}>
                    {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                  </div>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}