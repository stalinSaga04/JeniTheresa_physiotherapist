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
import ClinicalTransparency from './components/ClinicalTransparency';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Specialties from './components/Specialties';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [isTriageOpen, setIsTriageOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [triageInitialSymptom, setTriageInitialSymptom] = useState("Cervical Spine & Neck Tension");

  const handleOpenTriageWithSymptom = (symptomName) => {
    if (symptomName) {
      setTriageInitialSymptom(symptomName);
    }
    setIsTriageOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#0A1C17] font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Editorial Clinical Navbar with Practice PMS Trigger */}
      <Navbar 
        onOpenTriage={() => setIsTriageOpen(true)} 
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Hero Showcase & Credential Highlights */}
      <main className="flex-1">
        <Hero onOpenTriage={() => setIsTriageOpen(true)} />
        
        {/* Dr. Jeni Theresa's 4 Core Clinical Specialty Pillars */}
        <Specialties onOpenTriage={() => setIsTriageOpen(true)} />
        
        {/* New Idea: Clinical Transparency & What To Expect Roadmap */}
        <ClinicalTransparency onOpenTriage={() => setIsTriageOpen(true)} />
        
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
      <Footer 
        onOpenTriage={() => setIsTriageOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Master 4-Step Clinical Triage & Direct WhatsApp Concierge Modal */}
      <TriageBooking
        isOpen={isTriageOpen}
        onClose={() => setIsTriageOpen(false)}
        initialSymptom={triageInitialSymptom}
      />
      
      {/* Practice Management System (PMS) Admin Console Modal */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Persistent Floating WhatsApp Triage Widget */}
      <FloatingWhatsApp onOpenTriage={() => setIsTriageOpen(true)} />
      
    </div>
  );
}

export default App;

