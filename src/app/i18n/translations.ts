export type Lang = "en" | "es";

type Project = {
  title: string;
  subtitle: string;
  location: string;
  description: string;
  achievements?: string[];
};

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
    label: string;
    openMenu: string;
    closeMenu: string;
  };
  role: string;
  theme: { light: string; dark: string };
  hero: {
    hello: string;
    name: string;
    title: string;
    tagline: string;
    contactMe: string;
    cv: string;
    scrollAria: string;
    sectionAria: string;
  };
  about: {
    title: string;
    body: string;
    educationTitle: string;
    teclabName: string;
    teclabDegree: string;
    utnName: string;
    utnDegree: string;
  };
  skills: { title: string; subtitle: string };
  experience: {
    title: string;
    present: string;
    achievements: string;
    visit: string;
    projects: {
      huemul: Project;
      futbolink: Project;
      fibrazo: Project;
      skybrary: Project;
      empatico: Project;
    };
  };
  contact: {
    title: string;
    intro: string;
    name: string;
    namePlaceholder: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
};

export const translations: Record<Lang, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      label: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    role: "Software Developer",
    theme: { light: "☀️ Light", dark: "🌙 Dark" },
    hero: {
      hello: "Hello!",
      name: "I'm Mirko Perez",
      title: "Full Stack Developer",
      tagline:
        "Passionate about building modern, fast, and accessible web experiences.",
      contactMe: "Contact Me",
      cv: "CV",
      scrollAria: "Scroll to About Me section",
      sectionAria: "Main introduction section",
    },
    about: {
      title: "About Me",
      body: `Full Stack Software Engineer with 4+ years of experience building scalable web applications and enterprise systems. I enjoy working in dynamic, multidisciplinary teams, contributing innovative and collaborative solutions.

I excel at building clean, maintainable software using Ruby on Rails, Node.js, React, PostgreSQL, and Docker, with a focus on clean architecture and system integrations.

I have solid experience integrating APIs, automating business workflows, and adopting AI-assisted development practices. Currently, I am seeking a new opportunity where I can contribute my knowledge and continue growing professionally.`,
      educationTitle: "Education 🎓",
      teclabName: "Teclab Instituto Técnico Superior",
      teclabDegree:
        "Técnico Superior en Programación – Buenos Aires, Argentina (03/2024 – 01/2026)",
      utnName:
        "Universidad Tecnológica Nacional - Facultad Regional Resistencia, Chaco",
      utnDegree: "Systems Engineering (2017 - 2020, incomplete)",
    },
    skills: {
      title: "Technologies & Tools",
      subtitle:
        "These are the technologies and tools I've worked with to build scalable and performant web applications.",
    },
    experience: {
      title: "Experience",
      present: "Present",
      achievements: "Personal Achievements:",
      visit: "Visit Website",
      projects: {
        huemul: {
          title: "Huemul ERP & CRM Integration",
          subtitle: "Techsed – SSR Full Stack · Contractor",
          location: "La Plata, Buenos Aires",
          description:
            "Develop and maintain enterprise applications using Ruby on Rails, React, and PostgreSQL, contributing to system integrations, backend services, and scalable business solutions throughout the software development lifecycle.",
          achievements: [
            "Contributed to the integration of two CRM platforms by developing backend services, REST APIs, and data migration workflows.",
            "Developed and maintained enterprise features for the Huemul ERP platform using Ruby on Rails, React, and PostgreSQL.",
            "Integrated the platform with Odoo to automate business processes and improve operational efficiency.",
            "Integrated AI-assisted development workflows using MCP, structured skills/specs, and contextual knowledge management tools to accelerate software delivery and improve code quality.",
          ],
        },
        futbolink: {
          title: "FutboLink Platform Redesign",
          subtitle: "FutboLink – SSR Full Stack · Contractor",
          location: "Lecce, Apulia, Italia",
          description:
            "Led the technical redesign of the company's web platform, driving the migration toward a more maintainable architecture and a mobile-first user experience.",
        },
        fibrazo: {
          title: "Fibrazo Admin Panel",
          subtitle: "42mate – SSR. Software Developer",
          location: "Fibrazo – Colombian Internet Service Provider",
          description:
            "Fibrazo is a Colombian internet service provider offering high-speed fiber optic plans in various regions. The admin panel supports internal operations such as client management, messaging, and infrastructure control.",
          achievements: [
            "Improved admin panel interfaces using Laravel Blade templates and jQuery.",
            "Integrated automated message delivery using Laravel task scheduling (cron jobs).",
            "Collaborated with the backend team to enhance internal workflows and user messaging tools.",
          ],
        },
        skybrary: {
          title: "Skybrary",
          subtitle: "42mate – SSR. Software Developer",
          location: "Reading Is Fundamental – Digital Library for Children",
          description:
            "Skybrary is an interactive digital library offering a vast collection of eBooks and educational videos aimed at fostering a love for reading among children. Accessible via web and mobile devices, it provides an engaging platform for young learners.",
          achievements: [
            "Implemented code quality standards by integrating Prettier and ESLint, ensuring consistent and maintainable code across the development team.",
            "Contributed to the migration from useContext to Redux for state management, enhancing scalability and performance of the application.",
          ],
        },
        empatico: {
          title: "Empatico",
          subtitle: "42mate – JR. Frontend Developer",
          location: "Builders Movement – Global Educational Platform",
          description:
            "Empático is a free digital platform that connects classrooms worldwide to foster empathy and intercultural understanding among students. Through online activities and games, it offers educators and learners opportunities to engage in experiences that develop essential social-emotional skills.",
          achievements: [
            "Developed and consumed RESTful APIs using Laravel and Next.js.",
            "Implemented a dynamic search feature to enhance content accessibility within the platform.",
          ],
        },
      },
    },
    contact: {
      title: "Contact",
      intro:
        "Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send the message. Please try again later.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      label: "Navegación principal",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    role: "Desarrollador de Software",
    theme: { light: "☀️ Claro", dark: "🌙 Oscuro" },
    hero: {
      hello: "¡Hola!",
      name: "Soy Mirko Perez",
      title: "Desarrollador Full Stack",
      tagline:
        "Apasionado por crear experiencias web modernas, rápidas y accesibles.",
      contactMe: "Contáctame",
      cv: "CV",
      scrollAria: "Ir a la sección Sobre mí",
      sectionAria: "Sección principal de introducción",
    },
    about: {
      title: "Sobre mí",
      body: `Ingeniero de Software Full Stack con más de 4 años de experiencia creando aplicaciones web escalables y sistemas empresariales. Disfruto trabajar en equipos dinámicos y multidisciplinarios, aportando soluciones innovadoras y colaborativas.

Me destaco construyendo software limpio y mantenible con Ruby on Rails, Node.js, React, PostgreSQL y Docker, con foco en arquitectura limpia e integraciones de sistemas.

Tengo sólida experiencia integrando APIs, automatizando flujos de negocio y adoptando prácticas de desarrollo asistido por IA. Actualmente busco una nueva oportunidad donde aportar mis conocimientos y seguir creciendo profesionalmente.`,
      educationTitle: "Educación 🎓",
      teclabName: "Teclab Instituto Técnico Superior",
      teclabDegree:
        "Técnico Superior en Programación – Buenos Aires, Argentina (03/2024 – 01/2026)",
      utnName:
        "Universidad Tecnológica Nacional - Facultad Regional Resistencia, Chaco",
      utnDegree: "Ingeniería en Sistemas (2017 - 2020, incompleta)",
    },
    skills: {
      title: "Tecnologías y Herramientas",
      subtitle:
        "Estas son las tecnologías y herramientas con las que trabajé para crear aplicaciones web escalables y de alto rendimiento.",
    },
    experience: {
      title: "Experiencia",
      present: "Actualidad",
      achievements: "Logros personales:",
      visit: "Visitar sitio web",
      projects: {
        huemul: {
          title: "Integración ERP y CRM Huemul",
          subtitle: "Techsed – Full Stack SSR · Contratista",
          location: "La Plata, Buenos Aires",
          description:
            "Desarrollo y mantengo aplicaciones empresariales con Ruby on Rails, React y PostgreSQL, contribuyendo a integraciones de sistemas, servicios backend y soluciones de negocio escalables durante todo el ciclo de desarrollo de software.",
          achievements: [
            "Contribuí a la integración de dos plataformas CRM desarrollando servicios backend, APIs REST y flujos de migración de datos.",
            "Desarrollé y mantuve funcionalidades empresariales de la plataforma ERP Huemul con Ruby on Rails, React y PostgreSQL.",
            "Integré la plataforma con Odoo para automatizar procesos de negocio y mejorar la eficiencia operativa.",
            "Incorporé flujos de desarrollo asistido por IA con MCP, skills/specs estructurados y herramientas de gestión de conocimiento contextual para acelerar las entregas y mejorar la calidad del código.",
          ],
        },
        futbolink: {
          title: "Rediseño de la plataforma FutboLink",
          subtitle: "FutboLink – Full Stack SSR · Contratista",
          location: "Lecce, Apulia, Italia",
          description:
            "Lideré el rediseño técnico de la plataforma web de la empresa, impulsando la migración hacia una arquitectura más mantenible y una experiencia de usuario mobile-first.",
        },
        fibrazo: {
          title: "Panel de administración Fibrazo",
          subtitle: "42mate – Desarrollador de Software SSR",
          location: "Fibrazo – Proveedor de internet colombiano",
          description:
            "Fibrazo es un proveedor de internet colombiano que ofrece planes de fibra óptica de alta velocidad en varias regiones. El panel de administración da soporte a operaciones internas como gestión de clientes, mensajería y control de infraestructura.",
          achievements: [
            "Mejoré las interfaces del panel de administración con plantillas Laravel Blade y jQuery.",
            "Integré el envío automático de mensajes con tareas programadas de Laravel (cron jobs).",
            "Colaboré con el equipo backend para mejorar los flujos internos y las herramientas de mensajería a usuarios.",
          ],
        },
        skybrary: {
          title: "Skybrary",
          subtitle: "42mate – Desarrollador de Software SSR",
          location: "Reading Is Fundamental – Biblioteca digital para niños",
          description:
            "Skybrary es una biblioteca digital interactiva con una gran colección de eBooks y videos educativos orientados a fomentar el amor por la lectura en los niños. Accesible desde web y dispositivos móviles, ofrece una plataforma atractiva para los más pequeños.",
          achievements: [
            "Implementé estándares de calidad de código integrando Prettier y ESLint, logrando un código consistente y mantenible en todo el equipo.",
            "Contribuí a la migración de useContext a Redux para el manejo de estado, mejorando la escalabilidad y el rendimiento de la aplicación.",
          ],
        },
        empatico: {
          title: "Empatico",
          subtitle: "42mate – Desarrollador Frontend JR.",
          location: "Builders Movement – Plataforma educativa global",
          description:
            "Empático es una plataforma digital gratuita que conecta aulas de todo el mundo para fomentar la empatía y la comprensión intercultural entre estudiantes. A través de actividades y juegos en línea, ofrece a docentes y alumnos experiencias que desarrollan habilidades socioemocionales esenciales.",
          achievements: [
            "Desarrollé y consumí APIs RESTful con Laravel y Next.js.",
            "Implementé una búsqueda dinámica para mejorar la accesibilidad del contenido dentro de la plataforma.",
          ],
        },
      },
    },
    contact: {
      title: "Contacto",
      intro:
        "¿Tenés una pregunta o querés trabajar juntos? Completá el formulario y te respondo lo antes posible.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      message: "Mensaje",
      messagePlaceholder: "Escribí tu mensaje acá...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      error: "No se pudo enviar el mensaje. Intentá de nuevo más tarde.",
    },
  },
};
