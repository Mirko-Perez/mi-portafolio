"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Sección principal de presentación"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 bg-white overflow-hidden"
    >
      <motion.h2
        className="text-2xl md:text-3xl text-muted-foreground mb-2 flex items-center gap-2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        ¡Hola!
        <motion.span
          animate={{ rotate: [0, 15, -10, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          className="inline-block origin-[70%_70%]"
        >
          👋
        </motion.span>
      </motion.h2>
      <ParticlesBackground />
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-foreground z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Soy Mirko Perez
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-muted-foreground mb-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Desarrollador Frontend
      </motion.h2>

      <motion.p
        className="max-w-xl text-base md:text-lg text-muted-foreground mb-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Apasionado por crear experiencias web modernas, rápidas y accesibles.
      </motion.p>

      <motion.div
        className="flex gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <a
          href="#contacto"
          className="
      cursor-pointer
      px-6 py-3
      rounded-xl font-medium
      transition-colors duration-300


      bg-black text-white border border-black
      hover:bg-gray-800


      dark:bg-white dark:text-black dark:border-black
      dark:hover:bg-gray-200
    "
        >
          Contactame
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          className="
      cursor-pointer
      px-6 py-3
      rounded-xl font-medium
      transition-colors duration-300

      bg-black text-white border border-black
      hover:bg-gray-800

      dark:bg-white dark:text-black dark:border-black
      dark:hover:bg-gray-200
    "
        >
          Ver CV
        </a>
      </motion.div>
    </section>
  );
}
