import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme, className = '' }) {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
        isDark
          ? 'bg-slate-800/80 hover:bg-slate-700/80 text-amber-400 border-slate-700 hover:border-slate-600'
          : 'bg-white/80 hover:bg-slate-100/90 text-indigo-600 border-slate-200 hover:border-slate-300 shadow-xs'
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
