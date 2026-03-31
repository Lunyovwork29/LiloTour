"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl space-y-4"
    >
      <p className="inline-flex rounded-full border border-border bg-surface px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-muted md:text-lg">{description}</p>
    </motion.div>
  );
}
