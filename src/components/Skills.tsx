"use client";

import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 80 },
      { name: "GraphQL", level: 80 },
      { name: "Vitest / Playwright", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Nest.js", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 80 },
      { name: "Elastic Search", level: 70 },
      { name: "Timescale", level: 70 },
    ],
  },
  {
    category: "Blockchain",
    skills: [
      { name: "Solidity", level: 80 },
      { name: "Foundry", level: 75 },
      { name: "DeFi Protocols", level: 80 },
      { name: "EVM / UTXO", level: 80 },
      { name: "Ethers.js / Viem", level: 85 },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "AWS / GCP", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Kafka", level: 70 },
      { name: "Helm / Argo CD", level: 65 },
    ],
  },
];

export default function Skills() {
  return (
    <AnimatedSection>
      <SectionTitle number="03" title="Technical Arsenal" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            className="p-5 rounded-xl bg-surface border border-border"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-accent mb-4 font-mono uppercase tracking-wider">
              {group.category}
            </h3>
            <div className="space-y-3">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground/80">{skill.name}</span>
                  </div>
                  <div className="h-1 rounded-full bg-border overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent-dim to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
