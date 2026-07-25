import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SymptomMap from './components/SymptomMap';
import TimelineSimulator from './components/TimelineSimulator';
import ErgoCalculator from './components/ErgoCalculator';
import Modalities from './components/Modalities';
import CaseVault from './components/CaseVault';
import Footer from './components/Footer';
import TriageBooking from './components/TriageBooking';

function App() {
  const [isTriageOpen, setIsTriageOpen] = useState(false);
  const [triageInitialSymptom, setTriageInitialSymptom] = useState("Cervical Spine & Neck Tension");

  const handleOpenTriageWithSymptom = (symptomName) => {
    if (symptomName) {
      setTriageInitialSymptom(symptomName);
    }
    setIsTriageOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#0A1C17] font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Editorial Clinical Navbar */}
      <Navbar onOpenTriage={() => setIsTriageOpen(true)} />

      {/* Hero Showcase & Credential Highlights */}
      <main className="flex-1">
        <Hero onOpenTriage={() => setIsTriageOpen(true)} />
        
        {/* New Idea 1: Interactive Biomechanical Diagnostic Mapper */}
        <SymptomMap onSelectSymptomForTriage={handleOpenTriageWithSymptom} />
        
        {/* New Idea 2: Honest Rehab Timeline Simulator */}
        <TimelineSimulator onOpenTriage={() => setIsTriageOpen(true)} />
        
        {/* New Idea 3: Interactive Ergonomic & Athletic Strain Calculator */}
        <ErgoCalculator onOpenTriage={() => setIsTriageOpen(true)} />
        
        {/* Transparent Medical Modalities & Why They Work */}
        <Modalities onOpenTriage={() => setIsTriageOpen(true)} />
        
        {/* Real Quantitative Outcome Case Vault */}
        <CaseVault onOpenTriage={() => setIsTriageOpen(true)} />
      </main>

      {/* Professional Practice Footer & Disclaimer */}
      <Footer onOpenTriage={() => setIsTriageOpen(true)} />

      {/* New Idea 4: Master 4-Step Clinical Triage & Direct WhatsApp Concierge Modal */}
      <TriageBooking
        isOpen={isTriageOpen}
        onClose={() => setIsTriageOpen(false)}
        initialSymptom={triageInitialSymptom}
      />
      
    </div>
  );
}

export default App;
