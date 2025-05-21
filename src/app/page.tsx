import { projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/ProjectCard";
import SkillsOrbit from "@/app/components/SkillsOrbit";
import Hero from "@/app/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
        <SkillsOrbit />
      </section>

      <section id="proyectos" className="py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section
        id="sobre-mi"
        className="py-20 bg-gray-50 dark:bg-gray-900 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-8">Sobre Mí</h2>
        <p>
          Soy un apasionado desarrollador fullstack con experiencia en Next.js,
          React, Tailwind y tecnologías modernas. Me encanta crear interfaces
          limpias y funcionales.
        </p>
      </section>

      <section id="contacto" className="py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Contacto</h2>
        <p>Email: mirko@example.com</p>
        <p>LinkedIn: linkedin.com/in/mirkoperez</p>
      </section>
    </>
  );
}
