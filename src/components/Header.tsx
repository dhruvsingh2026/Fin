import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Button } from './Button.tsx';
import { navItems } from '../data/nav.ts';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="relative w-full bg-white border-b border-[#E6ECF4] z-40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-[#397AF4] rounded-md p-1 -m-1">
            <Logo size="md" variant="navy" />
          </a>
        </div>

        {/* Center: Desktop Nav Links (4-5 single-line items) */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9 text-xs sm:text-sm font-medium text-[#69758A]"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap hover:text-[#16223B] transition-colors duration-150 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Get in Touch Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Button
            href="#contact"
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex text-xs font-medium px-3.5 py-1.5 h-8 border-[#E6ECF4] text-[#16223B] hover:text-[#397AF4] hover:border-[#397AF4]"
          >
            Get in touch
          </Button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 rounded-lg text-[#16223B] hover:bg-[#F0F6FF] focus-visible:outline-2 focus-visible:outline-[#397AF4]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer/Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white/95 backdrop-blur-md z-50 flex flex-col px-6 py-6 border-t border-[#E6ECF4] animate-in fade-in duration-200"
        >
          <nav className="flex flex-col space-y-4 text-base font-medium text-[#16223B]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="py-2.5 px-3 rounded-lg hover:bg-[#F0F6FF] hover:text-[#397AF4] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#E6ECF4]">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full text-sm"
              onClick={closeMenu}
            >
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
