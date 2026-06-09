import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(document.documentElement.classList.contains("dark"));
  const { loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => setDark(!dark);

  return (
    <nav className="glass bg-white/30 dark:bg-stone-900/30 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white font-serif">
          DJ Café Bliss
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link text-gray-800 dark:text-gray-200 hover:text-coffee-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {loggedIn ? (
            <button
              onClick={() => dispatch(logout())}
              className="ml-4 btn-premium bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg px-4 py-2 hover:shadow-lg transition"
            >
              Logout
            </button>
          ) : (
            <div className="flex items-center space-x-3 ml-4 border-l border-gray-300 dark:border-gray-700 pl-4">
              <Link
                to="/login"
                className="text-gray-800 dark:text-gray-200 font-medium hover:text-coffee-600 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn-premium bg-coffee-600 hover:bg-coffee-700 text-white rounded-lg px-4 py-2 hover:shadow-lg transition font-medium"
              >
                Sign Up
              </Link>
            </div>
          )}
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-stone-700"
            aria-label="Toggle theme"
          >
            {dark ? <MoonIcon className="h-6 w-6 text-white" /> : <SunIcon className="h-6 w-6 text-yellow-500" />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-stone-800 glass pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-stone-700"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {loggedIn ? (
            <button
              onClick={() => { dispatch(logout()); setOpen(false); }}
              className="block w-full text-left px-4 py-2 mt-2 btn-premium bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 mt-2 text-gray-800 dark:text-gray-200 font-medium"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 mt-2 btn-premium bg-coffee-600 hover:bg-coffee-700 text-white rounded-lg font-medium"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
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
