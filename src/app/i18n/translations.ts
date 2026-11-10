export type Lang = "en" | "es";

type Project = {
  title: string;
  subtitle: string;
  location: string;
  description: string;
  achievements?: string[];
};

type Client = { title: string; location: string; description: string };

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
    languagesTitle: string;
    spanish: string;
    english: string;
  };
  skills: { title: string; subtitle: string };
  experience: {
    title: string;
    present: string;
    achievements: string;
    visit: string;
    clients: string;
    projects: {
      huemul: Project;
      futbolink: Project;
      mate42: Project;
    };
    clientProjects: {
      fibrazo: Client;
      skybrary: Client;
      empatico: Client;
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
      projects: "Experience",
      contact: "Contact",
      label: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    role: "Full Stack Developer",
    theme: { light: "☀️ Light", dark: "🌙 Dark" },
    hero: {
      hello: "Hello!",
      name: "I'm Mirko Perez",
      title: "Full Stack Developer",
      tagline:
        "I build scalable web apps and enterprise integrations (CRM, ERP, Odoo), with AI-assisted development workflows.",
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
      languagesTitle: "Languages 🌎",
      spanish: "Spanish: native",
      english: "English: intermediate (B1)",
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
      clients: "Client projects:",
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
        mate42: {
          title: "42Mate",
          subtitle: "Full Stack Developer (SSR) · promoted from Junior Frontend",
          location: "Chaco, Argentina",
          description:
            "Product engineering for international clients (education, telecom), from frontend to Laravel and Odoo integrations.",
          achievements: [
            "Migrated a shared React component platform to Vite and standardized the codebase with ESLint and Prettier, improving performance, developer experience and review speed.",
            "Moved global state from Context API to Redux; built features with React, Next.js and TypeScript consuming REST APIs.",
            "Developed Laravel–Odoo backend integrations to automate business workflows; validated a React Native (Expo) proof of concept.",
            "Promoted after delivering an admin system for EA with minimal supervision; resolved iOS/Android cross-platform issues.",
          ],
        },
      },
      clientProjects: {
        fibrazo: {
          title: "Fibrazo Admin Panel",
          location: "Fibrazo – Colombian Internet Service Provider",
          description:
            "Admin panel for client management, messaging and infrastructure control, with Laravel Blade, jQuery and scheduled message delivery.",
        },
        skybrary: {
          title: "Skybrary",
          location: "Reading Is Fundamental – Digital Library for Children",
          description:
            "Interactive digital library of eBooks and educational videos for children, on web and mobile.",
        },
        empatico: {
          title: "Empatico",
          location: "Builders Movement – Global Educational Platform",
          description:
            "Free platform connecting classrooms worldwide to build empathy; REST APIs with Laravel and Next.js and a dynamic content search.",
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
      projects: "Experiencia",
      contact: "Contacto",
      label: "Navegación principal",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    role: "Desarrollador Full Stack",
    theme: { light: "☀️ Claro", dark: "🌙 Oscuro" },
    hero: {
      hello: "¡Hola!",
      name: "Soy Mirko Perez",
      title: "Desarrollador Full Stack",
      tagline:
        "Creo aplicaciones web escalables e integraciones empresariales (CRM, ERP, Odoo), con flujos de desarrollo asistido por IA.",
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
      languagesTitle: "Idiomas 🌎",
      spanish: "Español: nativo",
      english: "Inglés: intermedio (B1)",
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
      clients: "Proyectos para clientes:",
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
        mate42: {
          title: "42Mate",
          subtitle: "Full Stack Developer (SSR) · ascendido desde Frontend Junior",
          location: "Chaco, Argentina",
          description:
            "Desarrollo de producto para clientes internacionales (educación, telecomunicaciones), desde frontend hasta Laravel e integraciones con Odoo.",
          achievements: [
            "Migré una plataforma compartida de componentes React a Vite y estandaricé el código con ESLint y Prettier, mejorando el rendimiento, la experiencia de desarrollo y la velocidad de revisión.",
            "Pasé el estado global de Context API a Redux; desarrollé funcionalidades con React, Next.js y TypeScript consumiendo APIs REST.",
            "Desarrollé integraciones backend Laravel–Odoo para automatizar flujos de negocio; validé una prueba de concepto en React Native (Expo).",
            "Fui ascendido tras entregar un sistema de administración para EA con mínima supervisión; resolví problemas multiplataforma en iOS y Android.",
          ],
        },
      },
      clientProjects: {
        fibrazo: {
          title: "Panel de administración Fibrazo",
          location: "Fibrazo – Proveedor de internet colombiano",
          description:
            "Panel de administración para gestión de clientes, mensajería y control de infraestructura, con Laravel Blade, jQuery y envío programado de mensajes.",
        },
        skybrary: {
          title: "Skybrary",
          location: "Reading Is Fundamental – Biblioteca digital para niños",
          description:
            "Biblioteca digital interactiva de eBooks y videos educativos para niños, en web y móvil.",
        },
        empatico: {
          title: "Empatico",
          location: "Builders Movement – Plataforma educativa global",
          description:
            "Plataforma gratuita que conecta aulas de todo el mundo para fomentar la empatía; APIs REST con Laravel y Next.js y búsqueda dinámica de contenido.",
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
