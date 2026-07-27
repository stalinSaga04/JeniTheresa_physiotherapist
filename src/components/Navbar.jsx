import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Activity, ChevronRight, Home, Stethoscope, MapPin, Settings, Sparkles } from 'lucide-react';

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

  const navItems = [
    { label: 'Specialties', href: '#specialties' },
    { label: 'Consultation', href: '#clinical-transparency' },
    { label: 'Pain Map', href: '#symptom-map' },
    { label: 'Science', href: '#modalities' },
    { label: 'Outcomes', href: '#case-vault' },
  ];

  // Mobile bottom tab items (compact, icon-driven, 100% patient-centered)
  const bottomTabs = [
    { label: 'Home', icon: Home, href: '#top', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: 'Specialties', icon: Stethoscope, href: '#specialties' },
    { label: 'Pain Map', icon: MapPin, href: '#symptom-map' },
    { label: 'Science', icon: Sparkles, href: '#modalities' },
    { label: 'Book', icon: Calendar, href: null, action: () => onOpenTriage() },
  ];

  // Executive hotkey: Pressing Ctrl+Shift+P or Alt+P automatically triggers the Doctor PMS Console
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.shiftKey && (e.key === 'P' || e.key === 'p')) || (e.altKey && (e.key === 'P' || e.key === 'p'))) {
        e.preventDefault();
        onOpenAdmin();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenAdmin]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBottomTabClick = (tab) => {
    if (tab.action) {
      tab.action();
    } else if (tab.href) {
      const el = document.querySelector(tab.href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* ── Top Header Bar ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2.5 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#0A1C17]/10 shadow-sm' 
          : 'py-3 md:py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between">
          
          {/* Brand (Double clicking the heartbeat logo opens Doctor PMS console!) */}
          <div className="flex items-center gap-2 sm:gap-3.5 group text-[#0A1C17]">
            <div 
              onDoubleClick={onOpenAdmin}
              title="Double click to access Clinical Console"
              className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300 cursor-pointer ${
              scrolled ? 'bg-[#0A1C17] text-[#FAF8F5]' : 'bg-white/20 backdrop-blur-md text-white border border-white/20'
            }`}>
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2A13E]" />
            </div>
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col cursor-pointer">
              <span className={`font-extrabold text-sm sm:text-xl md:text-2xl tracking-tight leading-none transition-colors font-sans ${
                scrolled ? 'text-[#0A1C17]' : 'text-white'
              }`}>
                Dr. Jeni Theresa
              </span>
              <span className={`text-[8px] sm:text-[11px] font-mono-tech tracking-wider uppercase mt-0.5 font-bold ${
                scrolled ? 'text-[#0A1C17]/70' : 'text-white/70'
              }`}>
                Doctor of Physical Therapy, DPT
              </span>
            </a>
          </div>

          {/* Desktop Navigation Pills (Visible on md 768px+ and in Mobile Desktop Site mode!) */}
          <nav className={`hidden md:flex items-center gap-0.5 p-1 lg:p-1.5 rounded-2xl backdrop-blur-sm border ${
            scrolled 
              ? 'bg-[#0A1C17]/5 border-[#0A1C17]/10' 
              : 'bg-white/10 border-white/15'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`px-2 py-1.5 lg:px-3.5 lg:py-2 rounded-xl text-[11px] lg:text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer font-sans whitespace-nowrap ${
                  scrolled 
                    ? 'text-[#0A1C17]/80 hover:text-[#0A1C17] hover:bg-white hover:shadow-sm' 
                    : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Book Appointment */}
            <button
              onClick={onOpenTriage}
              className="px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-white text-[#0A1C17] font-extrabold text-[11px] sm:text-xs tracking-wider uppercase shadow-md hover:bg-[#D2A13E] hover:text-white hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2 group shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C2593B] group-hover:text-white transition-colors shrink-0" />
              <span className="hidden sm:inline">Book Assessment</span>
              <span className="sm:hidden text-[11px]">Book</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Tablet Drawer (768px–1280px) ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[60px] z-40 bg-black/60 backdrop-blur-xs hidden md:block xl:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-[60px] left-0 right-0 z-50 bg-[#0A1C17] text-[#FAF8F5] p-6 shadow-2xl rounded-b-3xl border-t border-white/10 hidden md:block xl:hidden"
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
                    className="text-left py-3 px-4 rounded-xl text-base font-bold tracking-wide text-white hover:bg-white/10 flex items-center justify-between transition-colors border border-transparent hover:border-white/20 font-sans"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#D2A13E]" />
                  </button>
                ))}

                <button
                  onClick={() => { setIsOpen(false); onOpenAdmin(); }}
                  className="w-full py-3 px-4 rounded-xl bg-[#163029] text-emerald-300 border border-emerald-500/30 font-mono-tech text-xs font-bold flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>⚙️ Practice Admin Console (PMS)</span>
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

      {/* ── Mobile Bottom Tab Bar (< 768px) — App Feel ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0A1C17] border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] safe-area-bottom">
        <div className="flex items-center justify-around py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const isBook = tab.label === 'Book';
            return (
              <button
                key={tab.label}
                onClick={() => handleBottomTabClick(tab)}
                className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-xl transition-all cursor-pointer active:scale-95 ${
                  isBook 
                    ? 'text-[#D2A13E]' 
                    : 'text-white/60 hover:text-white active:text-white'
                }`}
              >
                <div className={`p-1.5 rounded-xl ${isBook ? 'bg-[#C2593B] text-white shadow-lg' : ''}`}>
                  <Icon className={`${isBook ? 'w-5 h-5' : 'w-5 h-5'}`} />
                </div>
                <span className={`text-[10px] font-bold font-mono-tech uppercase tracking-wider ${isBook ? 'text-[#D2A13E]' : ''}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
