// components/FadeInWhenVisible.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInWhenVisible({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
