import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me Section (Narrative, Info, Education, What I Do) */}
        <About />

        {/* 3. Skills Section (Categorized cards, hands-on vs familiar badges) */}
        <Skills />

        {/* 4. Projects Showcase (Filters, featured projects, screenshots, additional projects) */}
        <Projects />

        {/* 5. Experience / Resume (KodNest training timeline, education, certifications) */}
        <Experience onOpenResume={() => setIsResumeOpen(true)} />

        {/* 6. Testimonials (Tasteful recommendations in-progress showcase) */}
        <Testimonials />

        {/* 7. Contact Section (Interactive validated form, direct info, socials) */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Global Interactive Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
