"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "@/lib/i18n";
import { SocialIcons } from "@/components/brutalist/SocialIcons";

export function Footer() {
  const { t } = useTranslations();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.footer
      ref={ref}
      id="footer"
      className="bg-black text-white border-t border-neutral-800"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-6">
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          {t.footer.copyright}
        </span>
        <div className="flex items-center gap-6">
          <SocialIcons size="w-5 h-5" />
        </div>
      </div>
    </motion.footer>
  );
}
