import React, { useState } from 'react';
import { Logo, FinexaaMark } from './Logo.tsx';
import { Button } from './Button.tsx';
import { footerData } from '../data/footer.ts';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

// Calm material still life SVG: layered linen/leather forms with folded fabric planes and saddle stitch lines
const MaterialStillLifeArt: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden select-none pointer-events-none"
      style={{ height: 'clamp(280px, 40vw, 480px)' }}
    >
      <svg
        viewBox="0 0 1440 480"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          {/* Soft canvas background gradient */}
          <linearGradient id="canvasGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FAF7F2" />
            <stop offset="100%" stopColor="#F1ECE1" />
          </linearGradient>

          {/* Tan leather drape plane */}
          <linearGradient id="leatherDrape" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E5D6C0" />
            <stop offset="50%" stopColor="#D4BF9F" />
            <stop offset="100%" stopColor="#BFA57E" />
          </linearGradient>

          {/* Linen fold plane */}
          <linearGradient id="linenFold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5EFE6" />
            <stop offset="60%" stopColor="#E9DFD0" />
            <stop offset="100%" stopColor="#D6C7B2" />
          </linearGradient>

          {/* Deep leather foundation */}
          <linearGradient id="deepLeather" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B39268" />
            <stop offset="50%" stopColor="#9C794F" />
            <stop offset="100%" stopColor="#87653D" />
          </linearGradient>
        </defs>

        {/* Canvas Base */}
        <rect width="1440" height="480" fill="url(#canvasGrad)" />

        {/* Background Folded Linen Layer */}
        <path
          d="M -40 260 C 220 180, 520 290, 840 210 C 1120 140, 1340 220, 1480 180 L 1480 480 L -40 480 Z"
          fill="url(#linenFold)"
          opacity="0.75"
        />

        {/* Saddle Leather Curve Swatch */}
        <path
          d="M -40 310 C 180 240, 460 340, 780 270 C 1080 200, 1320 290, 1480 250 L 1480 480 L -40 480 Z"
          fill="url(#leatherDrape)"
          opacity="0.85"
        />

        {/* Saddle Stitch Detail Line across the leather curve */}
        <path
          d="M -20 310 C 200 240, 480 340, 800 270 C 1100 200, 1340 290, 1480 252"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Foreground Vegetable-Tanned Hide Contour */}
        <path
          d="M -40 360 C 260 300, 560 390, 920 320 C 1200 270, 1380 340, 1480 310 L 1480 480 L -40 480 Z"
          fill="url(#deepLeather)"
          opacity="0.55"
        />
        <path
          d="M -20 360 C 280 300, 580 390, 940 320 C 1220 270, 1400 340, 1480 312"
          stroke="#EFE6D6"
          strokeWidth="2"
          strokeDasharray="5 4"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>

      {/* OVERSIZED CROPPED BRAND MARK AT THE BOTTOM */}
      <div className="absolute inset-x-0 bottom-[-10%] sm:bottom-[-16%] md:bottom-[-20%] flex items-center justify-center opacity-30 select-none pointer-events-none">
        <div className="flex items-center gap-4 sm:gap-8 transform translate-y-2">
          <FinexaaMark
            size={110}
            stemColor="#172A25"
            stitchColor="#C5A77A"
            className="w-[12vw] h-[12vw] max-w-[140px]"
          />
          <span className="font-display font-extrabold text-[13vw] sm:text-[14vw] tracking-tight text-ink leading-none">
            Finexaa
          </span>
        </div>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Buyer or retailer');
  const [messageText, setMessageText] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setFeedbackMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setFeedbackMessage('Please provide a valid email address.');
      return;
    }

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

    if (!endpoint) {
      // Honest unconfigured endpoint notice as required by specification
      setStatus('error');
      setFeedbackMessage(
        'Form endpoint not configured (set VITE_FORM_ENDPOINT in environment).'
      );
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          role,
          message: messageText,
          source: 'finexaa-landing',
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFeedbackMessage(
          'Thank you for your enquiry. A Finexaa marketplace specialist will review your request.'
        );
        setEmail('');
        setMessageText('');
      } else {
        setStatus('error');
        setFeedbackMessage(`Submission failed (${res.status}). Please try again later.`);
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('Network error. Please try again.');
    }
  };

  return (
    <footer className="w-full bg-white border-t border-border pt-16 md:pt-20 overflow-hidden">
      {/* Upper White Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Brand & Sourcing Enquiry Form */}
          <div id="about" className="lg:col-span-5 space-y-6">
            <a
              href="#top"
              className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-ink rounded-md"
              aria-label="Finexaa Home"
            >
              <Logo size="md" variant="ink" />
            </a>

            <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-sm">
              {footerData.brandDescription}
            </p>

            {/* Sourcing Enquiry Form */}
            <form id="contact" onSubmit={handleSubmit} className="space-y-3 pt-2" noValidate>
              <div className="space-y-1">
                <label htmlFor="enquiry-email" className="block text-xs font-semibold text-ink">
                  Work Email <span className="text-leather">*</span>
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  placeholder="merchandiser@boutique.com"
                  disabled={status === 'loading'}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg bg-surface-soft border border-border text-ink placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition-all"
                  aria-describedby="footer-form-status"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="enquiry-role" className="block text-xs font-semibold text-ink">
                  I am a
                </label>
                <select
                  id="enquiry-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  disabled={status === 'loading'}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg bg-surface-soft border border-border text-ink focus:outline-none focus:ring-2 focus:ring-ink transition-all cursor-pointer"
                >
                  <option value="Buyer or retailer">Buyer or retailer</option>
                  <option value="Supplier or seller">Supplier or seller</option>
                  <option value="Other">Other trading partner</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="enquiry-message" className="block text-xs font-semibold text-ink">
                  Sourcing Requirement (Optional)
                </label>
                <textarea
                  id="enquiry-message"
                  rows={2}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="e.g. Seeking Goodyear-welted loafers and calfskin bags for SS27 wholesale..."
                  disabled={status === 'loading'}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg bg-surface-soft border border-border text-ink placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-5 py-2 text-xs sm:text-sm"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-1.5">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Sending Enquiry...
                  </span>
                ) : (
                  'Send enquiry'
                )}
              </Button>

              {/* Status & Error Feedback */}
              {status === 'error' && (
                <div id="footer-form-status" className="flex items-center gap-1.5 text-xs text-red-600 fade-in">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div id="footer-form-status" className="flex items-center gap-1.5 text-xs text-emerald-700 fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{feedbackMessage}</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerData.columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold text-ink uppercase tracking-wider mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted hover:text-ink hover:underline underline-offset-4 transition-colors"
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
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center text-[11px] text-muted gap-4">
          <p>© {new Date().getFullYear()} Finexaa. All rights reserved.</p>
          <p>B2B Fashion & Leather-Goods Trading Marketplace.</p>
        </div>
      </div>

      {/* Lower Section: Calm Material Still Life with Cropped Oversized Finexaa Wordmark */}
      <MaterialStillLifeArt />
    </footer>
  );
};
