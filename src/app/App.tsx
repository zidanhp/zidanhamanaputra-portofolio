import { ThemeProvider }        from "./ThemeContext";
import { Navbar }               from "./components/Navbar";
import { HeroSection }          from "./components/HeroSection";
import { AboutSection }         from "./components/AboutSection";
import { SkillsSection }        from "./components/SkillsSection";
import { ContributionsSection } from "./components/ContributionsSection";
import { CaseStudySection }     from "./components/CaseStudySection";
import { ShowcaseSection }      from "./components/ShowcaseSection";
import { ContactSection }       from "./components/ContactSection";

function Rule() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8">
      <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--border-subtle),transparent)" }} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh", background: "var(--bg-page)" }}>
        <Navbar />
        <HeroSection />
        <Rule />
        <AboutSection />
        <Rule />
        <SkillsSection />
        <Rule />
        <ContributionsSection />
        <Rule />
        <CaseStudySection />
        <Rule />
        <ShowcaseSection />
        <Rule />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}
