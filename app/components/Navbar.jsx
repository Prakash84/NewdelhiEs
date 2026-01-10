"use client";// components/Navbar.jsx
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About-Us', href: '/about-us' },
    { label: 'Services', href: '/escort-service-in-delhi' },
    { label: 'Category', href: '/independent-escorts-in-delhi' },
    { label: 'Price', href: '/cheap-call-girls-in-delhi' },
    { label: 'Outlets', href: '/gurgaon-escorts' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
            DelhiEscort
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-neutral-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="ml-4 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold text-sm transition"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-neutral-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-neutral-300 hover:text-amber-400 transition text-sm"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              onClick={() => setOpen(false)}
              className="mt-3 inline-block px-5 py-2 rounded-full bg-amber-500 text-neutral-900 font-semibold text-sm"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}