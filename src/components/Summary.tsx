"use client";

import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function Summary() {
  return (
    <AnimatedSection>
      <SectionTitle number="01" title="Professional Summary" />
      <div className="text-sm leading-relaxed text-foreground/80 space-y-4 max-w-3xl">
        <p>
          I&apos;m a{" "}
          <span className="text-accent font-medium">
            Software Engineer (Full Stack / Blockchain)
          </span>{" "}
          with <span className="text-foreground font-medium">6+ years of experience</span>{" "}
          building data-intensive web platforms, backend systems, and blockchain
          infrastructure. I&apos;ve worked on products processing{" "}
          <span className="text-foreground font-medium">
            millions of transactions per month
          </span>
          , designing ETL pipelines, indexing systems, and scalable data
          architectures end to end.
        </p>
        <p>
          In the last few years, my work has centered on{" "}
          <span className="text-foreground font-medium">Web3</span>, including
          DeFi protocols, oracle networks, NFT marketplaces, and analytics
          platforms. Currently, I&apos;m working on crypto data and BI systems,
          improving large-scale ETL pipelines and time-series databases. I&apos;m
          looking for{" "}
          <span className="text-accent font-medium">
            senior or lead full stack roles
          </span>{" "}
          where I can own complex systems, work close to product, and build
          reliable, high-impact software.
        </p>
      </div>
    </AnimatedSection>
  );
}
