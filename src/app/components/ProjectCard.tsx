"use client";

import Image from "next/image";
import { Project } from "@/app/data/projects";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  link,
  demo,
}: Project) {
  return (
    <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 p-5 hover:scale-105 transition-transform duration-300">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="rounded-lg w-full object-cover"
      />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Demo
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
