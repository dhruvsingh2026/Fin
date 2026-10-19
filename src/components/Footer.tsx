import React, { useState } from 'react';
import { Logo, CactusMark } from './Logo.tsx';
import { Button } from './Button.tsx';
import { footerData } from '../data/footer.ts';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// Alpine snowy mountain landscape SVG in cool pale-blue tones
const MountainLandscapeArt: React.FC = () => {
  return (
    <div className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] overflow-hidden select-none pointer-events-none">
      <svg
        viewBox="0 0 1440 500"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          {/* Sky Gradient: Pale ice blue to clean white */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#F2F7FD" />
            <stop offset="100%" stopColor="#E5EFFD" />
          </linearGradient>

          {/* Far Mountain Ridge Gradient */}
          <linearGradient id="farMountainGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EAF1FB" />
            <stop offset="60%" stopColor="#D8E5F6" />
            <stop offset="100%" stopColor="#BFD6F2" />
          </linearGradient>

          {/* Mid Mountain Ridge Gradient */}
          <linearGradient id="midMountainGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D4E4F7" />
            <stop offset="50%" stopColor="#B3CFEE" />
            <stop offset="100%" stopColor="#8FB8E5" />
          </linearGradient>

          {/* Foreground Alpine Ridge Gradient */}
          <linearGradient id="foreMountainGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BCD5F2" />
            <stop offset="40%" stopColor="#96BCE7" />
            <stop offset="100%" stopColor="#6C9DD6" />
          </linearGradient>
        </defs>

        {/* Sky Base */}
        <rect width="1440" height="500" fill="url(#skyGrad)" />

        {/* Far Distant Snow Peaks */}
        <path
          d="M -40 280 L 140 180 L 260 220 L 420 130 L 580 230 L 760 140 L 920 210 L 1100 120 L 1280 200 L 1480 150 L 1480 500 L -40 500 Z"
          fill="url(#farMountainGrad)"
          opacity="0.75"
        />

        {/* Mid-range Serrated Alpine Peaks */}
        <path
          d="M -40 330 L 90 230 L 220 280 L 360 190 L 510 270 L 680 170 L 840 260 L 990 180 L 1140 250 L 1310 160 L 1480 240 L 1480 500 L -40 500 Z"
          fill="url(#midMountainGrad)"
          opacity="0.85"
        />

        {/* Snow Cap Highlights on Mid Peaks */}
        <path
          d="M 360 190 L 390 225 L 340 220 Z"
          fill="#FFFFFF"
          opacity="0.8"
        />
        <path
          d="M 680 170 L 715 210 L 655 205 Z"
          fill="#FFFFFF"
          opacity="0.8"
        />
        <path
          d="M 990 180 L 1025 215 L 965 212 Z"
          fill="#FFFFFF"
          opacity="0.8"
        />
        <path
          d="M 1310 160 L 1345 200 L 1285 195 Z"
          fill="#FFFFFF"
          opacity="0.8"
        />

        {/* Foreground Rolling Foothills / Snow Haze */}
        <path
          d="M -40 370 C 120 330, 240 390, 420 340 C 600 290, 780 380, 960 320 C 1140 260, 1320 350, 1480 300 L 1480 500 L -40 500 Z"
          fill="url(#foreMountainGrad)"
          opacity="0.65"
        />

        {/* Atmospheric Blue Haze Scrim at Base */}
        <rect y="380" width="1440" height="120" fill="url(#skyGrad)" opacity="0.3" />
      </svg>

      {/* OVERSIZED CROPPED BRAND MARK AT THE BOTTOM */}
      <div className="absolute inset-x-0 bottom-[-15%] sm:bottom-[-20%] md:bottom-[-25%] flex items-center justify-center opacity-30 select-none pointer-events-none">
        <div className="flex items-center gap-4 sm:gap-8 transform translate-y-4">
          <CactusMark size={140} color="#16223B" className="w-[18vw] h-[18vw] max-w-[200px]" />
          <span className="font-display font-extrabold text-[22vw] sm:text-[24vw] tracking-tighter text-[#16223B] leading-none lowercase">
            lasso
          </span>
        </div>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please provide a valid email address.');
      return;
    }

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

    if (!endpoint) {
      // Clear non-success message as strictly mandated in prompt
      setStatus('error');
      setMessage('Form endpoint not configured (set VITE_FORM_ENDPOINT in environment).');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('Thank you! Our payments specialist will get in touch shortly.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(`Submission failed (${res.status}). Please try again later.`);
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <footer className="w-full bg-white border-t border-[#E6ECF4] pt-16 md:pt-20 overflow-hidden">
      {/* Upper White Section: Brand & Navigation */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Brand, Description, Lead Form */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-[#397AF4] rounded-md">
              <Logo size="md" variant="navy" />
            </a>

            <p className="text-xs sm:text-sm text-[#69758A] leading-relaxed max-w-sm">
              {footerData.brandDescription}
            </p>

            {/* Email Contact Form */}
            <form id="contact" onSubmit={handleSubmit} className="space-y-3 pt-2" noValidate>
              <label htmlFor="footer-email" className="block text-xs font-semibold text-[#16223B]">
                Get in touch with sales
              </label>

              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="Enter your work email"
                  disabled={status === 'loading'}
                  className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-lg bg-[#FAFBFD] border border-[#D5DFEC] text-[#16223B] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#397AF4] focus:border-transparent transition-all"
                  aria-describedby="footer-form-status"
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === 'loading'}
                  className="px-4 py-2 text-xs sm:text-sm shrink-0"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-1.5">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Contact Sales'
                  )}
                </Button>
              </div>

              {/* Status & Error Feedback */}
              {status === 'error' && (
                <div id="footer-form-status" className="flex items-center gap-1.5 text-xs text-red-600 animate-in fade-in">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{message}</span>
                </div>
              )}

              {status === 'success' && (
                <div id="footer-form-status" className="flex items-center gap-1.5 text-xs text-emerald-600 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{message}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Navigation Columns (4 Columns: Product, Learn, Company, Socials) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerData.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold text-[#16223B] uppercase tracking-wider mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        className="text-[#69758A] hover:text-[#16223B] hover:underline underline-offset-4 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Small Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-[#E6ECF4] flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#94A3B8] gap-4">
          <p>© {new Date().getFullYear()} Lasso Infrastructure, Inc. All rights reserved.</p>
          <p>Bank-grade encryption & SOC 2 Type II Certified.</p>
        </div>
      </div>

      {/* Lower Section: Mountain Landscape with Oversized Cropped Wordmark */}
      <MountainLandscapeArt />
    </footer>
  );
};
