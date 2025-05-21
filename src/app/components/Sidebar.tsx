"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaUser,
  FaFolderOpen,
  FaComments,
} from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <>
      {/* Botón hamburguesa solo en mobile */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden text-blue-500 bg-white dark:bg-gray-900 p-2 rounded-full shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar fijo en desktop */}
      <aside
        className={`hidden md:flex fixed top-0 left-0 h-full w-64 border-r p-6 flex-col justify-between
        transition-colors duration-500 ease-in-out
        ${
          isDark
            ? "bg-gray-900 border-gray-800 text-gray-300"
            : "bg-white border-gray-200 text-gray-700"
        }
      `}
      >
        <SidebarContent />
      </aside>

      {/* Sidebar animado en mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 left-0 h-full w-64 p-6 z-40 flex flex-col justify-between shadow-xl
              ${isDark ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"}
            `}
          >
            <SidebarContent onLinkClick={() => setIsOpen(false)} />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

function SidebarContent({ onLinkClick }: { onLinkClick?: () => void }) {
  const navItems = [
    { href: "#hero", label: "Inicio", icon: <FaHome size={16} /> },
    {
      href: "#proyectos",
      label: "Proyectos",
      icon: <FaFolderOpen size={16} />,
    },
    { href: "#sobre-mi", label: "Sobre Mí", icon: <FaUser size={16} /> },
    { href: "#contacto", label: "Contacto", icon: <FaComments size={16} /> },
  ];

  const [activeHref, setActiveHref] = useState<string>("");

  function handleClick(href: string) {
    setActiveHref(href);
    if (onLinkClick) onLinkClick();
  }

  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <>
      {/* Parte superior */}
      <div className="flex flex-col items-center">
        <motion.div
          className="h-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        ></motion.div>

        <h2 className="text-xl font-bold text-center">Mirko Perez</h2>

        <p
          className="text-sm text-blue-500 mb-6 text-center cursor-pointer hover:underline"
          onClick={launchConfetti}
        >
          Desarrollador Frontend
        </p>

        {/* Navegación */}
        <nav className="flex flex-col space-y-4 w-full">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 w-full relative px-2 py-1
    before:absolute before:left-0 before:-bottom-1 before:h-[2px] before:w-full before:bg-gray-400 before:opacity-20
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300
    hover:after:w-full
    ${isActive ? "after:w-full" : ""}
  `}
                onClick={() => handleClick(item.href)}
              >
                {item.icon} {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer con redes */}
      <footer className="text-center text-sm space-y-4">
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            className="hover:text-blue-500"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:tuemail@example.com" className="hover:text-blue-500">
            <FaEnvelope size={20} />
          </a>
        </div>
        <p>&copy; 2025 Mirko Perez</p>
      </footer>
    </>
  );
}
