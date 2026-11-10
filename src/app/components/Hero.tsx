"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import { FaChevronDown } from "react-icons/fa";
import { useLanguage } from "@/app/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      aria-label={t.hero.sectionAria}
      className="relative h-screen flex flex-col justify-center items-center text-center bg-background overflow-hidden"
    >
      <motion.p
        className="text-2xl md:text-3xl text-muted-foreground mb-2 flex items-center gap-2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {t.hero.hello}
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
      </motion.p>

      <ParticlesBackground />

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-foreground z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t.hero.name}
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-muted-foreground mb-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {t.hero.title}
      </motion.h2>

      <motion.p
        className="max-w-xl text-base md:text-lg text-muted-foreground mb-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        {t.hero.tagline}
      </motion.p>

      <motion.div
        className="flex gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <a
          href="#contact"
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
          {t.hero.contactMe}
        </a>
        <a
          href="https://drive.google.com/file/d/1tzvmsB7t7Njda7tYwEhXQFKSmGOGEPkT/view?usp=sharing"
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
          {t.hero.cv}
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-0 cursor-pointer mb-10 text-black dark:text-slate-600"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => {
          const aboutSection = document.getElementById("about-me");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        aria-label={t.hero.scrollAria}
      >
        <FaChevronDown size={42} />
      </motion.div>
    </section>
  );
}
