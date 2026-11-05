import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Globe,
  Layout,
  Server,
  Database,
  Sparkles
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutContent, services, educationList } from '../data/portfolioData';

const iconMap = {
  Globe: Globe,
  Layout: Layout,
  Server: Server,
  Database: Database
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Engineering Solutions with Modern Technologies"
          subtitle="A passionate full stack developer committed to writing clean code, building responsive interfaces, and architecting scalable backend APIs."
        />

        {/* Narrative & Profile Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left: Two Paragraphs Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xs"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                My Story &amp; Professional Philosophy
              </h3>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>{aboutContent.paragraph1}</p>
              <p>{aboutContent.paragraph2}</p>
            </div>

            {/* Quick highlights bar */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <p className="text-xs text-slate-400 font-medium">Specialization</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                  MERN Stack
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <p className="text-xs text-slate-400 font-medium">B.Tech CGPA</p>
                <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">
                  8.5 / 10
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 col-span-2 sm:col-span-1">
                <p className="text-xs text-slate-400 font-medium">Current Status</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                  KodNest Trainee
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Quick Professional Facts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center justify-between">
              <span>Quick Facts</span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-200 font-mono">
                Verified Info
              </span>
            </h3>

            <div className="space-y-4">
              {aboutContent.details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between pb-3 border-b border-white/10 last:border-b-0 last:pb-0"
                >
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-100 text-right max-w-[60%]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education Timeline / Cards */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Education History
              </h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Demonstrated consistency and academic rigor throughout engineering and schooling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
                    {edu.period}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/50">
                    {edu.grade}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {edu.degree}
                </h4>

                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {edu.highlights}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WHAT I DO: 4 Service Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              Capabilities
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
              What I Do
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Specialized expertise across the modern full-stack development spectrum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComp = iconMap[service.icon] || Globe;
              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xl font-bold text-slate-300 dark:text-slate-700 group-hover:text-indigo-500/50 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
