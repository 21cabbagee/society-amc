import React, { useState, useId } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  AlertTriangle, 
  Building2, 
  Users, 
  ArrowRight, 
  Award, 
  Zap, 
  DollarSign, 
  Sparkles,
  Settings,
  PhoneCall
} from 'lucide-react';
import confetti from 'canvas-confetti';

const SOCIETIES = [
  { id: 'silvercreek', name: 'Silver Creek Country Club Estates', homes: 520, coveredToday: 410, address: 'San Jose, CA' },
  { id: 'emerald', name: 'Emerald Hills Gated Community', homes: 340, coveredToday: 285, address: 'Redwood City, CA' },
  { id: 'saratoga', name: 'Saratoga Foothills HOA', homes: 290, coveredToday: 240, address: 'Saratoga, CA' },
  { id: 'blackhawk', name: 'Blackhawk Luxury Enclave', homes: 680, coveredToday: 590, address: 'Danville, CA' }
];

const APPLIANCES = [
  { id: 'hvac', name: 'Central HVAC & Heat Pump', icon: '❄️', status: 'Optimal', lastService: 'Spring Tune-Up Completed', replacementCost: '$8,500' },
  { id: 'fridge', name: 'Sub-Zero French Door Refrigerator', icon: '🧊', status: 'Optimal', lastService: 'Condenser Coils Flushed', replacementCost: '$3,200' },
  { id: 'washer', name: 'Speed Queen Washer & Dryer', icon: '🧺', status: 'Scheduled', lastService: 'Dryer Lint Duct Cleared', replacementCost: '$2,400' },
  { id: 'ro', name: 'Whole-Home RO Water Purifier', icon: '💧', status: 'Filter Due', lastService: 'Stage 3 Membrane Due Nov 1', replacementCost: '$1,200' }
];

export default function App() {
  const selectedSocietyId = useId();
  const homeownerNameId = useId();
  const streetAddressId = useId();
  const failedApplianceId = useId();
  const issueTypeId = useId();

  // State
  const [selectedSociety, setSelectedSociety] = useState(SOCIETIES[0]);
  const [claimForm, setClaimForm] = useState({
    homeowner: 'Jonathan Vance',
    address: '422 Silver Creek Valley Rd',
    appliance: 'Central HVAC & Heat Pump',
    issue: 'Blower fan vibrating, weak cooling airflow'
  });

  const [claimDispatched, setClaimDispatched] = useState(false);

  // CAB Modal
  const [isCabModalOpen, setIsCabModalOpen] = useState(false);
  const [cabSubmitted, setCabSubmitted] = useState(false);
  const [cabForm, setCabForm] = useState({
    societyName: '',
    trusteeName: '',
    email: '',
    homeCount: '200-500 Homes'
  });

  const handleClaim = (e) => {
    e.preventDefault();
    setClaimDispatched(true);
    confetti({
      particleCount: 85,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCabSubmit = (e) => {
    e.preventDefault();
    setCabSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Banner: CAB Announcement */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-b border-emerald-500/30 px-4 py-2.5 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-300">Customer Advisory Board (CAB) For Gated HOAs:</span>
            <span className="text-slate-300">Join 10 community boards locking 70% discount ($69/yr per home instead of $240/yr).</span>
          </div>
          <button 
            onClick={() => setIsCabModalOpen(true)}
            className="px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-full transition-all shadow-sm hover:scale-105"
          >
            Claim HOA Board Seat →
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-slate-950 font-black text-xl">
              🛠️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-tight">SocietyAMC</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Community Contract</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-none">All-in-One Gated Community Appliance Warranty</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#appliances" className="hover:text-emerald-400 transition-colors">Covered Appliances</a>
            <a href="#claim-simulator" className="hover:text-emerald-400 transition-colors">Diagnostic Dispatch</a>
            <a href="#schedule" className="hover:text-emerald-400 transition-colors">Seasonal Tune-Ups</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Community Tiers</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsCabModalOpen(true)}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-xs rounded-lg transition-all shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" />
              <span>Join CAB</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Callout Fees • Certified Society Technician Pools • Pre-Negotiated Bulk Rates</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            All-in-One Gated Community Appliance Maintenance Subscription
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
            Stop juggling 6 different unvetted technicians for HVAC, refrigerators, and water filters. SocietyAMC pools maintenance contracts across your entire gated neighborhood. Get unlimited seasonal tune-ups, $0 diagnostic visits, and certified dedicated technician pools.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="#claim-simulator" 
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
            >
              <span>Test Emergency Service Request</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#appliances" 
              className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm rounded-xl transition-all flex items-center gap-2"
            >
              <Wrench className="w-4 h-4 text-emerald-400" />
              <span>Inspect Covered Systems</span>
            </a>
          </div>

          {/* Market TAM & Metrics */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="text-2xl font-black text-emerald-400">$480M</div>
              <div className="text-xs text-slate-400 font-medium">Gated Society AMC TAM</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="text-2xl font-black text-white">$0</div>
              <div className="text-xs text-slate-400 font-medium">Emergency Diagnostic Callout Fee</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="text-2xl font-black text-emerald-400">4 Hours</div>
              <div className="text-xs text-slate-400 font-medium">Average On-Site Technician ETA</div>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
              <div className="text-2xl font-black text-white">$240/yr</div>
              <div className="text-xs text-slate-400 font-medium">Full Home Multi-Appliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Covered Appliances Roster */}
      <section id="appliances" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Neighborhood Fleet Protection</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Covered Home Systems & Health Monitor
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {SOCIETIES.map((soc) => (
                <button
                  key={soc.id}
                  onClick={() => setSelectedSociety(soc)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedSociety.id === soc.id
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {soc.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-bold text-white">{selectedSociety.name}</h3>
                <div className="text-xs text-slate-400">{selectedSociety.address} • {selectedSociety.coveredToday} of {selectedSociety.homes} Homes Active on Society Contract</div>
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full">
                Dedicated Pool Techs Assigned
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {APPLIANCES.map((item) => (
                <div key={item.id} className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-2">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-[11px] text-slate-400">{item.lastService}</div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-850 text-xs">
                    <span className="text-slate-500">Coverage limit:</span>
                    <span className="font-bold text-emerald-400">{item.replacementCost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: 1-Click Diagnostic Request */}
      <section id="claim-simulator" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Fast-Response Dispatch</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              On-Demand Appliance Repair & Diagnostic Request
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              No phone trees or 4-hour arrival windows. Dedicated society technicians live within 15 minutes of your gated community gate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form */}
            <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <form onSubmit={handleClaim} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={homeownerNameId} className="block text-xs font-semibold text-slate-300 mb-1">
                      Homeowner Name
                    </label>
                    <input 
                      id={homeownerNameId}
                      type="text" 
                      value={claimForm.homeowner}
                      onChange={(e) => setClaimForm({ ...claimForm, homeowner: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={streetAddressId} className="block text-xs font-semibold text-slate-300 mb-1">
                      Street Address
                    </label>
                    <input 
                      id={streetAddressId}
                      type="text" 
                      value={claimForm.address}
                      onChange={(e) => setClaimForm({ ...claimForm, address: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={failedApplianceId} className="block text-xs font-semibold text-slate-300 mb-1">
                    Malfunctioning Appliance
                  </label>
                  <select 
                    id={failedApplianceId}
                    value={claimForm.appliance}
                    onChange={(e) => setClaimForm({ ...claimForm, appliance: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Central HVAC & Heat Pump">Central HVAC & Heat Pump (Not cooling / Heating)</option>
                    <option value="Sub-Zero French Door Refrigerator">Sub-Zero Refrigerator (Freezer iced over / temp error)</option>
                    <option value="Speed Queen Washer & Dryer">Washer & Dryer (Drum spinning code E24)</option>
                    <option value="Whole-Home RO Water Purifier">Water Purifier (Low water pressure / filter red light)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={issueTypeId} className="block text-xs font-semibold text-slate-300 mb-1">
                    Observed Symptoms
                  </label>
                  <textarea 
                    id={issueTypeId}
                    rows="2"
                    value={claimForm.issue}
                    onChange={(e) => setClaimForm({ ...claimForm, issue: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 mt-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Dispatch Certified Society Tech ($0 Diagnostic)</span>
                </button>
              </form>
            </div>

            {/* Right: Confirmation Dispatch Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Dispatch Status</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  $0 Callout Under AMC
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-sm font-bold text-white">{claimForm.appliance}</div>
                  <p className="text-xs text-slate-400 italic font-mono">"{claimForm.issue}"</p>
                  <div className="pt-2 border-t border-slate-800 text-xs flex justify-between">
                    <span className="text-slate-400">Diagnostic Fee:</span>
                    <span className="font-bold text-emerald-400">$0.00 (Standard: $189)</span>
                  </div>
                  <div className="text-xs flex justify-between">
                    <span className="text-slate-400">OEM Parts Guarantee:</span>
                    <span className="font-bold text-emerald-400">100% Covered</span>
                  </div>
                </div>

                {claimDispatched ? (
                  <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-xl p-4 text-xs text-emerald-300 space-y-2 animate-fadeIn">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Technician En Route</span>
                    </div>
                    <p>
                      Master Tech Dave Kowalski has been dispatched from the {selectedSociety.name.split(' ')[0]} maintenance hub. ETA: <strong>35 minutes</strong>.
                    </p>
                  </div>
                ) : (
                  <div className="text-xs text-slate-400 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    Submit the form to dispatch an on-site technician immediately. Gated security barcode generated automatically for gate check-in.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Subscription Tiers</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Guaranteed Appliance Protection
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Less than the cost of a single emergency HVAC diagnostic visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Essential Trio */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-base font-bold text-white">Essential Trio</div>
                <div className="text-xs text-slate-400 mt-1">Core major appliances</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">$15</span>
                  <span className="text-xs text-slate-400">/month ($180/yr)</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Central HVAC, Refrigerator & Washing Machine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Annual spring HVAC tune-up</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>$0 diagnostic fees</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => setIsCabModalOpen(true)}
                className="mt-8 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Enroll Home
              </button>
            </div>

            {/* Complete Home AMC (Highlighted) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500/50 rounded-2xl p-6 flex flex-col justify-between relative shadow-xl shadow-emerald-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider rounded-full">
                Most Popular
              </div>
              <div>
                <div className="text-base font-bold text-white">Complete Home AMC</div>
                <div className="text-xs text-slate-400 mt-1">For single-family homes & townhouses</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-emerald-400">$20</span>
                  <span className="text-xs text-slate-400">/month ($240/yr)</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>All major appliances + RO water purifier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Biannual HVAC tune-up (Spring + Fall)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Water heater anode flush & lint duct clear</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Unlimited free emergency callouts</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => setIsCabModalOpen(true)}
                className="mt-8 w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-md shadow-emerald-500/20"
              >
                Join CAB for HOA ($69/yr Rate)
              </button>
            </div>

            {/* Estate Villa Elite */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-base font-bold text-white">Estate Villa Elite</div>
                <div className="text-xs text-slate-400 mt-1">For large custom luxury residences</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">$39</span>
                  <span className="text-xs text-slate-400">/month ($468/yr)</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dual multi-zone HVAC & commercial chillers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pool pump & backup generator service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>2-hour VIP emergency response guarantee</span>
                  </li>
                </ul>
              </div>
              <button 
                onClick={() => setIsCabModalOpen(true)}
                className="mt-8 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Contact Estate Desk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-10 px-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">SocietyAMC</span>
            <span>• All-in-One Gated Community Appliance Maintenance Subscription</span>
          </div>
          <div>
            Community maintenance contracts protecting residential peace of mind.
          </div>
        </div>
      </footer>

      {/* CAB 10-Member Modal */}
      {isCabModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setIsCabModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            {!cabSubmitted ? (
              <form onSubmit={handleCabSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Award className="w-5 h-5" />
                  <span>SocietyAMC Customer Advisory Board (CAB)</span>
                </div>
                <h3 className="text-xl font-black text-white">Join 10 Founding Gated Communities</h3>
                <p className="text-xs text-slate-400">
                  Negotiate a neighborhood-wide contract for your HOA board with 70% founding discount ($69/yr per home instead of $240/yr).
                </p>

                <div className="space-y-3 pt-2">
                  <div>
                    <label htmlFor="community-hoa" className="block text-xs font-semibold text-slate-300 mb-1">Gated Community / HOA Name</label>
                    <input 
                      id="community-hoa"
                      type="text" 
                      placeholder="e.g. Silver Creek Country Club"
                      value={cabForm.societyName}
                      onChange={(e) => setCabForm({ ...cabForm, societyName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="hoa-board-member" className="block text-xs font-semibold text-slate-300 mb-1">HOA Board Trustee / President</label>
                    <input 
                      id="hoa-board-member"
                      type="text" 
                      placeholder="e.g. Robert Caldwell"
                      value={cabForm.trusteeName}
                      onChange={(e) => setCabForm({ ...cabForm, trusteeName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="official-email" className="block text-xs font-semibold text-slate-300 mb-1">Official HOA Email</label>
                    <input 
                      id="official-email"
                      type="email" 
                      placeholder="president@silvercreekhoa.com"
                      value={cabForm.email}
                      onChange={(e) => setCabForm({ ...cabForm, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/25"
                >
                  Reserve CAB Spot for Community
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-black text-white">CAB Application Received</h3>
                <p className="text-xs text-slate-300">
                  Welcome to SocietyAMC, <strong className="text-white">{cabForm.trusteeName}</strong>! Your community discount of $69/home/yr has been locked for <span className="text-emerald-400">{cabForm.societyName}</span>.
                </p>
                <button 
                  onClick={() => { setIsCabModalOpen(false); setCabSubmitted(false); }}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
