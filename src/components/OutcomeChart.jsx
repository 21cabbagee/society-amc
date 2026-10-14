import React, { useState } from 'react';
import { TrendingUp, Wrench, ShieldCheck, Building2, DollarSign, Clock, Users, Zap } from 'lucide-react';

/**
 * OutcomeChart for SocietyAMC (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $1,450/year retail home warranty premiums & claim denials ($6 services layer)
 * with HOA Enclave Collective Maintenance Autopilot ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "HOA Enclave Appliance Maintenance Autopilot",
  defaultHomes = 250, // homes in HOA society
  onCtaClick
}) {
  const [homes, setHomes] = useState(defaultHomes);

  // Legacy retail home warranty: $85/mo premium + $125 service call co-pays + out-of-pocket denied repairs (~$1,450/home/yr)
  const legacyAnnualPerHome = 1450;
  const legacyTotalAnnualCost = homes * legacyAnnualPerHome;
  const legacyMonthlyCost = Math.round(legacyTotalAnnualCost / 12);

  // SocietyAMC collective contract: $39/mo ($468/home/yr) all-inclusive
  const autoAnnualPerHome = 468;
  const autoTotalAnnualCost = homes * autoAnnualPerHome;
  const autoMonthlyCost = Math.round(autoTotalAnnualCost / 12);

  const netAnnualSavings = legacyTotalAnnualCost - autoTotalAnnualCost;
  const savingsPercent = Math.round(((legacyTotalAnnualCost - autoTotalAnnualCost) / legacyTotalAnnualCost) * 100);

  const maxCost = Math.max(legacyMonthlyCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoMonthlyCost / maxCost) * 100), 12);

  return (
    <div className="relative rounded-2xl border border-emerald-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-emerald-500/40 text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs Predatory Warranty Insurers ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            HOA Community Economics: <span className="text-emerald-400">{savingsPercent}% Overhead Crushed</span>
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            Retail home warranty insurers deny 48% of claims on technicalities while charging $125 service call co-pays. SocietyAMC pools neighborhood buying power into an automated AMC contract with zero deductibles and dedicated technicians.
          </p>
        </div>

        <div className="text-right bg-slate-900/80 border border-emerald-500/30 rounded-xl p-3 px-4 min-w-[200px]">
          <span className="text-[11px] text-slate-400 block font-medium">Annual Community Savings</span>
          <span className="text-2xl md:text-3xl font-black text-emerald-400">
            ${netAnnualSavings.toLocaleString()}
          </span>
          <span className="text-[10px] text-emerald-300/80 flex items-center justify-end gap-1 font-semibold font-mono">
            <TrendingUp className="w-3 h-3" /> 0% Claim Denial Rate
          </span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="py-6 border-b border-white/10">
        <div className="flex items-center justify-between text-sm mb-3">
          <label className="text-slate-300 font-semibold flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            Homes Covered in HOA Society:
          </label>
          <span className="text-base font-bold text-white bg-slate-900 px-3 py-1 rounded-lg border border-emerald-500/30 font-mono">
            {homes} Homes (${legacyTotalAnnualCost.toLocaleString()}/yr Retail Spend)
          </span>
        </div>
        <input 
          type="range" 
          min={50} 
          max={600} 
          step={25}
          value={homes}
          onChange={(e) => setHomes(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>50 Homes (Boutique HOA)</span>
          <span>250 Homes (Master-Planned Community)</span>
          <span>600+ Homes (Mega-Enclave Society)</span>
        </div>
      </div>

      {/* Bklit UI Visual Comparison Chart & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
        {/* SVG Visual Bars */}
        <div className="md:col-span-5 bg-slate-900 rounded-xl p-5 border border-white/10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between font-mono">
            <span>Monthly Community Spend</span>
            <span className="text-[10px] text-slate-500">Live Escrow Simulation</span>
          </div>

          <div className="space-y-4">
            {/* Legacy Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Retail Home Warranties & Deductibles ($6 Layer)
                </span>
                <span className="font-mono font-bold text-rose-300">${legacyMonthlyCost.toLocaleString()}/mo</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-rose-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-rose-600 to-emerald-600 transition-all duration-300 rounded-lg"
                  style={{ width: `${legacyBarHeight}%` }}
                />
              </div>
            </div>

            {/* Autonomous Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  SocietyAMC Collective Autopilot ($1 Layer)
                </span>
                <span className="font-mono font-bold text-emerald-300">${autoMonthlyCost.toLocaleString()}/mo</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-emerald-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 rounded-lg shadow-lg shadow-emerald-500/30"
                  style={{ width: `${autoBarHeight}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Annual Net HOA Cash Slashed:</span>
            <span className="text-sm font-bold text-emerald-400">+${netAnnualSavings.toLocaleString()}</span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Zero Deductibles & 100% Replacement Escrow</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                No $125 co-pays. If a compressor or motor fails, replacement parts are funded instantly through pre-authorized escrow.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">4-Hour Emergency Dispatch SLA</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Dedicated HVAC and plumbing technicians stationed directly within your zip code radius ensure summer AC or winter heating failures are resolved same-day.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Predictive Biannual Tune-Ups</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Automated seasonal filter changes, coil cleanings, and duct sanitization extend appliance lifespan by 4.5 years, preventing catastrophic breakdowns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
