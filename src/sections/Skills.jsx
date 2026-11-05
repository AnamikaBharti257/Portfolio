import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Database,
  Wrench,
  HeartHandshake,
  Info
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  Code2: Code2,
  Cpu: Cpu,
  Database: Database,
  Wrench: Wrench,
  HeartHandshake: HeartHandshake
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Skills &amp; Technology Stack"
          subtitle="A transparent overview of the languages, frameworks, databases, and developer tools I work with, categorized by practical experience level."
        />

        {/* Experience Level Legend */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
            <Info className="w-4 h-4 text-indigo-500 shrink-0" />
            <span>Honest Experience Distinctions:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Hands-on Experience (Projects Built)
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 border border-sky-300 dark:border-sky-800">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Familiar / Fundamental Knowledge
            </span>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, groupIdx) => {
            const Icon = categoryIcons[group.icon] || Code2;
            const isSoftSkills = group.category.includes('Soft');

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
                className={`bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:shadow-md transition-all duration-300 ${
                  isSoftSkills ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                      {group.category}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {group.skills.length} skills listed
                    </p>
                  </div>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const isHandsOn = skill.level === 'Hands-on Experience';
                    const isCore = skill.level === 'Core Strength';

                    return (
                      <div
                        key={skill.name}
                        className={`group relative flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                          isHandsOn
                            ? 'bg-slate-50 dark:bg-slate-800/80 hover:bg-indigo-50/70 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80'
                            : isCore
                            ? 'bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80'
                            : 'bg-slate-50/50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 border border-dashed border-slate-300 dark:border-slate-700'
                        }`}
                      >
                        <span className="font-semibold">{skill.name}</span>

                        {isHandsOn && (
                          <span
                            className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0"
                            title="Hands-on Experience"
                          />
                        )}
                        {!isHandsOn && !isCore && (
                          <span
                            className="inline-block w-2 h-2 rounded-full bg-sky-400 shrink-0"
                            title="Familiar"
                          />
                        )}
                        {isCore && (
                          <span
                            className="inline-block w-2 h-2 rounded-full bg-indigo-500 shrink-0"
                            title="Core Strength"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
