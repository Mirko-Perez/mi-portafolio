"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { useLanguage } from "@/app/i18n/LanguageProvider";

const items = [
  {
    key: "huemul",
    date: "10/2025 –",
    current: true,
    color: "#CC0000",
    icon: <SiRubyonrails />,
    techs: ["Ruby on Rails", "React", "PostgreSQL", "Odoo", "REST APIs"],
  },
  {
    key: "futbolink",
    date: "07/2025 – 10/2025",
    color: "#61DBFB",
    icon: <FaReact />,
    techs: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    key: "mate42",
    date: "06/2022 – 04/2025",
    color: "#61DBFB",
    icon: <FaReact />,
    techs: [
      "React",
      "Next.js",
      "TypeScript",
      "Vite",
      "Redux",
      "Laravel",
      "Odoo",
      "React Native",
    ],
    clients: [
      {
        key: "fibrazo",
        url: "https://www.fibrazo.com.ar/",
        techs: ["Laravel", "PHP", "jQuery", "Blade", "MySQL"],
      },
      {
        key: "skybrary",
        url: "https://www.skybrary.org/",
        techs: ["React", "TypeScript", "Sass", "Laravel"],
      },
      {
        key: "empatico",
        url: "https://empatico.buildersmovement.org/",
        techs: ["Next.js", "Laravel", "Chakra UI", "MySQL"],
      },
    ],
  },
] as const;

const ProjectsTimeline = () => {
  const { resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Evita errores de hidratación
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";

  const contentStyle = {
    background: isDarkMode ? "#0F172A" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    border: isDarkMode ? "1px solid #ffffff" : "1px solid #000000",
    boxShadow: "none",
  };

  const contentArrowStyle = {
    borderRight: isDarkMode ? "7px solid #fff" : "7px solid #000",
  };

  const lineColor = isDarkMode ? "#ffffff" : "#0a0a0a";

  return (
    <VerticalTimeline lineColor={lineColor}>
      {items.map((item) => {
        const project = t.experience.projects[item.key];
        const date =
          "current" in item
            ? `${item.date} ${t.experience.present}`
            : item.date;
        return (
          <VerticalTimelineElement
            key={item.key}
            className="vertical-timeline-element--work"
            date={date}
            iconStyle={{ background: item.color, color: "#fff" }}
            icon={item.icon}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
          >
            <h3 className="vertical-timeline-element-title">
              {project.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {project.subtitle}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {project.location}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full border border-gray-700 dark:border-gray-300 text-gray-800 dark:text-white bg-white dark:bg-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mb-2">{project.description}</p>

            {"achievements" in project && project.achievements && (
              <>
                <p className="mb-2">
                  <strong>{t.experience.achievements}</strong>
                </p>
                <ul className="list-disc list-inside mb-2">
                  {project.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </>
            )}

            {"clients" in item && (
              <>
                <p className="mt-4 mb-2">
                  <strong>{t.experience.clients}</strong>
                </p>
                <ul className="space-y-4">
                  {item.clients.map((client) => {
                    const c = t.experience.clientProjects[client.key];
                    return (
                      <li key={client.key}>
                        <p className="font-semibold">{c.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {c.location}
                        </p>
                        <p className="my-1">{c.description}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {client.techs.join(" · ")}
                        </p>
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 dark:text-blue-400 hover:underline inline-block"
                        >
                          {t.experience.visit}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default ProjectsTimeline;
