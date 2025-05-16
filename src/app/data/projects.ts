export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "Mi Portafolio",
    description: "Portafolio hecho con Next.js, Tailwind y TypeScript.",
    image: "/proyectos/proyecto1.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/usuario/mi-portafolio",
    demo: "https://mi-portafolio.vercel.app",
  },
  // más proyectos…
];
