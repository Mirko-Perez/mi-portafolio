"use client";

import { useEffect } from "react";
import { IconType } from "react-icons";
import {
  FaCss3Alt,
  FaHtml5,
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
} from "react-icons/si";
import styles from "@/app/styles/SkillsOrbit.module.css";

const skills: { icon: IconType; label: string }[] = [
  { icon: FaReact, label: "React" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: FaPhp, label: "PHP" },
  { icon: SiLaravel, label: "Laravel" },
  { icon: SiMysql, label: "MySQL" },
  { icon: SiPostman, label: "Postman" },
  { icon: FaCss3Alt, label: "CSS" },
  { icon: FaHtml5, label: "HTML" },
  { icon: FaJs, label: "JavaScript" },
  { icon: FaGithub, label: "GitHub" },
  { icon: SiSass, label: "Sass" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
];

export default function SkillsOrbit() {
  useEffect(() => {
    const style = document.documentElement.style;
    style.setProperty("--quantity", skills.length.toString());
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.inner}
        style={{ ["--quantity"]: skills.length } as React.CSSProperties}
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
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
