"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors font-bold text-sm
                  ${isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
    >
      {children}
    </Link>
  );
}
