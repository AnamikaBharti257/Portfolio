import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Download,
  Eye,
  Award,
  CheckCircle2,
  FileCheck2,
  Sparkles,
  Info
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experienceList, educationList, personalInfo } from '../data/portfolioData';

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Experience &amp; Education"
          subtitle="A structured overview of my software development training, academic milestones, and hands-on preparation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Software Development Training Experience */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Technical Training Experience
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Structured learning &amp; practical development
                </p>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200 dark:border-indigo-900/60 space-y-8">
              {experienceList.map((exp, idx) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 shadow-sm" />

                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {exp.role}
                    </h4>

                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4">
                      <span className="text-indigo-600 dark:text-indigo-400">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Responsibilities &amp; Practice:
                      </p>
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Education Timeline */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Education Background
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Engineering degree &amp; academic milestones
                </p>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200 dark:border-indigo-900/60 space-y-6">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 shadow-sm" />

                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/50">
                        {edu.grade}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>

                    <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-slate-400 flex items-center gap-1 mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                      {edu.highlights}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Subsection */}
        <div className="mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Certifications &amp; Professional Training
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Transparent disclosure of current and completed coursework
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <Info className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Strict integrity policy: No fabricated certifications</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      Full Stack Java &amp; Web Development Program
                    </h5>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                      In Progress
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    KodNest Technologies, Bengaluru • 2026 Cohort
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                    Comprehensive training covering core Java, object-oriented principles, database management, and web programming standards.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      Computer Science &amp; Engineering Degree Curriculum
                    </h5>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      CGPA 8.5
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Cambridge Institute of Technology, Ranchi • 2022 – 2026
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2">
                    Verified university coursework in Data Structures, Database Systems, Software Engineering, and Computer Networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-8 sm:p-12 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-indigo-200 backdrop-blur-xs mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Verified PDF Document
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Download Anamika Bharti's Resume
              </h3>
              <p className="text-sm text-indigo-100/90 leading-relaxed">
                Contains verified academic history, technical proficiencies in MERN stack, completed projects, and contact coordinates.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={personalInfo.resumeUrl}
                download="Anamika_Bharti_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white text-indigo-900 hover:bg-indigo-50 shadow-lg active:scale-95 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/15 hover:bg-white/20 border border-white/20 active:scale-95 transition-all duration-200"
              >
                <Eye className="w-4 h-4" />
                <span>Preview Document</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
