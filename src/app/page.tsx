import SkillsOrbit from "@/app/components/SkillsOrbit";
import Hero from "@/app/components/Hero";
import ProjectsTimeline from "./components/ProjectsTimeline";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section
        id="about-me"
        className="py-20 bg-gray-50 dark:bg-gray-900 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-8">Sobre Mí</h2>
        <p>
          Soy un apasionado desarrollador fullstack con experiencia en Next.js,
          React, Tailwind y tecnologías modernas. Me encanta crear interfaces
          limpias y funcionales.
        </p>
      </section>

      <section id="skills" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
        <SkillsOrbit />
      </section>

      <section id="projects" className="py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
        <div className="flex justify-center">
          <ProjectsTimeline />
        </div>
      </section>

      <section id="contact" className="py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Contacto</h2>
        <p>Email: mirko@example.com</p>
        <p>LinkedIn: linkedin.com/in/mirkoperez</p>
      </section>
    </>
  );
}
