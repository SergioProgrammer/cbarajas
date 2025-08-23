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
    profile_photo_url: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    author_name: "Alyf69 MG",
    text: "La verdad es que me sorprendió, tanto el Doctor como el especialista en Audiometría. El Doctor tras dicha prueba me aclaró las dudas de mi dolencia.",
    rating: 5,
    relative_time_description: "Hace 7 meses",
    profile_photo_url: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    author_name: "Santi Correa",
    text: "Siempre un magnífico trato. Muchas gracias por la cordial atención que me dispensan todos los profesionales de la clínica en cada cita. Agradecimientos al doctor y todo su equipo.",
    rating: 5,
    relative_time_description: "Hace 3 meses",
    profile_photo_url: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    author_name: "Gabriela Vargas Jiménez",
    text: "Muchas gracias al Doctor y todo el personal (recepción y técnicos) por el trato y efectividad. El mismo día que fui tuve una solución completa a años de no saber qué tenía. Gracias 🙏",
    rating: 5,
    relative_time_description: "Hace 6 meses",
    profile_photo_url: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    author_name: "Carmen Dolores Gomez Perez",
    text: "Es la primera vez que voy y me ha parecido muy bien tanto el personal como el Doctor, muy bien explicado. Gracias por todo.",
    rating: 5,
    relative_time_description: "Hace 4 meses",
    profile_photo_url: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

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
        <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "700", marginBottom: "40px", color: "#0d9488" }}>
          Opiniones de nuestros pacientes
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
                  minHeight: "260px",
                }}
              >
                {/* Cabecera con foto y nombre */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
                  <img
                    src={review.profile_photo_url}
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
                <p style={{ fontSize: "15px", color: "#444", marginBottom: "18px", flex: 1, lineHeight: "1.5" }}>
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
