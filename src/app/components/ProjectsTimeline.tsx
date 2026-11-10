"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaLaravel, FaPhp } from "react-icons/fa";
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
    key: "fibrazo",
    date: "2024 – 2025",
    color: "#8892BF",
    icon: <FaPhp />,
    techs: ["Laravel", "PHP", "jQuery", "Blade", "Bootstrap", "MySQL"],
    url: "https://www.fibrazo.com.ar/",
  },
  {
    key: "skybrary",
    date: "2023 – 2024",
    color: "#F05340",
    icon: <FaLaravel />,
    techs: ["React", "TypeScript", "Sass", "Laravel", "Next.js"],
    url: "https://www.skybrary.org/",
  },
  {
    key: "empatico",
    date: "2022 – 2024",
    color: "#61DBFB",
    icon: <FaReact />,
    techs: ["Next.js", "Laravel", "React", "Sass", "MySQL", "Chakra UI"],
    url: "https://empatico.buildersmovement.org/",
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
        const url = "url" in item ? item.url : undefined;
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

            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 mt-2 hover:underline inline-block"
              >
                {t.experience.visit}
              </a>
            )}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default ProjectsTimeline;
