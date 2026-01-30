"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useScrollPosition } from "@/hooks";
import { NavLink, SkipLink } from "@/components/shared";
import { MobileMenu } from "./MobileMenu";
import { navItems } from "@/constants/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition(20);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <SkipLink />
      <nav
        className={`fixed w-full z-50 transition-all duration-300
                    ${scrolled || !isHome
                      ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
                      : "bg-transparent py-5"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2" aria-label="vsumup home">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl italic">V</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              vsumup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full text-sm font-black transition-all
                          ${pathname === "/contact"
                            ? "bg-blue-600 text-white"
                            : "bg-slate-900 text-white hover:bg-blue-600"}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <Menu />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
