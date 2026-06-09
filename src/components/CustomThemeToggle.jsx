import { useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * CustomThemeToggle – a modern toggle switch for theme selection.
 * Left side: crescent moon (dark mode)
 * Right side: sun (light mode)
 * Center knob shows "waka" text.
 * Uses Tailwind CSS for styling, fully responsive, exported as SVG via button element.
 */
export default function CustomThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggle = () => {
    setIsDark(!isDark);
    // TODO: integrate with your actual theme provider (e.g., next-themes)
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative inline-flex items-center h-8 w-16 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
        isDark ? "bg-gray-800 border border-gray-700" : "bg-gray-200 border border-gray-300"
      }`}
    >
      {/* Moon icon */}
      <span className="absolute left-1.5 flex items-center justify-center">
        <Moon className={`w-4 h-4 ${isDark ? "text-white" : "text-gray-600"}`} />
      </span>
      {/* Sun icon */}
      <span className="absolute right-1.5 flex items-center justify-center">
        <Sun className={`w-4 h-4 ${isDark ? "text-gray-400" : "text-yellow-500"}`} />
      </span>
      {/* Center knob */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
          isDark ? "translate-x-0" : "translate-x-8"
        }`}
      >
        <span className="bg-white dark:bg-gray-900 rounded-full h-6 w-6 flex items-center justify-center text-xs font-medium text-gray-800 dark:text-gray-200">
          waka
        </span>
      </span>
    </button>
  );
}
