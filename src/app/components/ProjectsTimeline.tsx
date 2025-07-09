"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaLaravel, FaPhp } from "react-icons/fa";

const ProjectsTimeline = () => {
  const { resolvedTheme } = useTheme();
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
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 – 2025"
        iconStyle={{ background: "#8892BF", color: "#fff" }}
        icon={<FaPhp />}
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
      >
        <h3 className="vertical-timeline-element-title">Fibrazo Admin Panel</h3>
        <h4 className="vertical-timeline-element-subtitle">
          42mate – Software Developer
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Fibrazo – Colombian Internet Service Provider
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Laravel", "PHP", "jQuery", "Blade", "Bootstrap", "MySQL"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full border border-gray-700 dark:border-gray-300 text-gray-800 dark:text-white bg-white dark:bg-gray-800"
              >
                {tech}
              </span>
            )
          )}
        </div>

        <p className="mb-2">
          Fibrazo is a Colombian internet service provider offering high-speed
          fiber optic plans in various regions. The admin panel supports
          internal operations such as client management, messaging, and
          infrastructure control.
        </p>

        <p className="mb-2">
          <strong>Personal Achievements:</strong>
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            Improved admin panel interfaces using Laravel Blade templates and
            jQuery.
          </li>
          <li>
            Integrated automated message delivery using Laravel task scheduling
            (cron jobs).
          </li>
          <li>
            Collaborated with the backend team to enhance internal workflows and
            user messaging tools.
          </li>
        </ul>

        <a
          href="https://www.fibrazo.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-2 hover:underline inline-block"
        >
          Visit Website
        </a>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 – 2024"
        iconStyle={{ background: "#F05340", color: "#fff" }}
        icon={<FaLaravel />}
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
      >
        <h3 className="vertical-timeline-element-title">Skybrary</h3>
        <h4 className="vertical-timeline-element-subtitle">
          42mate – Frontend Developer
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Reading Is Fundamental – Digital Library for Children
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "TypeScript", "Sass", "Laravel", "Next.js"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm rounded-full border border-gray-700 dark:border-gray-300 text-gray-800 dark:text-white bg-white dark:bg-gray-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mb-2">
          Skybrary is an interactive digital library offering a vast collection
          of eBooks and educational videos aimed at fostering a love for reading
          among children. Accessible via web and mobile devices, it provides an
          engaging platform for young learners.
        </p>

        <p className="mb-2">
          <strong>Personal Achievements:</strong>
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            Implemented code quality standards by integrating Prettier and
            ESLint, ensuring consistent and maintainable code across the
            development team.
          </li>
          <li>
            Contributed to the migration from useContext to Redux for state
            management, enhancing scalability and performance of the
            application.
          </li>
        </ul>

        <a
          href="https://www.skybrary.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Visit Website
        </a>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 – 2024"
        iconStyle={{ background: "#61DBFB", color: "#fff" }}
        icon={<FaReact />}
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
      >
        <h3 className="vertical-timeline-element-title">Empatico</h3>
        <h4 className="vertical-timeline-element-subtitle">
          42mate – SSR. Software Developer
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Builders Movement – Global Educational Platform
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {["Next.js", "Laravel", "React", "Sass", "MySQL", "Chakra UI"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full border border-gray-700 dark:border-gray-300 text-gray-800 dark:text-white bg-white dark:bg-gray-800"
              >
                {tech}
              </span>
            )
          )}
        </div>

        <p className="mb-2">
          Empático is a free digital platform that connects classrooms worldwide
          to foster empathy and intercultural understanding among students.
          Through online activities and games, it offers educators and learners
          opportunities to engage in experiences that develop essential
          social-emotional skills.
        </p>

        <p className="mb-2">
          <strong>Personal Achievements:</strong>
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            Developed and consumed RESTful APIs using Laravel and Next.js.
          </li>
          <li>
            Implemented a dynamic search feature to enhance content
            accessibility within the platform.
          </li>
        </ul>

        <a
          href="https://empatico.buildersmovement.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500  mt-2 inline-block hover:underline"
        >
          Visit Website
        </a>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default ProjectsTimeline;
