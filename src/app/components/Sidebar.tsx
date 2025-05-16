"use client";

export default function Sidebar({ isDark }: { isDark: boolean }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-60 border-r p-6 flex flex-col justify-between
        transition-colors duration-500 ease-in-out
        ${
          isDark
            ? "bg-gray-900 border-gray-800 text-gray-300"
            : "bg-white border-gray-200 text-gray-700"
        }
      `}
    >
      <div>
        <h2 className="text-2xl font-bold mb-8">Mirko Pérez</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#hero" className="hover:text-blue-500">
            Inicio
          </a>
          <a href="#proyectos" className="hover:text-blue-500">
            Proyectos
          </a>
          <a href="#sobre-mi" className="hover:text-blue-500">
            Sobre Mí
          </a>
          <a href="#contacto" className="hover:text-blue-500">
            Contacto
          </a>
        </nav>
      </div>
      <footer className="text-sm">&copy; 2025 Mirko Pérez</footer>
    </aside>
  );
}
