import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  UserCheck
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (!project?.screenshots?.length) return;
      if (e.key === 'ArrowRight') {
        setActiveImageIdx((prev) => (prev + 1) % project.screenshots.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIdx((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, project]);

  if (!isOpen || !project) return null;

  const currentScreenshot = project.screenshots?.[activeImageIdx] || {
    src: project.coverImage,
    caption: project.title
  };

  const hasMultipleImages = project.screenshots && project.screenshots.length > 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % project.screenshots.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 sticky top-0 z-20 backdrop-blur-xs">
            <div>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                {project.subCategory}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="overflow-y-auto p-6 space-y-6">
            {/* Screenshot Viewer */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
              <div className="aspect-16/10 sm:aspect-16/9 w-full flex items-center justify-center bg-black/40">
                <img
                  src={currentScreenshot.src}
                  alt={currentScreenshot.caption || project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation Arrows if multiple screenshots */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image Caption & Counter */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 flex items-center justify-between text-xs text-slate-200">
                <span className="truncate pr-4 font-medium">
                  {currentScreenshot.caption}
                </span>
                {hasMultipleImages && (
                  <span className="shrink-0 px-2 py-1 rounded-md bg-white/20 font-mono text-[11px]">
                    {activeImageIdx + 1} / {project.screenshots.length}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Carousel Selector */}
            {hasMultipleImages && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {project.screenshots.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIdx === idx
                        ? 'border-indigo-500 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Links CTA Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 text-sm transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Application</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-sm transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Project Overview
              </h4>
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* My Contribution - PROMINENT */}
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/10 border border-indigo-500/20">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm mb-2">
                <UserCheck className="w-4 h-4 shrink-0" />
                <span>My Specific Contribution</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            {project.features && (
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Key Features &amp; Implementation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
