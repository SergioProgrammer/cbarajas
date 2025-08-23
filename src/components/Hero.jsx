import React, { useEffect, useState } from "react";

const images = [
  "/hero/cl.jpg",
  "/hero/barajas.webp",
  "/hero/franz.webp",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo dinámico */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-6xl md:text-6xl font-extrabold animate-fadeInUp">
          Bienvenido a <span className="text-teal-400">Clínica Barajas</span>
        </h1>
        <p className="mt-6 text-2xl md:text-2xl text-gray-200 animate-fadeInUp delay-500">
          Cuidando de tu salud con los mejores especialistas.
        </p>
      </div>
    </section>
  );
}
