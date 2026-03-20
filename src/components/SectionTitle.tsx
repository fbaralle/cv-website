"use client";

import { motion } from "motion/react";

export default function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <span className="font-mono text-sm text-accent">{number}</span>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </motion.div>
  );
}
