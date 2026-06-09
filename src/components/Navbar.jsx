// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Initialize dark mode based on existing class on <html>
  const [dark, setDark] = useState(document.documentElement.classList.contains("dark"));

  // Keep <html> class in sync when dark changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <nav className="glass bg-white/30 dark:bg-stone-900/30 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white font-serif">
          DJ Café Bliss
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4 items-center">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-4 btn-premium nav-link">
            Book a Table
          </Link>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-stone-700"
            aria-label="Toggle theme"
          >
            {dark ? (
              <MoonIcon className="h-6 w-6 text-white" />
            ) : (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            )}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-stone-800 pb-4 glass">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-stone-700"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-4 py-2 mt-2 btn-premium"
            onClick={() => setOpen(false)}
          >
            Book a Table
          </Link>
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex w-full items-center px-4 py-2 mt-2"
            aria-label="Toggle theme"
          >
            {dark ? (
              <MoonIcon className="h-5 w-5 mr-2 text-white" />
            ) : (
              <SunIcon className="h-5 w-5 mr-2 text-yellow-500" />
            )}
            <span>{dark ? "Dark Mode" : "Light Mode"}</span>
          </button>
        </div>
      )}
    </nav>
  );
}
