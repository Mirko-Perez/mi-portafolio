"use client";

import { useLanguage } from "@/app/i18n/LanguageProvider";
import SkillsOrbit from "@/app/components/SkillsOrbit";
import Hero from "@/app/components/Hero";
import ProjectsTimeline from "./components/ProjectsTimeline";
import FadeInWhenVisible from "./providers/FadeInWhenVisible";
import WaveSeparator from "./components/WaveSeparator";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  const { t } = useLanguage();
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
                {t.about.title}
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {t.about.body}
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="max-w-md w-full">
            <div className="rounded-2xl border p-6 shadow-md dark:bg-slate-800 dark:border-slate-600 bg-white">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                {t.about.educationTitle}
              </h3>

              <div className="mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                  {t.about.teclabName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.about.teclabDegree}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                  {t.about.utnName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.about.utnDegree}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {t.about.languagesTitle}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t.about.spanish}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t.about.english}
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
            {t.skills.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            {t.skills.subtitle}
          </p>
          <SkillsOrbit />
        </section>
      </FadeInWhenVisible>

      <WaveSeparator />

      <FadeInWhenVisible>
        <section id="projects" className="py-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {t.experience.title}
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
