import { motion } from 'framer-motion';
import {
  MapPin,
  Download,
  Eye,
  Mail,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 md:py-28 overflow-hidden"
    >
      {/* Subtle modern background accents (No heavy glowing or cheesy effects) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full Stack &amp; Frontend Roles</span>
            </div>

            {/* Location & Role Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                {personalInfo.location}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-indigo-500 shrink-0" />
                MERN Stack Specialist
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500">
                {personalInfo.name}
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 mt-2 font-mono">
                Full Stack Developer
              </span>
            </h1>

            {/* Tagline */}
            <div className="border-l-2 border-indigo-500/60 pl-4 my-2">
              <p className="text-base sm:text-lg italic font-medium text-indigo-600 dark:text-indigo-400">
                "{personalInfo.tagline}"
              </p>
            </div>

            {/* Short Introduction */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {personalInfo.intro}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 shadow-lg shadow-indigo-600/25 transition-all duration-200 text-sm sm:text-base"
              >
                <Eye className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="Anamika_Bharti_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 border border-slate-300 dark:border-slate-700 shadow-xs transition-all duration-200 text-sm sm:text-base"
                  title="Download Resume PDF directly"
                >
                  <Download className="w-4 h-4 text-indigo-500" />
                  <span>Download Resume</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="hidden sm:inline-flex items-center justify-center p-3.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                  title="Preview resume online"
                  aria-label="Preview resume"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Connect:
              </span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-4/5 max-w-full">
              {/* Background gradient frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-sky-400 to-indigo-600 transform rotate-2 scale-[1.02] opacity-80 dark:opacity-60 blur-xs transition-transform duration-500 group-hover:rotate-0" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt="Anamika Bharti - Full Stack Developer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle bottom gradient overlay for depth */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-5">
                  <div>
                    <p className="text-white font-bold text-base leading-snug drop-shadow-sm">
                      Anamika Bharti
                    </p>
                    <p className="text-indigo-200 text-xs font-medium drop-shadow-xs">
                      B.Tech CSE '26 • Bengaluru
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: MERN Stack */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-xl border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                  MERN
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                    Core Focus
                  </p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
                    Full Stack Apps
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Academic Excellence */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-5 -right-3 sm:-right-6 px-4 py-2.5 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-xl border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                    B.Tech CSE
                  </p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
                    8.5 CGPA
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs font-medium text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            <span>Explore Portfolio</span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center p-1 group-hover:border-indigo-500 transition-colors">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-indigo-500"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
