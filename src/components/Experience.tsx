"use client";

import { motion } from "motion/react";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

interface Job {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tech: string[];
}

const jobs: Job[] = [
  {
    title: "Senior Software Engineer",
    company: "Webflow",
    companyUrl: "https://webflow.com",
    period: "Feb 2026 — Present",
    location: "San Francisco, USA — Remote",
    description:
      "Contributing to the Webflow Cloud project.",
    bullets: [],
    tech: [
      "Next.js", "React.js", "TypeScript", "Node.js", "Docker", "Kubernetes",
      "PostgreSQL", "MongoDB", "AWS", "Cloudflare", "Pulumi",
      "Claude Code", "ChatGPT", "Cursor", "Glean",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Forgd",
    companyUrl: "https://forgd.com",
    period: "May 2025 — Feb 2026",
    location: "New York, USA — Remote",
    description:
      "Worked on a crypto BI platform focused on large-scale data ingestion, analytics, and reliability.",
    bullets: [
      "Database architecture design and optimizations for time-based relational DBs.",
      "Identified and fixed a critical ETL and indexing failure that corrupted large volumes of historical data; wrote migrations to repair terabytes of corrupted data in TimescaleDB and rebuilt feeding pipelines.",
      "Improved system architecture (event-based), data reliability, query performance, and system observability across the platform.",
      "Contributed across backend and frontend, with focus on ETL pipelines and event-driven systems.",
      "Built and maintained CI/CD pipelines and comprehensive test coverage (unit, integration, E2E).",
    ],
    tech: [
      "TypeScript", "React.js", "Next.js", "Nest.js", "Node.js", "Nuxt.js", "Vue.js",
      "Docker", "PostgreSQL", "Timescale", "Redis", "BullMQ", "Kafka", "GitHub Actions",
    ],
  },
  {
    title: "Lead Full Stack Software Engineer",
    company: "eOracle",
    companyUrl: "https://eoracle.io",
    period: "Feb 2024 — May 2025",
    location: "Tel Aviv, Israel — Remote",
    description:
      "Core contributor and technical lead for an Oracle network secured by Ethereum and built with EigenLayer.",
    bullets: [
      "Led the project from inception to launch, owning architecture and delivery of the Feeds Dashboard App (data.eoracle.io) — real-time and historical price data for all supported symbols.",
      "Designed and developed frontend and backend systems for the successful EO token launch.",
      "Built and maintained essential software running on data operator nodes and various backend services.",
      "Established CI/CD workflows and testing strategies for blockchain protocols using Foundry, Docker, and Kubernetes.",
    ],
    tech: [
      "TypeScript", "React.js", "Next.js", "Nest.js", "Solidity", "Foundry", "Ethers.js", "Viem",
      "Docker", "PostgreSQL", "Redis", "MongoDB", "Helm", "Argo CD", "Kafka", "Kubernetes", "AWS",
    ],
  },
  {
    title: "Web3 Blockchain Full Stack Software Engineer",
    company: "JPG Store Inc.",
    companyUrl: "https://jpg.store",
    period: "May 2022 — Aug 2024",
    location: "New York, USA — Remote",
    description:
      "Contributed as Blockchain Engineer on the largest NFT decentralized marketplace in the Cardano blockchain (+1M users).",
    bullets: [
      "Engineered and optimized the transaction engine algorithm, handling millions of blockchain transactions per month.",
      "Improved complex database queries causing bottlenecks — achieved 60% API response time reduction on high-traffic endpoints.",
      "Reduced frontend bundle size and network usage, improving load times and bandwidth efficiency.",
      "Built backend services for blockchain event processing, data indexing, and smart contract interactions.",
    ],
    tech: [
      "Node.js", "Nest.js", "Fastify", "PostgreSQL", "Redis", "Elastic Search", "GCP", "Next.js", "React.js", "Cardano",
    ],
  },
  {
    title: "React.js / Node.js Full Stack Developer",
    company: "Avenue Code",
    companyUrl: "https://avenuecode.com",
    period: "Sep 2021 — May 2022",
    location: "San Francisco, USA — Remote (Contract)",
    description:
      "Contributed to a large-scale ecommerce platform (Backcountry marketplace) serving millions of users.",
    bullets: [
      "Participated in the migration and modernization of a high-traffic ecommerce application.",
      "Achieved performance improvements, accessibility, and SEO, directly impacting business metrics.",
      "Worked closely with distributed teams in an enterprise environment.",
    ],
    tech: [
      "TypeScript", "React.js", "Next.js", "Nest.js", "Node.js", "PostgreSQL", "GraphQL", "Jest", "AWS",
    ],
  },
  {
    title: "Full Stack Software Developer",
    company: "XOOR",
    companyUrl: "https://xoor.io",
    period: "May 2019 — Sep 2021",
    location: "Argentina",
    description:
      "Worked on multiple web and mobile products across fintech, media, and enterprise domains.",
    bullets: [
      "Omni (Costa Rica): React Native super app for payments, insurance, mobility, and ride-hailing.",
      "Claro Video Argentina: Video streaming platform for Latin America's largest telecom provider.",
      "Pluto TV: Mobile app for live and on-demand streaming.",
      "Internal tools, insurance & banking systems, and advertising scheduling platforms.",
    ],
    tech: [
      "TypeScript", "React.js", "React Native", "Next.js", "Node.js", "Nest.js", "GraphQL",
      "PostgreSQL", "AWS", "Azure", "MongoDB",
    ],
  },
];

export default function Experience() {
  return (
    <AnimatedSection>
      <SectionTitle number="02" title="Work Experience" />
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-10">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              className="relative pl-8"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-accent -translate-x-[3.5px]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-base font-semibold text-foreground">
                  {job.title}{" "}
                  <span className="text-muted font-normal">at </span>
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-accent">{job.company}</span>
                  )}
                </h3>
                <span className="text-sm text-muted font-mono shrink-0">
                  {job.period}
                </span>
              </div>
              <p className="text-xs text-muted mb-3">{job.location}</p>
              <p className="text-sm text-foreground/80 mb-3">
                {job.description}
              </p>
              <ul className="space-y-1.5 mb-4">
                {job.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-sm text-foreground/70 flex gap-2"
                  >
                    <span className="text-accent mt-1.5 shrink-0">
                      <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent/80 border border-accent/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
