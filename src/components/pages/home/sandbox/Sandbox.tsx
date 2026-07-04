import React, { useState } from "react";
import { 
  Calculator, 
  Boxes, 
  ClipboardCheck 
} from "lucide-react";
import { EstimatorControls, EstimatorOutput } from "./Estimator";
import { LedgerControls, LedgerOutput } from "./Ledger";
import { DprControls, DprOutput } from "./DprBuilder";

type TabId = "estimator" | "ledger" | "dpr";

interface EstimatorResult {
  cement: number;
  steel: number;
  cost: number;
  timeline: number;
}

export default function Sandbox() {
  const [activeTab, setActiveTab] = useState<TabId>("estimator");

  // Tab 1 (Estimator) State
  const [projectType, setProjectType] = useState<"villa" | "commercial" | "warehouse">("villa");
  const [area, setArea] = useState<number>(3500);

  // Tab 2 (Ledger) State
  const [cementStock, setCementStock] = useState<number>(120);
  const [steelStock, setSteelStock] = useState<number>(8.5);
  const [ledgerLogs, setLedgerLogs] = useState<string[]>([
    "Initial stock balances verified by store manager.",
    "Received 50 Cement bags from UltraTech PO-2026-012."
  ]);

  // Tab 3 (DPR) State
  const [tasks, setTasks] = useState([
    { id: 1, text: "Foundation Excavation & Earthwork", done: true },
    { id: 2, text: "Footing Concrete Pouring (M25)", done: true },
    { id: 3, text: "Column Reinforcement Tying", done: false },
    { id: 4, text: "Ground Level Brickwork Masonry", done: false },
  ]);

  // Estimator Calculations
  const calculateEstimates = (): EstimatorResult => {
    let multiplier = 1.0;
    if (projectType === "commercial") multiplier = 1.4;
    if (projectType === "warehouse") multiplier = 0.8;

    return {
      cement: Math.round(area * 0.45 * multiplier),
      steel: Number((area * 0.0032 * multiplier).toFixed(1)),
      cost: area * 1850 * multiplier,
      timeline: Math.ceil(area * 0.00025 + 4),
    };
  };

  const estimates = calculateEstimates();

  // Ledger Actions
  const handleCementChange = (amount: number) => {
    const newStock = Math.max(0, cementStock + amount);
    setCementStock(newStock);
    const action = amount > 0 ? "Received" : "Issued";
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLedgerLogs(prev => [
      `[${time}] - ${action} ${Math.abs(amount)} Cement bags ${amount > 0 ? "into main store" : "to Site Block-A"}.`,
      ...prev
    ]);
  };

  const handleSteelChange = (amount: number) => {
    const newStock = Math.max(0, Number((steelStock + amount).toFixed(1)));
    setSteelStock(newStock);
    const action = amount > 0 ? "Received" : "Issued";
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLedgerLogs(prev => [
      `[${time}] - ${action} ${Math.abs(amount)} Tons of TMT Steel ${amount > 0 ? "into stockyard" : "to Bar Bending Yard"}.`,
      ...prev
    ]);
  };

  // DPR Actions
  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const dprProgress = Math.round((tasks.filter(t => t.done).length / tasks.length) * 100);

  return (
    <section id="sandbox" className="py-28 border-t border-border-default/60 bg-transparent relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-blue-700 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full">
            Interactive Sandbox
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary mt-5">
            Experience BluRick in action
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mt-4 leading-relaxed">
            Interact with our live operational modules below to see how our estimation engine, material trackers, and progress reporters streamline actual site workflows.
          </p>
        </div>

        {/* Sandbox Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Tab Controls */}
            <div className="flex flex-col gap-2 p-2 bg-bg-canvas/50 border border-border-default rounded-2xl">
              <button
                onClick={() => setActiveTab("estimator")}
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left transition-all duration-300 ${
                  activeTab === "estimator"
                    ? "bg-bg-card border border-border-default text-text-primary shadow-sm"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-card/30 border border-transparent"
                }`}
              >
                <Calculator className={`w-5 h-5 ${activeTab === "estimator" ? "text-blue-600" : ""}`} />
                <div>
                  <p className="text-xs font-bold">1. Material & Cost Estimator</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Calculate resources based on project square footage</p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("ledger")}
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left transition-all duration-300 ${
                  activeTab === "ledger"
                    ? "bg-bg-card border border-border-default text-text-primary shadow-sm"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-card/30 border border-transparent"
                }`}
              >
                <Boxes className={`w-5 h-5 ${activeTab === "ledger" ? "text-blue-600" : ""}`} />
                <div>
                  <p className="text-xs font-bold">2. Stock Ledger Simulator</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Track inventory flow with real-time threshold warnings</p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("dpr")}
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left transition-all duration-300 ${
                  activeTab === "dpr"
                    ? "bg-bg-card border border-border-default text-text-primary shadow-sm"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-card/30 border border-transparent"
                }`}
              >
                <ClipboardCheck className={`w-5 h-5 ${activeTab === "dpr" ? "text-blue-600" : ""}`} />
                <div>
                  <p className="text-xs font-bold">3. Daily Progress Builder</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Toggle site checklists to compile a live DPR summary</p>
                </div>
              </button>
            </div>

            {/* Interactive Inputs based on Active Tab */}
            <div className="bg-bg-card border border-border-default rounded-2xl p-6 shadow-sm">
              {activeTab === "estimator" && (
                <EstimatorControls
                  projectType={projectType}
                  setProjectType={setProjectType}
                  area={area}
                  setArea={setArea}
                />
              )}

              {activeTab === "ledger" && (
                <LedgerControls
                  handleCementChange={handleCementChange}
                  handleSteelChange={handleSteelChange}
                />
              )}

              {activeTab === "dpr" && (
                <DprControls
                  tasks={tasks}
                  toggleTask={toggleTask}
                />
              )}
            </div>

          </div>

          {/* Right Column: BrowserWindow Dynamic Output Dashboard */}
          <div className="lg:col-span-7 flex justify-center items-center">
            {activeTab === "estimator" && (
              <EstimatorOutput
                projectType={projectType}
                area={area}
                estimates={estimates}
              />
            )}

            {activeTab === "ledger" && (
              <LedgerOutput
                cementStock={cementStock}
                steelStock={steelStock}
                ledgerLogs={ledgerLogs}
              />
            )}

            {activeTab === "dpr" && (
              <DprOutput
                tasks={tasks}
                dprProgress={dprProgress}
              />
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
