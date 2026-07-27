import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Activity, ChevronRight, Sparkles } from 'lucide-react';

const Navbar = ({ onOpenTriage, onOpenAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Clean, patient-friendly navigation items that translate easily without jargon
  const navItems = [
    { label: 'Clinical Specialties', href: '#specialties' },
    { label: 'What To Expect', href: '#clinical-transparency' },
    { label: 'Interactive Pain Map', href: '#symptom-map' },
    { label: 'Treatment Science', href: '#modalities' },
    { label: 'Patient Outcomes', href: '#case-vault' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#0A1C17]/10 shadow-sm' 
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          
          {/* Brand Wordmark & Editorial Logo */}
          <a href="#" className="flex items-center gap-3.5 group cursor-pointer text-[#0A1C17]">
            <div className="w-11 h-11 rounded-2xl bg-[#0A1C17] text-[#FAF8F5] flex items-center justify-center shadow-md group-hover:bg-[#C2593B] group-hover:scale-105 transition-all duration-300">
              <Activity className="w-5 h-5 text-[#D2A13E]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-clinical font-black text-xl md:text-2xl tracking-tight leading-none text-[#0A1C17] group-hover:text-[#C2593B] transition-colors">
                Dr. Jeni Theresa
              </span>
              <span className="text-[11px] font-mono-tech tracking-wider text-[#0A1C17]/75 uppercase mt-1 font-bold flex items-center gap-1">
                <span>Doctor of Physical Therapy, DPT</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pills */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-[#0A1C17]/5 border border-[#0A1C17]/10 p-1.5 rounded-2xl backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 rounded-xl text-xs font-bold tracking-wide text-[#0A1C17]/80 hover:text-[#0A1C17] hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer font-sans"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Desk: Book Button & Discreet Admin Suite Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenAdmin}
              className="px-3.5 py-2 rounded-xl bg-emerald-950 text-emerald-300 hover:bg-emerald-900 font-mono-tech font-bold text-[11px] tracking-wider uppercase border border-emerald-500/30 transition-all cursor-pointer hidden md:flex items-center gap-1.5 shadow-xs"
              title="Open Dr. Jeni Theresa's Clinical CRM & Practice Management System"
            >
              <span>⚙️ Practice Console (PMS)</span>
            </button>

            <button
              onClick={onOpenTriage}
              className="px-4.5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#0A1C17] hover:bg-[#C2593B] text-[#FAF8F5] font-bold text-xs tracking-wider uppercase shadow-md sm:shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2 group shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D2A13E] group-hover:scale-110 transition-transform shrink-0" />
              <span>Book<span className="hidden sm:inline"> Appointment</span></span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="xl:hidden p-2 sm:p-2.5 rounded-xl bg-[#0A1C17]/10 text-[#0A1C17] hover:bg-[#0A1C17] hover:text-white transition-all focus:outline-none cursor-pointer shrink-0"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[72px] z-40 bg-black/60 backdrop-blur-xs xl:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-[72px] left-0 right-0 z-50 bg-[#0A1C17] text-[#FAF8F5] p-6 shadow-2xl rounded-b-3xl border-t border-white/10 xl:hidden"
            >
              <div className="flex flex-col gap-2.5">
                <div className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-2">
                  <p className="text-xs font-mono-tech text-emerald-300 font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    ACCEPTING IN-PERSON & ONLINE PATIENTS
                  </p>
                </div>

                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left py-3 px-4 rounded-xl text-base font-serif-clinical font-bold tracking-wide text-white hover:bg-white/10 flex items-center justify-between transition-colors border border-transparent hover:border-white/20"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#D2A13E]" />
                  </button>
                ))}

                <button
                  onClick={() => { setIsOpen(false); onOpenAdmin(); }}
                  className="w-full py-3 px-4 rounded-xl bg-[#163029] text-emerald-300 border border-emerald-500/30 font-mono-tech text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>⚙️ Launch Practice Admin Console (PMS)</span>
                  <span className="bg-[#D2A13E] text-[#0A1C17] px-2 py-0.5 rounded text-[10px] uppercase font-black">Admin</span>
                </button>

                <div className="h-[1px] bg-white/10 my-3" />

                <button
                  onClick={() => { setIsOpen(false); onOpenTriage(); }}
                  className="w-full py-4 rounded-2xl bg-[#C2593B] hover:bg-[#A84528] text-white font-bold tracking-wider uppercase text-xs shadow-xl flex items-center justify-center gap-2.5 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
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
