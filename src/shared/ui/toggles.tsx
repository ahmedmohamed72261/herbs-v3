"use client";

import { Sun, Moon, Languages } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/src/shared/providers/theme-provider";
import { useLanguage } from "@/src/shared/providers/i18n";
import { cn } from "@/src/shared/utils/cn";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl glass hover:shadow-glass-hover transition-all duration-300 text-charcoal-light hover:text-primary"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </motion.div>
    </button>
  );
}

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="p-2.5 rounded-xl glass hover:shadow-glass-hover transition-all duration-300 text-charcoal-light hover:text-primary font-medium text-sm"
      aria-label="Toggle language"
    >
      <motion.span
        key={lang}
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {lang === "en" ? "ع" : "EN"}
      </motion.span>
    </button>
  );
}
