import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 pb-24">
      <Header />
      <div className="space-y-16">
        <Summary />
        <Experience />
        <Skills />
        <Education />
      </div>
      <footer className="mt-20 pt-8 border-t border-border text-center text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} Francisco Baralle</p>
      </footer>
    </main>
  );
}
