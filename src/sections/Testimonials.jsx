import { motion } from 'framer-motion';
import { MessageSquareQuote, Sparkles } from 'lucide-react';
import { LinkedinIcon } from '../components/SocialIcons';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Peer Reviews"
          title="Recommendations &amp; Testimonials"
          subtitle="Genuine professional feedback from mentors, faculty, and collaborative project teammates."
        />

        {/* Tasteful Professional Notice Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center max-w-3xl mx-auto overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-6 shadow-xs">
            <MessageSquareQuote className="w-8 h-8" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Testimonials in Progress
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Professional Endorsements Coming Soon
          </h3>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto mb-8">
            As a 2026 Computer Science graduate currently undergoing training at KodNest, official recommendations from academic advisors and technical mentors are currently being gathered. In accordance with strict portfolio integrity guidelines, only genuine verified testimonials will be presented here.
          </p>

          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>Connect or Recommend on LinkedIn</span>
            </a>

            <span className="text-xs text-slate-400">
              Verified LinkedIn profile: /in/anamika-bharti-12f
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
