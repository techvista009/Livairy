"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header({ variant = "public" }: { variant?: "public" | "app" }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { href: "/discover", label: "Discover" },
    { href: "/discover", label: "Explore" },
    { href: "/categories", label: "Categories" },
    { href: "/for-organizations", label: "For Organizations" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-black">
              ●
            </span>
            <span className="text-sm font-semibold tracking-tight">
              OPPORTUNITY <span className="text-[var(--accent)]">LIVE</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname?.startsWith(item.href)
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-muted)] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {variant === "public" ? (
            <>
              <button className="hidden text-sm text-[var(--text-muted)] hover:text-white sm:block">
                Sign In
              </button>
              <Link href="/discover" className="btn-primary text-sm">
                Get Started
              </Link>
            </>
          ) : (
            <>
              <button className="rounded-full p-2 text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <button className="rounded-full p-2 text-[var(--text-muted)] hover:bg-[var(--bg-card)] hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500" />
            </>
          )}
          <button
            className="rounded-lg p-2 text-[var(--text-muted)] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-[var(--text-muted)] hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
