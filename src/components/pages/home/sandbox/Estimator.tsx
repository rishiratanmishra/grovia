import React from "react";
import { BrowserWindow } from "../features/BrowserWindow";

interface EstimatorControlsProps {
  projectType: "villa" | "commercial" | "warehouse";
  setProjectType: (type: "villa" | "commercial" | "warehouse") => void;
  area: number;
  setArea: (area: number) => void;
}

export const EstimatorControls = ({
  projectType,
  setProjectType,
  area,
  setArea,
}: EstimatorControlsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-xs font-bold text-text-primary block mb-2.5">Project Structure Type</label>
        <div className="grid grid-cols-3 gap-2">
          {(["villa", "commercial", "warehouse"] as const).map(type => (
            <button
              key={type}
              onClick={() => setProjectType(type)}
              className={`py-2 rounded-lg border text-xs font-semibold uppercase tracking-wider transition-all ${
                projectType === type
                  ? "border-blue-600 bg-blue-500/5 text-blue-700 font-bold"
                  : "border-border-default text-text-secondary hover:bg-bg-canvas/50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-bold text-text-primary">Built-up Area</label>
          <span className="text-xs font-mono font-bold text-blue-700">{area.toLocaleString()} Sq.Ft.</span>
        </div>
        <input
          type="range"
          min={1000}
          max={20000}
          step={500}
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          className="w-full h-1.5 bg-bg-canvas rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[9px] text-text-muted mt-1.5 font-mono">
          <span>1,000 Sq.Ft.</span>
          <span>20,000 Sq.Ft.</span>
        </div>
      </div>
    </div>
  );
};

interface EstimatorOutputProps {
  projectType: "villa" | "commercial" | "warehouse";
  area: number;
  estimates: {
    cement: number;
    steel: number;
    cost: number;
    timeline: number;
  };
}

export const EstimatorOutput = ({ projectType, area, estimates }: EstimatorOutputProps) => {
  return (
    <BrowserWindow title="estimator.os / output-summary">
      <div className="space-y-5">
        <div className="flex justify-between items-center pb-2 border-b border-border-default">
          <div>
            <h4 className="text-xs font-bold text-text-primary capitalize">{projectType} Estimate</h4>
            <p className="text-[10px] text-text-muted">Calculated for {area.toLocaleString()} Sq.Ft.</p>
          </div>
          <span className="text-[10px] text-blue-700 bg-blue-500/10 px-2.5 py-0.5 rounded font-bold font-mono">
            ±5% Margin
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-canvas/40 border border-border-default rounded-xl p-3.5">
            <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">OPC Cement</p>
            <p className="text-lg font-extrabold text-text-primary mt-1 font-mono">{estimates.cement.toLocaleString()}</p>
            <p className="text-[9px] text-text-muted mt-0.5">Bags required</p>
          </div>

          <div className="bg-bg-canvas/40 border border-border-default rounded-xl p-3.5">
            <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">TMT Steel</p>
            <p className="text-lg font-extrabold text-text-primary mt-1 font-mono">{estimates.steel} Tons</p>
            <p className="text-[9px] text-text-muted mt-0.5">Reinforcement load</p>
          </div>

          <div className="bg-bg-canvas/40 border border-border-default rounded-xl p-3.5">
            <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Estimated Budget</p>
            <p className="text-lg font-extrabold text-text-primary mt-1 font-mono">₹{estimates.cost.toLocaleString()}</p>
            <p className="text-[9px] text-text-muted mt-0.5">Avg. construction cost</p>
          </div>

          <div className="bg-bg-canvas/40 border border-border-default rounded-xl p-3.5">
            <p className="text-[10px] text-text-secondary font-semibold uppercase tracking-wider">Project Timeline</p>
            <p className="text-lg font-extrabold text-text-primary mt-1 font-mono">{estimates.timeline} Mos</p>
            <p className="text-[9px] text-text-muted mt-0.5">Est. target handover</p>
          </div>
        </div>
      </div>
    </BrowserWindow>
  );
};
