import React from "react";
import Link from "next/link";
import {
  Home,
  User,
  Code2,
  Mail,
  Linkedin,
  Github
} from "lucide-react";

const navItems = [
  { href: "#home", label: "Home", icon: <Home size={20} /> },
  { href: "#about", label: "About", icon: <User size={20} /> },
  { href: "#projects", label: "Projects", icon: <Code2 size={20} /> },
  { href: "#contact", label: "Contact", icon: <Mail size={20} /> },
  { href: "https://www.linkedin.com/in/abhinav3021/", label: "LinkedIn", icon: <Linkedin size={20} />, external: true },
  { href: "https://github.com/Abhinav3021", label: "GitHub", icon: <Github size={20} />, external: true }
];

const Header = () => {
  return (
    <header className="sticky top-4 z-50 flex justify-center">
      <nav className="bg-black border border-gray-700 text-white rounded-full px-4 py-1 mt-2 flex gap-6 shadow-md backdrop-blur-md">
        {navItems.map(({ href, label, icon, external }) =>
          external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-1 hover:text-pink-500 transition"
            >
              {icon}
              <span className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                {label}
              </span>
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className="relative group p-1 hover:text-pink-500 transition"
            >
              {icon}
              <span className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                {label}
              </span>
            </Link>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
