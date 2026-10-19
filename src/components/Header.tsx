import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo.tsx';
import { Button } from './Button.tsx';
import { navItems } from '../data/nav.ts';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  // Manage focus when opening and closing mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first link in drawer
      const firstLink = menuContainerRef.current?.querySelector<HTMLElement>('a, button');
      firstLink?.focus();
    } else {
      document.body.style.overflow = '';
      toggleBtnRef.current?.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mobileMenuOpen) return;

      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }

      // Trap Tab key inside menu
      if (e.key === 'Tab' && menuContainerRef.current) {
        const focusable = menuContainerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="relative w-full bg-white border-b border-border z-40">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Finexaa Brand Wordmark */}
        <div className="flex items-center">
          <a
            href="#top"
            className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-md p-1 -m-1"
            aria-label="Finexaa Home"
          >
            <Logo size="md" variant="ink" />
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9 text-xs sm:text-sm font-medium text-muted"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap hover:text-ink transition-colors duration-150 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <Button
            href="#marketplace"
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex text-xs font-medium px-4 py-1.5 h-8 border-border text-ink hover:text-ink hover:border-ink"
          >
            Explore Marketplace
          </Button>

          {/* Mobile hamburger button (min 44x44px touch target) */}
          <button
            ref={toggleBtnRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-ink hover:bg-surface-soft flex items-center justify-center focus-visible:outline-2 focus-visible:outline-ink cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with focus management */}
      {mobileMenuOpen && (
        <div
          ref={menuContainerRef}
          id="mobile-nav-menu"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-white/98 backdrop-blur-md z-50 flex flex-col px-6 py-6 border-t border-border fade-in"
        >
          <nav className="flex flex-col space-y-2 text-base font-medium text-ink">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="min-h-[44px] flex items-center py-2 px-3 rounded-lg hover:bg-surface-soft hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-border">
            <Button
              href="#marketplace"
              variant="primary"
              size="lg"
              className="w-full text-sm min-h-[44px]"
              onClick={closeMenu}
            >
              Explore Marketplace
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
