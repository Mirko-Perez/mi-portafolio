"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Sección principal de presentación"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-foreground"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hola, soy Mirko Pérez
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-muted-foreground mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Desarrollador Full Stack
      </motion.h2>

      <motion.p
        className="max-w-xl text-base md:text-lg text-muted-foreground mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Apasionado por crear experiencias web modernas, rápidas y accesibles.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <a
          href="#contacto"
          className="cursor-pointer px-6 py-3 border border-foreground rounded-xl font-medium hover:bg-muted hover:scale-105 transition-transform duration-300"
        >
          Contactame
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          className="cursor-pointer px-6 py-3 border border-foreground rounded-xl font-medium hover:bg-muted hover:scale-105 transition-transform duration-300"
        >
          Ver CV
        </a>
      </motion.div>
    </section>
  );
}
