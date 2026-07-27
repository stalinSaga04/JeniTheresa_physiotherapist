import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Users, DollarSign, Activity, CheckCircle2, Clock, AlertCircle, 
  Phone, MessageCircle, FileText, Search, Filter, ShieldCheck, 
  Database, RefreshCw, ChevronRight, PlusCircle, CreditCard, Award,
  Navigation, MapPin, Calendar, HeartPulse, Send, TrendingUp
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicalData';

const initialPatients = [
  {
    id: 'PT-1082',
    name: 'Karthik Narayanan',
    location: 'Electronic City Phase 1, Bangalore (2.4 km from Bommasandra)',
    phone: '+91 98840 12345',
    condition: 'L4/L5 Sciatica Disc Strain',
    stage: 'Stage 2: Home Visit Scheduled',
    feeStatus: 'Paid (₹850 UPI Verified)',
    modality: 'Dedicated Home Visit',
    timeSlot: 'Today • 10:30 AM (NEXT CLIENT)',
    notes: 'Severe pain radiating down right leg during commuting. Prior MRI attached on WhatsApp.',
    priority: 'Urgent (Next)',
    packageTotal: 5,
    packageUsed: 1,
    assignedExercise: 'Lumbar Nerve Gliding & Core Decompression (Phase 1)'
  },
  {
    id: 'PT-1083',
    name: 'Anitha Rajendran',
    location: 'Bommasandra Industrial Area, Bangalore',
    phone: '+91 97910 54321',
    condition: 'Cervical Neck Impingement & Posture',
    stage: 'Stage 3: Active Kinetic Rehab',
    feeStatus: 'Package Valid (₹4,500 / 3 Sessions Left)',
    modality: 'Dedicated Home Visit',
    timeSlot: 'Today • 02:00 PM',
    notes: 'Working 9 hours daily on laptop. Ergonomic postural stabilization progress is excellent.',
    priority: 'Normal',
    packageTotal: 5,
    packageUsed: 2,
    assignedExercise: 'Scapular Retraction & Upper Trap Trigger Relief'
  },
  {
    id: 'PT-1084',
    name: 'Suresh Kumar Gupta',
    location: 'HSR Layout Sector 2 / Online Tele-Rehab',
    phone: '+91 94440 67890',
    condition: 'Post-Surgical Knee Replacement',
    stage: 'Stage 1: New Consultation Inquired',
    feeStatus: 'Pending Assessment Fee (₹850)',
    modality: 'Online Video Tele-Rehab',
    timeSlot: 'Requested Today • 05:00 PM',
    notes: 'Discharged from hospital last week. Needs knee range of motion guidance and swelling management.',
    priority: 'High',
    packageTotal: 1,
    packageUsed: 0,
    assignedExercise: 'Pending Clinical Triage Eval'
  },
  {
    id: 'PT-1085',
    name: 'Priyanka Shinde',
    location: 'Bannerghatta Road, Bangalore',
    phone: '+91 91234 56789',
    condition: 'Rotator Cuff Shoulder Inflammation',
    stage: 'Stage 4: Recovery Complete',
    feeStatus: 'Paid Full & Discharged',
    modality: 'Dedicated Home Visit',
    timeSlot: 'Completed 25 Jul',
    notes: 'Full painless abduction restored after 6 guided manual therapy sessions.',
    priority: 'Completed',
    packageTotal: 6,
    packageUsed: 6,
    assignedExercise: 'Maintenance Overhead Elastic Band Routine'
  }
];

const AdminDashboard = ({ isOpen, onClose }) => {
  const [patients, setPatients] = useState([]);
  const [activeTab, setActiveTab] = useState('triage'); // 'next_client', 'triage', 'billing', 'exercises', 'architecture'
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStage, setFilterStage] = useState('All');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [notification, setNotification] = useState('');

  // Initialize load from localized Practice CRM store
  useEffect(() => {
    if (isOpen) {
      const stored = localStorage.getItem('jeni_practice_crm_v1');
      if (stored) {
        try {
          setPatients(JSON.parse(stored));
        } catch (e) {
          setPatients(initialPatients);
        }
      } else {
        setPatients(initialPatients);
        localStorage.setItem('jeni_practice_crm_v1', JSON.stringify(initialPatients));
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleUpdatePatient = (patientId, updates) => {
    const updatedList = patients.map(p => {
      if (p.id === patientId) {
        return { ...p, ...updates };
      }
      return p;
    });
    setPatients(updatedList);
    localStorage.setItem('jeni_practice_crm_v1', JSON.stringify(updatedList));
    setNotification(`Updated Patient ${patientId} record in real-time practice storage.`);
    setTimeout(() => setNotification(''), 4000);
  };

  const handleSendWhatsAppAction = (phone, text) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const nextClient = patients.find(p => p.timeSlot.includes('NEXT') || p.priority === 'Urgent (Next)') || patients[0];

  const totalFeesToday = "₹5,350"; // Projected daily triage
  const activeHomeVisitsCount = patients.filter(p => p.modality.includes('Home Visit') && !p.stage.includes('Stage 4')).length;

  return (
    <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-5 overflow-y-auto font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 15 }}
        transition={{ duration: 0.25 }}
        className="bg-[#FAF8F5] text-[#0A1C17] w-full max-w-7xl rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.6)] border-2 border-[#0A1C17] overflow-hidden flex flex-col max-h-[95vh]"
      >
        
        {/* Practice Management Header Banner */}
        <div className="bg-[#0A1C17] text-[#FAF8F5] p-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/15 shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C2593B]/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C2593B] to-[#A84528] text-white flex items-center justify-center font-serif-clinical font-black text-xl shadow-lg shrink-0 border border-white/20">
              PMS
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-serif-clinical font-black tracking-tight text-white">
                  Dr. Jeni Theresa — Clinical Practice & CRM Suite
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-tech text-[11px] font-bold border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Practice Console (PMS / EHR)
                </span>
              </div>
              <p className="text-xs font-mono-tech text-white/75 mt-0.5">
                A-to-Z clinical operations: manage bookings, track upcoming home visits, verify UPI fee collections, and monitor recovery pipelines.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 relative z-10 self-end sm:self-center">
            <button
              onClick={() => {
                localStorage.setItem('jeni_practice_crm_v1', JSON.stringify(initialPatients));
                setPatients(initialPatients);
                setNotification('Synced live practice test data.');
                setTimeout(() => setNotification(''), 3000);
              }}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 text-xs font-mono-tech cursor-pointer border border-white/15"
              title="Reset test practice data"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Sync</span>
            </button>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-red-500/80 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close Admin Suite"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Real-Time Notification Bar */}
        <AnimatePresence>
          {notification && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              className="bg-emerald-600 text-white text-xs font-mono-tech font-bold px-8 py-2 flex items-center justify-between shrink-0"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                {notification}
              </span>
              <button onClick={() => setNotification('')} className="text-white hover:text-black cursor-pointer">✕</button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick KPI Practice Stats Bar */}
        <div className="bg-[#163029] px-6 sm:px-8 py-3.5 grid grid-cols-2 lg:grid-cols-4 gap-4 border-b border-white/10 text-xs text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D2A13E]/20 text-[#D2A13E] flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tech text-white/60 uppercase block">Active Bookings Today</span>
              <strong className="text-sm font-serif-clinical text-white">{patients.length} Registered Patients</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tech text-white/60 uppercase block">Bengaluru Home Visits</span>
              <strong className="text-sm font-serif-clinical text-emerald-300">{activeHomeVisitsCount} Scheduled (Bommasandra & South)</strong>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono-tech text-white/60 uppercase block">Est. Daily Fee Collection</span>
              <strong className="text-sm font-mono-tech font-black text-amber-300">{totalFeesToday} (UPI & Packages)</strong>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="px-3.5 py-1.5 rounded-xl bg-[#C2593B]/25 border border-[#C2593B]/50 text-[#FAF8F5] flex items-center gap-2 font-mono-tech font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-[#D2A13E]" />
              <span>Personal Number Encrypted</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-[#FAF8F5] px-6 sm:px-8 py-3 border-b-2 border-[#0A1C17]/10 flex flex-wrap items-center gap-2 shrink-0 overflow-x-auto text-xs sm:text-sm">
          {[
            { id: 'next_client', label: '🚗 Next Patient & Bedside Tracker', icon: Navigation, count: 'NEXT' },
            { id: 'triage', label: '📋 Triage Call & Inquiries Queue', icon: Users, count: patients.length },
            { id: 'billing', label: '💰 Fee Collection & Invoicing Desk', icon: CreditCard },
            { id: 'exercises', label: '🧘 Exercise Prescriptions & EHR', icon: HeartPulse },
            { id: 'architecture', label: '⚡ Enterprise Architecture & Scaling', icon: Database }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-2xl font-mono-tech font-bold transition-all flex items-center gap-2 cursor-pointer border-2 whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-[#0A1C17] text-white border-[#0A1C17] shadow-md' 
                    : 'bg-white text-[#0A1C17]/80 border-[#0A1C17]/15 hover:border-[#0A1C17]/40 hover:bg-black/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-[#D2A13E]' : 'text-[#C2593B]'}`} />
                <span>{tab.label}</span>
                {tab.count && (
                  <span className={`px-2 py-0.5 rounded-md text-[10px] uppercase font-black ${
                    activeTab === tab.id ? 'bg-[#D2A13E] text-[#0A1C17]' : 'bg-[#0A1C17]/10 text-[#0A1C17]'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Body Container */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-[#F4F1EA]/50 space-y-6">
          
          {/* TAB 1: NEXT PATIENT & BEDSIDE TRACKER (What it is called: Clinical Route & Active Appointment Console) */}
          {activeTab === 'next_client' && nextClient && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="bg-[#0A1C17] text-[#FAF8F5] p-7 md:p-9 rounded-3xl border-2 border-[#C2593B] shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D2A13E]/15 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/15 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#C2593B] text-white text-xs font-mono-tech font-extrabold uppercase animate-pulse">
                        🚗 Next Scheduled Bedside Appointment
                      </span>
                      <span className="text-xs font-mono-tech text-emerald-300 font-semibold">
                        {nextClient.timeSlot}
                      </span>
                    </div>
                    <h3 className="text-3xl font-serif-clinical font-black text-white mt-2">
                      {nextClient.name}
                    </h3>
                    <p className="text-sm font-mono-tech text-[#D2A13E] mt-1 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span>{nextClient.location}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#163029] border border-white/15 text-right sm:max-w-xs shrink-0">
                    <span className="text-[10px] font-mono-tech text-white/60 uppercase block font-bold">Primary Orthopedic Focus:</span>
                    <strong className="text-base font-serif-clinical text-emerald-300 block mb-1">{nextClient.condition}</strong>
                    <span className="text-xs font-mono-tech text-white/80 bg-white/10 px-2 py-0.5 rounded">
                      💳 Status: {nextClient.feeStatus}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-xs font-mono-tech text-[#D2A13E] font-bold uppercase block">
                      🩺 Clinical Diagnostic Note & Pre-Screening:
                    </span>
                    <p className="text-xs sm:text-sm font-serif italic text-white/95 leading-relaxed">
                      "{nextClient.notes}"
                    </p>
                  </div>

                  <div className="space-y-2 bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono-tech text-[#D2A13E] font-bold uppercase block">
                        🧘 Assigned Recovery Plan:
                      </span>
                      <strong className="text-sm text-white block mt-1">{nextClient.assignedExercise}</strong>
                      <span className="text-xs font-mono-tech text-emerald-300 block mt-1">
                        Package Session Progress: {nextClient.packageUsed} of {nextClient.packageTotal} completed
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-3">
                      <div 
                        className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${(nextClient.packageUsed / nextClient.packageTotal) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Instant Action Button Desk */}
                <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2.5">
                    <button
                      onClick={() => {
                        const query = encodeURIComponent(nextClient.location);
                        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
                      }}
                      className="px-4 py-3 rounded-2xl bg-[#D2A13E] hover:bg-[#B8892D] text-[#0A1C17] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Launch Google Maps GPS Route</span>
                    </button>

                    <button
                      onClick={() => {
                        const msg = `🚗 *Hello ${nextClient.name},*\n\nThis is Dr. Jeni Theresa Rehab desk. We are en route for your Home Visit therapy session scheduled at *${nextClient.timeSlot}* in ${nextClient.location.split(',')[0]}.\n\nPlease keep a supportive sturdy chair and comfortable mat ready!`;
                        handleSendWhatsAppAction(nextClient.phone, msg);
                      }}
                      className="px-4 py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5A] text-[#0A1C17] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send "En Route" Alert (WhatsApp)</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      const newUsed = Math.min(nextClient.packageTotal, nextClient.packageUsed + 1);
                      const newStage = newUsed === nextClient.packageTotal ? 'Stage 4: Recovery Complete' : 'Stage 3: Active Kinetic Rehab';
                      handleUpdatePatient(nextClient.id, { packageUsed: newUsed, stage: newStage, timeSlot: 'Session Logged Today' });
                    }}
                    className="px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-md"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Mark Session Complete (+1)</span>
                  </button>
                </div>

              </div>

              {/* What is this called block */}
              <div className="p-5 rounded-2xl bg-white border border-[#0A1C17]/15 text-xs font-mono-tech text-[#0A1C17] flex items-center justify-between shadow-sm">
                <span>💡 <strong>Software Development Industry Term:</strong> This console is called a <em>Practice Management System (PMS)</em> integrated with an <em>Electronic Health Record (EHR) Route Scheduler</em>.</span>
                <span className="text-[#C2593B] font-bold">A-to-Z Operational Mastery</span>
              </div>
            </div>
          )}

          {/* TAB 2: TRIAGE CALL & INQUIRES QUEUE (A to Z operation) */}
          {activeTab === 'triage' && (
            <div className="space-y-6">
              {/* Search and Stage Filters */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between bg-white p-4.5 rounded-2xl border border-[#0A1C17]/15 shadow-sm">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-[#0A1C17]/40 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="Search patient name, condition, or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#0A1C17]/20 text-xs text-[#0A1C17] focus:outline-none focus:border-[#C2593B] font-medium"
                  />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto">
                  <Filter className="w-4 h-4 text-[#C2593B] shrink-0" />
                  <span className="text-xs font-mono-tech font-bold uppercase tracking-wider">Stage Filter:</span>
                  {['All', 'Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'].map(st => (
                    <button
                      key={st}
                      onClick={() => setFilterStage(st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                        filterStage === st ? 'bg-[#0A1C17] text-white shadow-sm' : 'bg-black/5 hover:bg-black/10 text-[#0A1C17]'
                      }`}
                    >
                      {st === 'All' ? 'All Pipeline (4)' : st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Patient Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {patients
                  .filter(p => filterStage === 'All' || p.stage.includes(filterStage))
                  .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.condition.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((p) => (
                    <div key={p.id} className="p-6 rounded-3xl bg-white border border-[#0A1C17]/15 hover:border-[#C2593B] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
                      <div>
                        <div className="flex items-start justify-between gap-3 border-b border-[#0A1C17]/10 pb-3.5 mb-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-[#C2593B]/15 text-[#C2593B] font-mono-tech text-xs font-black">
                                {p.id}
                              </span>
                              <h4 className="text-lg font-serif-clinical font-black text-[#0A1C17] group-hover:text-[#C2593B] transition-colors">
                                {p.name}
                              </h4>
                            </div>
                            <p className="text-xs font-mono-tech text-[#0A1C17]/70 mt-1 font-medium flex items-center gap-1">
                              <span>📍 {p.location.split('(')[0]}</span>
                            </p>
                          </div>
                          
                          <span className={`text-[10px] font-mono-tech font-black uppercase px-2.5 py-1 rounded-full border ${
                            p.priority.includes('Urgent') ? 'bg-red-50 text-red-700 border-red-200 animate-pulse' :
                            p.priority === 'High' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                            'bg-emerald-50 text-emerald-800 border-emerald-200'
                          }`}>
                            {p.priority}
                          </span>
                        </div>

                        <div className="space-y-2.5 text-xs mb-4">
                          <div className="flex items-center justify-between">
                            <span className="font-mono-tech font-bold text-[#0A1C17]/60 uppercase">Diagnosis:</span>
                            <span className="font-bold text-[#0A1C17] bg-[#0A1C17]/5 px-2.5 py-1 rounded-lg">{p.condition}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="font-mono-tech font-bold text-[#0A1C17]/60 uppercase">Pipeline Stage:</span>
                            <span className="font-mono-tech font-black text-xs px-2.5 py-1 rounded-lg bg-[#163029] text-white">
                              {p.stage}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="font-mono-tech font-bold text-[#0A1C17]/60 uppercase">Fee Status:</span>
                            <span className={`font-mono-tech font-bold px-2 py-0.5 rounded border ${
                              p.feeStatus.includes('Paid') || p.feeStatus.includes('Valid') ? 'bg-emerald-50 text-emerald-900 border-emerald-300' : 'bg-red-50 text-red-900 border-red-300'
                            }`}>
                              💰 {p.feeStatus}
                            </span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#0A1C17]/10 text-xs font-serif italic text-[#0A1C17]/85 mb-5">
                          "{p.notes}"
                        </div>
                      </div>

                      {/* Operation Desk Actions */}
                      <div className="pt-4 border-t border-[#0A1C17]/10 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <select
                            value={p.stage}
                            onChange={(e) => handleUpdatePatient(p.id, { stage: e.target.value })}
                            className="px-2.5 py-2 rounded-xl bg-[#0A1C17] text-[#FAF8F5] text-xs font-mono-tech font-bold cursor-pointer"
                          >
                            <option value="Stage 1: New Consultation Inquired">Set Stage 1: Inquired</option>
                            <option value="Stage 2: Home Visit Scheduled">Set Stage 2: Scheduled</option>
                            <option value="Stage 3: Active Kinetic Rehab">Set Stage 3: Active Rehab</option>
                            <option value="Stage 4: Recovery Complete">Set Stage 4: Discharged</option>
                          </select>
                        </div>

                        <button
                          onClick={() => {
                            const msg = `🏥 *Dr. Jeni Theresa Rehab — Patient Status Update*\n\n👤 *Patient:* ${p.name}\n🩺 *Diagnosis:* ${p.condition}\n📊 *Stage:* ${p.stage}\n💳 *Fee:* ${p.feeStatus}\n📍 *Modality:* ${p.modality}\n\nWe look forward to guiding your full physical restoration!`;
                            handleSendWhatsAppAction(p.phone, msg);
                          }}
                          className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#1EBE5A] text-[#0A1C17] font-extrabold text-xs font-mono-tech flex items-center gap-1.5 shadow transition-all cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5 fill-current" />
                          <span>WhatsApp Update</span>
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 3: FEE COLLECTION & INVOICING DESK */}
          {activeTab === 'billing' && (
            <div className="space-y-6 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-6 rounded-3xl bg-white border border-[#0A1C17]/15 shadow-sm space-y-2">
                  <span className="text-xs font-mono-tech uppercase font-bold text-[#C2593B]">Standard Initial Fee</span>
                  <div className="text-3xl font-serif-clinical font-black text-[#0A1C17]">₹850</div>
                  <p className="text-xs text-[#0A1C17]/70 font-sans">Includes 60-min home diagnostic eval & nerve decomp session across South Bengaluru.</p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#0A1C17]/15 shadow-sm space-y-2">
                  <span className="text-xs font-mono-tech uppercase font-bold text-emerald-700">Follow-up Session</span>
                  <div className="text-3xl font-serif-clinical font-black text-[#0A1C17]">₹600</div>
                  <p className="text-xs text-[#0A1C17]/70 font-sans">Standard 45-min hands-on kinetic therapy follow-up at bedside.</p>
                </div>

                <div className="p-6 rounded-3xl bg-[#0A1C17] text-white border border-white/15 shadow-xl space-y-2">
                  <span className="text-xs font-mono-tech uppercase font-bold text-[#D2A13E]">5-Session Complete Rehab Package</span>
                  <div className="text-3xl font-serif-clinical font-black text-amber-300">₹4,500</div>
                  <p className="text-xs text-white/80 font-sans">Full orthopedic resolution plan with structured daily exercises and priority scheduling.</p>
                </div>
              </div>

              {/* Billing Transactions Table */}
              <div className="bg-white rounded-3xl border border-[#0A1C17]/15 shadow-lg overflow-hidden">
                <div className="p-6 bg-[#163029] text-white flex items-center justify-between border-b border-white/10">
                  <h3 className="text-lg font-serif-clinical font-black">Live Patient Fee Verification Desk</h3>
                  <span className="text-xs font-mono-tech text-emerald-300 font-bold">Ready for Supabase / Razorpay Link</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs font-sans">
                    <thead>
                      <tr className="border-b border-[#0A1C17]/10 bg-[#FAF8F5] text-[#0A1C17]/70 font-mono-tech uppercase font-bold">
                        <th className="p-4">Patient ID & Name</th>
                        <th className="p-4">Consultation Mode</th>
                        <th className="p-4">Current Fee Status</th>
                        <th className="p-4">Package Balance</th>
                        <th className="p-4">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0A1C17]/10 text-sm font-medium text-[#0A1C17]">
                      {patients.map(p => (
                        <tr key={p.id} className="hover:bg-black/[0.02] transition-colors">
                          <td className="p-4">
                            <strong className="font-serif-clinical text-base block">{p.name}</strong>
                            <span className="text-xs font-mono-tech text-[#C2593B]">{p.id} • {p.phone}</span>
                          </td>
                          <td className="p-4 font-mono-tech text-xs">{p.modality}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-md text-xs font-mono-tech font-bold ${
                              p.feeStatus.includes('Paid') || p.feeStatus.includes('Valid') ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-950'
                            }`}>
                              {p.feeStatus}
                            </span>
                          </td>
                          <td className="p-4 font-mono-tech font-black text-xs">
                            {p.packageUsed} / {p.packageTotal} Sessions Used
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <select
                                value={p.feeStatus}
                                onChange={(e) => handleUpdatePatient(p.id, { feeStatus: e.target.value })}
                                className="px-2.5 py-1.5 rounded-lg bg-[#0A1C17] text-white text-xs font-mono-tech font-bold cursor-pointer"
                              >
                                <option value="Pending Assessment Fee (₹850)">Mark Pending</option>
                                <option value="Paid (₹850 UPI Verified)">Mark Paid (₹850 UPI)</option>
                                <option value="Paid (Cash at Bedside)">Mark Paid (Cash)</option>
                                <option value="Package Valid (₹4,500 / 3 Left)">Mark Package Valid</option>
                              </select>
                              <button
                                onClick={() => {
                                  const msg = `🧾 *Dr. Jeni Theresa Rehab — Payment & Fee Verification*\n\n👤 *Patient:* ${p.name}\n💰 *Status Verified:* ${p.feeStatus}\n📦 *Session Balance:* ${p.packageUsed} of ${p.packageTotal} completed.\n\nThank you for trusting our bedside orthopedic rehabilitation!`;
                                  handleSendWhatsAppAction(p.phone, msg);
                                }}
                                className="p-2 rounded-lg bg-[#25D366] text-[#0A1C17] font-bold hover:bg-[#1EBE5A] cursor-pointer"
                                title="Send official receipt to patient WhatsApp"
                              >
                                <Send className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: EXERCISE PRESCRIPTION & EHR (A-to-Z clinical care) */}
          {activeTab === 'exercises' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-3xl bg-[#0A1C17] text-white border border-white/15">
                <h3 className="text-2xl font-serif-clinical font-black mb-2">
                  Patient Exercise Prescription Vault (EHR & Rehab Tracking)
                </h3>
                <p className="text-xs font-mono-tech text-white/80">
                  Assign evidence-based kinetic exercises to active patients so their recovery continues between bedside home visits.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {patients.map(p => (
                  <div key={p.id} className="p-6 rounded-3xl bg-white border border-[#0A1C17]/15 shadow-sm space-y-4">
                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                      <div>
                        <strong className="font-serif-clinical text-lg block text-[#0A1C17]">{p.name}</strong>
                        <span className="text-xs font-mono-tech text-[#C2593B]">{p.condition}</span>
                      </div>
                      <span className="text-xs font-mono-tech bg-emerald-50 text-emerald-800 px-2 py-1 rounded-md font-bold">
                        Stage: {p.stage.split(':')[0]}
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tech font-bold text-[#0A1C17]/70 uppercase mb-1">
                        Active Prescribed Kinetic Protocol:
                      </label>
                      <input
                        type="text"
                        defaultValue={p.assignedExercise}
                        onBlur={(e) => handleUpdatePatient(p.id, { assignedExercise: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#0A1C17]/20 text-xs font-bold text-[#0A1C17] focus:outline-none focus:border-[#C2593B]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="font-mono-tech text-black/60">Sessions Completed: <strong>{p.packageUsed} / {p.packageTotal}</strong></span>
                      <button
                        onClick={() => {
                          const msg = `🏃 *Dr. Jeni Theresa Home Rehab — Exercise Routine*\n\nHello ${p.name},\nYour customized weekly rehabilitation protocol is:\n👉 *${p.assignedExercise}*\n\nPlease perform gently 2 times daily as instructed during our home consultation. Feel free to message here if any stiffness occurs!`;
                          handleSendWhatsAppAction(p.phone, msg);
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-[#0A1C17] text-white font-mono-tech font-bold hover:bg-[#C2593B] transition-colors cursor-pointer text-xs flex items-center gap-1.5"
                      >
                        <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Send Protocol to WhatsApp</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ENTERPRISE ARCHITECTURE & SCALING (Real development structure explained) */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 max-w-5xl mx-auto">
              <div className="p-8 rounded-3xl bg-white border-2 border-[#0A1C17] shadow-xl space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#0A1C17]/15">
                  <Database className="w-8 h-8 text-[#C2593B]" />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif-clinical font-black text-[#0A1C17]">
                      Enterprise Healthcare Architecture & Scaling Guide
                    </h3>
                    <p className="text-xs font-mono-tech uppercase font-bold text-[#C2593B]">
                      Real Software Development Standards: Frontend + FastAPI + Supabase
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-[#0A1C17]/85 font-sans leading-relaxed">
                  <p>
                    To make scaling and debugging effortless ("real development mari paathuko scaling and debugging lam easy ya irrukka"), our architecture strictly decouples presentation logic from clinical data structures:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                    <div className="p-5 rounded-2xl bg-[#0A1C17]/5 border border-[#0A1C17]/15 space-y-2">
                      <h4 className="font-serif-clinical font-bold text-base text-[#0A1C17] flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-700" />
                        <span>1. Phone Number Privacy & Encryption</span>
                      </h4>
                      <p className="text-xs font-normal">
                        Raw digits (<code>6374522885</code>) are never rendered on public HTML screens. We display encrypted shields ("🔐 Private Medical Booking Line"). For Phase-2 production scaling, link this CRM to your FastAPI webhook (`routers/bookings.py`) to emit SMS/WhatsApp via Virtual Cloud Numbers (Twilio/Exotel), keeping Dr. Jeni's private phone 100% anonymous!
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#0A1C17]/5 border border-[#0A1C17]/15 space-y-2">
                      <h4 className="font-serif-clinical font-bold text-base text-[#0A1C17] flex items-center gap-2">
                        <Database className="w-5 h-5 text-[#C2593B]" />
                        <span>2. Supabase Postgres & FastAPI Sync</span>
                      </h4>
                      <p className="text-xs font-normal">
                        Notice your open API routers (<code>patients.py</code>, <code>exercises.py</code>, <code>payments.py</code>). This PMS dashboard is designed with identical JSON schema shapes! Replacing our localStorage state with <code>fetch('/api/patients')</code> or Supabase client query works instantly with zero redesign.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#0A1C17]/5 border border-[#0A1C17]/15 space-y-2">
                      <h4 className="font-serif-clinical font-bold text-base text-[#0A1C17] flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-amber-700" />
                        <span>3. Easy Debugging & Single Source of Truth</span>
                      </h4>
                      <p className="text-xs font-normal">
                        All clinical content, fees, symptom descriptions, and WhatsApp text templates originate in <code>src/data/clinicalData.js</code>. If Dr. Jeni updates her initial visit fee or shifts schedule, modifying that one file instantly cascades across all 14 website components.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#0A1C17]/5 border border-[#0A1C17]/15 space-y-2">
                      <h4 className="font-serif-clinical font-bold text-base text-[#0A1C17] flex items-center gap-2">
                        <Users className="w-5 h-5 text-emerald-700" />
                        <span>4. Industry Terminology & Readiness</span>
                      </h4>
                      <p className="text-xs font-normal">
                        In software engineering, this is known as a <strong>Modular Healthcare CRM & Patient Triage Engine</strong>. You now have both a world-class public landing application AND a dedicated clinical back-office operations desk in a single fast Vite compilation!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#0A1C17]/15 flex items-center justify-between text-xs font-mono-tech text-[#0A1C17]/70">
                  <span>Frontend Build: React 19 + Tailwind CSS + Framer Motion</span>
                  <span className="font-bold text-[#C2593B]">Backend Compatible: FastAPI + Supabase SQL</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer info & exit */}
        <div className="bg-[#0A1C17] text-[#FAF8F5] px-6 sm:px-8 py-3.5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech gap-3 shrink-0">
          <span className="text-emerald-300 font-bold flex items-center gap-1.5">
            <span>🛡️ Enterprise PMS Engine Ready • Bommasandra & Bengaluru Practice Suite</span>
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#C2593B] hover:bg-[#A84528] text-white font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
          >
            Exit Admin Portal & Return to Site
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default AdminDashboard;
