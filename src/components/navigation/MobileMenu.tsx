"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navItems } from "@/constants/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-white p-8 pt-24 flex flex-col gap-6
                 animate-in slide-in-from-top duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="text-2xl font-black text-left hover:text-blue-600 transition-colors"
        >
          {item.label}
        </Link>
      ))}
      <Link
        href="/contact"
        onClick={onClose}
        className="text-2xl font-black text-left text-blue-600"
      >
        Contact
      </Link>
      <button
        onClick={onClose}
        className="absolute top-8 right-8 p-2"
        aria-label="Close menu"
      >
        <X size={32} />
      </button>
    </div>
  );
}
