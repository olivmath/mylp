"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.footer
      ref={ref}
      id="footer"
      className="bg-[var(--background)] text-[var(--foreground)] border-t border-neutral-800"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center px-6 md:px-12 lg:px-16 py-8">
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
          olivmath &copy; 2020
        </span>
      </div>
    </motion.footer>
  );
}
