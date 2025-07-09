import SkillsOrbit from "@/app/components/SkillsOrbit";
import Hero from "@/app/components/Hero";
import ProjectsTimeline from "./components/ProjectsTimeline";
import FadeInWhenVisible from "./providers/FadeInWhenVisible";
import WaveSeparator from "./components/WaveSeparator";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WaveSeparator />
      <FadeInWhenVisible>
        <section
          id="about-me"
          className="flex flex-col md:flex-row justify-center gap-6 scroll-mt-20 py-20"
        >
          {/* About Me Card */}
          <div className="max-w-md w-full">
            <div className="rounded-2xl border p-6 shadow-md dark:bg-slate-800 dark:border-slate-600 bg-white">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                About Me
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {`Software Developer with 3 years of experience building interactive and engaging user interfaces. I enjoy working in dynamic, multidisciplinary teams, contributing innovative and collaborative solutions.

I excel at transforming creative designs into clean, efficient code using HTML, CSS, and JavaScript, as well as modern frameworks like React and Next.js.

I have solid experience integrating APIs and optimizing web performance. Currently, I am seeking a new opportunity where I can contribute my knowledge and continue growing professionally.`}
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="max-w-md w-full">
            <div className="rounded-2xl border p-6 shadow-md dark:bg-slate-800 dark:border-slate-600 bg-white">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Education 🎓
              </h3>

              <div className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                  Teclab Instituto Técnico Superior
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Técnico Superior en Programación (Started 2024, currently
                  studying)
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                  Universidad Tecnológica Nacional - Facultad Regional
                  Resistencia, Chaco
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Systems Engineering (2017 - 2020, incomplete)
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      <WaveSeparator />
      <FadeInWhenVisible>
        <section id="skills" className="text-center py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-foreground tracking-tight">
            Technologies & Tools
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            {`These are the technologies and tools I've worked with to build
            scalable and performant web applications.`}
          </p>
          <SkillsOrbit />
        </section>
      </FadeInWhenVisible>

      <WaveSeparator />

      <FadeInWhenVisible>
        <section id="projects" className="py-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Experience
          </h2>
          <div className="flex justify-center">
            <ProjectsTimeline />
          </div>
        </section>
      </FadeInWhenVisible>

      <WaveSeparator />

      <FadeInWhenVisible>
        <section
          id="contact"
          className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-10 scroll-mt-32"
        >
          <ContactForm />
        </section>
      </FadeInWhenVisible>
    </>
  );
}
