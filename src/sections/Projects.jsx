import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Maximize2,
  Images,
  ArrowRight,
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import {
  projects,
  additionalProjects,
  projectCategories
} from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filter logic
  const filteredMainProjects = projects.filter((proj) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Web Apps') return proj.category === 'Web Apps';
    if (selectedCategory === 'AI') return proj.category === 'AI';
    if (selectedCategory === 'UI/UX') return proj.category === 'UI/UX';
    if (selectedCategory === 'Data') return proj.subCategory?.includes('Data') || proj.techStack?.includes('MongoDB');
    return false;
  });

  const filteredAdditional = additionalProjects.filter((proj) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Web Apps') return proj.category === 'Web Apps';
    if (selectedCategory === 'UI/UX') return proj.category === 'UI/UX';
    if (selectedCategory === 'Data') return proj.techStack?.includes('MongoDB');
    return false;
  });

  const totalResults = filteredMainProjects.length + filteredAdditional.length;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Work"
          title="Projects &amp; Case Studies"
          subtitle="Real-world applications built with the MERN stack, React, and Machine Learning. Each project reflects end-to-end implementation and architecture."
        />

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Empty state for categories like Mobile if zero projects */}
        {totalResults === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 max-w-xl mx-auto my-8"
          >
            <FolderGit2 className="w-12 h-12 mx-auto text-slate-400 mb-3" />
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              No public projects under "{selectedCategory}" yet
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
              Currently focusing on MERN full-stack applications. Mobile and specialized modules are actively in development.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold hover:bg-indigo-100 transition-colors"
            >
              Show All Projects
            </button>
          </motion.div>
        )}

        {/* Main Projects List (Large Featured Cards) */}
        <div className="space-y-12 lg:space-y-16">
          <AnimatePresence>
            {filteredMainProjects.map((project, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-2xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 group"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isEven ? 'lg:flex-row-reverse' : ''
                      }`}
                  >
                    {/* Project Visual / Screenshot Container */}
                    <div
                      className={`lg:col-span-7 relative bg-slate-950 overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[380px] cursor-pointer ${isEven ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      onClick={() => setActiveModalProject(project)}
                    >
                      <img
                        src={project.coverImage}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover sm:object-contain p-2 sm:p-4 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        loading="lazy"
                      />

                      {/* Hover Overlay with Action Button */}
                      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModalProject(project);
                          }}
                          className="px-4 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:bg-slate-100 transition-colors"
                        >
                          <Maximize2 className="w-4 h-4 text-indigo-600" />
                          <span>View Screenshots &amp; Details</span>
                        </button>
                      </div>

                      {/* Screenshot count badge */}
                      {project.screenshots && project.screenshots.length > 1 && (
                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                          <Images className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{project.screenshots.length} Screenshots</span>
                        </div>
                      )}
                    </div>

                    {/* Project Details */}
                    <div
                      className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'
                        }`}
                    >
                      <div>
                        {/* SubCategory */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            {project.subCategory}
                          </span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            Featured
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                          {project.description}
                        </p>

                        {/* My Contribution Highlight */}
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 mb-5">
                          <p className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            My Contribution:
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
                            {project.contribution}
                          </p>
                        </div>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="ml-auto inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Additional Projects Section */}
        {filteredAdditional.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Additional Projects
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredAdditional.map((proj, idx) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-lg">
                        {proj.number}
                      </span>
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          aria-label={`GitHub repo for ${proj.title}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {proj.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Modal for In-depth Case Study & Full Screenshot Viewer */}
        <ProjectModal
          key={activeModalProject?.id || 'none'}
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
