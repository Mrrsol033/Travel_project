"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./style.module.css";

export default function MotionCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 150 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    const enter = () => setIsActive(true);
    const leave = () => setIsActive(false);

    window.addEventListener("mousemove", move);

    const interactive = Array.from(
      document.querySelectorAll("a,button,input,textarea,[data-cursor-interact]")
    );

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [x, y]);

  return (
    <motion.div
      className={`${styles.cursor} ${isActive ? styles.active : ""}`}
      style={{ x: sx, y: sy }}
      aria-hidden
    />
  );
}
