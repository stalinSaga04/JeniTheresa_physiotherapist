import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, MessageCircle, Activity, ChevronRight } from 'lucide-react';

const Navbar = ({ onOpenTriage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open for a native tactile feel
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Diagnostic Mapper', href: '#symptom-map' },
    { label: 'Rehab Timeline', href: '#timeline' },
    { label: 'Ergo Lab', href: '#ergo-lab' },
    { label: 'Science & Modalities', href: '#modalities' },
    { label: 'Clinical Vault', href: '#case-vault' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hello%20Dr.%20Jeni%20Theresa,%20I%20would%20like%20to%20request%20an%20orthopedic%20clinical%20consultation.", "_blank");
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${scrolled ? 'py-2.5 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#0A1C17]/10 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          
          {/* Brand Logo & Editorial Wordmark */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer text-[#0A1C17]">
            <div className="w-11 h-11 rounded-full bg-[#0A1C17] text-[#FAF8F5] flex items-center justify-center shadow-md group-hover:bg-[#C2593B] transition-colors duration-300">
              <Activity className="w-5 h-5 animate-pulse-subtle" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-clinical font-bold text-xl md:text-2xl tracking-tight leading-none text-[#0A1C17] group-hover:text-[#C2593B] transition-colors">
                Dr. Jeni Theresa
              </span>
              <span className="text-[10px] font-mono-tech tracking-widest text-[#0A1C17]/70 uppercase mt-0.5 font-semibold">
                PT, DPT • Clinical Sports Medicine
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0A1C17]/5 border border-[#0A1C17]/10 p-1.5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide text-[#0A1C17]/85 hover:text-[#0A1C17] hover:bg-white hover:shadow-xs transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Concierge & Emergency Booking */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openWhatsApp}
              title="Direct Clinical WhatsApp Concierge"
              className="p-2.5 rounded-full bg-emerald-600/15 text-emerald-800 hover:bg-emerald-700 hover:text-white transition-all cursor-pointer flex items-center justify-center border border-emerald-600/30"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenTriage}
              className="px-6 py-2.5 rounded-full bg-[#0A1C17] text-[#FAF8F5] font-semibold text-xs tracking-wider uppercase hover:bg-[#C2593B] active:scale-95 transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Clinical Triage</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2.5 rounded-full bg-[#0A1C17]/10 text-[#0A1C17] hover:bg-[#0A1C17] hover:text-white transition-all focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer with tactile backdrop click-outside closing & scroll lock */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Dismiss Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[68px] z-40 bg-black/60 backdrop-blur-xs lg:hidden"
            />

            {/* Slide Down Clinical Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-[68px] left-0 right-0 z-50 bg-[#0A1C17] text-[#FAF8F5] p-6 shadow-2xl rounded-b-3xl border-t border-white/10 lg:hidden"
            >
              <div className="flex flex-col gap-3">
                <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 mb-2">
                  <p className="text-xs font-mono-tech text-emerald-400">
                    🟢 ACCEPTING IN-PERSON & TELE-REHAB PATIENTS
                  </p>
                </div>

                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left py-3 px-4 rounded-xl text-lg font-serif-clinical tracking-wide text-white hover:bg-white/10 flex items-center justify-between transition-colors border border-transparent hover:border-white/20"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-5 h-5 text-[#C2593B]" />
                  </button>
                ))}

                <div className="h-[1px] bg-white/10 my-2" />

                <button
                  onClick={() => { setIsOpen(false); onOpenTriage(); }}
                  className="w-full py-4 rounded-xl bg-[#C2593B] text-white font-semibold tracking-wider uppercase text-sm shadow-xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Launch Triage & Book Consultation</span>
                </button>

                <button
                  onClick={() => { setIsOpen(false); openWhatsApp(); }}
                  className="w-full py-3.5 rounded-xl bg-emerald-700/80 text-white font-medium text-sm flex items-center justify-center gap-2 border border-emerald-500/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Concierge</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
