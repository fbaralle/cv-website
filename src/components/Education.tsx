"use client";

import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <AnimatedSection>
      <SectionTitle number="04" title="Education" />
      <div className="p-5 rounded-xl bg-surface border border-border">
        <h3 className="text-base font-semibold text-foreground">
          Bachelor&apos;s Degree in Acoustics and Sound Engineering
        </h3>
        <p className="text-sm text-accent mt-1">ISM &mdash; UNL</p>
        <p className="text-xs text-muted mt-1">
          2020 &middot; Santa Fe, Argentina
        </p>
      </div>
    </AnimatedSection>
  );
}
