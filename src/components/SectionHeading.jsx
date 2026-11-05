import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase ${
          'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400 border border-indigo-500/20'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
