"use client";

import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import {
  FaJs,
  FaReact,
  FaPhp,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMysql,
  SiSass,
  SiNextdotjs,
  SiLaravel,
  SiPostman,
  SiTailwindcss,
  SiRubyonrails,
  SiVite,
  SiOdoo,
  SiClaude,
  SiExpo,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiRedux,
  SiGit,
  SiGithubactions,
} from "react-icons/si";
import styles from "@/app/styles/SkillsOrbit.module.css";

const skills: { icon: IconType; label: string; core?: boolean }[] = [
  { icon: FaReact, label: "React", core: true },
  { icon: SiTypescript, label: "TypeScript", core: true },
  { icon: SiNextdotjs, label: "Next.js", core: true },
  { icon: FaPhp, label: "PHP", core: true },
  { icon: SiLaravel, label: "Laravel", core: true },
  { icon: SiMysql, label: "MySQL", core: true },
  { icon: SiPostman, label: "Postman" },
  { icon: FaJs, label: "JavaScript", core: true },
  { icon: FaGithub, label: "GitHub" },
  { icon: SiSass, label: "Sass" },
  { icon: SiTailwindcss, label: "Tailwind CSS", core: true },
  { icon: SiRubyonrails, label: "Ruby on Rails", core: true },
  { icon: SiVite, label: "Vite", core: true },
  { icon: SiOdoo, label: "Odoo", core: true },
  { icon: SiClaude, label: "Claude Code", core: true },
  { icon: SiExpo, label: "React Native" },
  { icon: SiNodedotjs, label: "Node.js", core: true },
  { icon: SiPostgresql, label: "PostgreSQL", core: true },
  { icon: SiDocker, label: "Docker", core: true },
  { icon: SiRedux, label: "Redux" },
  { icon: SiGit, label: "Git", core: true },
  { icon: SiGithubactions, label: "GitHub Actions" },
];

export default function SkillsOrbit() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateMatch = () => setIsMobile(mediaQuery.matches);
    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  const visibleSkills = isMobile ? skills.filter((skill) => skill.core) : skills;

  useEffect(() => {
    const style = document.documentElement.style;
    style.setProperty("--quantity", visibleSkills.length.toString());
  }, [visibleSkills.length]);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.inner}
        style={{ ["--quantity"]: visibleSkills.length } as React.CSSProperties}
      >
        {visibleSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.label}
              className={styles.cardCircle}
              style={{ ["--index"]: index } as React.CSSProperties}
            >
              <div className={styles.imgCircle}>
                <Icon size={48} />
                <p>{skill.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
