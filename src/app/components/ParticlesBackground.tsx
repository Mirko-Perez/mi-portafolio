"use client";

import { useTheme } from "next-themes";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useState } from "react";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const { theme } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [options, setOptions] = useState<any>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const isDark = theme === "dark";
    setOptions({
      fullScreen: { enable: false },
      background: { color: isDark ? "#0a0a0a" : "#fff" },
      fpsLimit: 60,
      particles: {
        number: { value: 50, density: { enable: true, area: 800 } },
        color: { value: isDark ? "#60a5fa" : "#3b82f6" },
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "bounce" },
          bounce: false,
        },
        links: {
          enable: true,
          distance: 120,
          color: isDark ? "#60a5fa" : "#3b82f6",
          opacity: 0.2,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: false },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.4 } },
        },
      },
      detectRetina: true,
    });
  }, [theme]);

  if (!options) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
