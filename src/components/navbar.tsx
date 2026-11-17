"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Background", href: "#education" },
    { label: "Writing", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f4f2ec]/90 dark:bg-[#0c0a09]/90 border-b-2 border-stone-900 dark:border-stone-700">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-lg tracking-tight hover:opacity-80 transition-opacity flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-amber-400 border border-stone-900" />
          <span>{portfolioData.personal.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn px-3 py-1.5 rounded-lg bg-white dark:bg-stone-800 text-xs font-bold inline-flex items-center gap-1.5"
          >
            <FileText size={14} />
            CV
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-900 dark:text-stone-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-stone-900 dark:border-stone-700 bg-[#f4f2ec] dark:bg-[#0c0a09] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-stone-800 dark:text-stone-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
