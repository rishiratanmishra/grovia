import React from "react";
import { BrowserWindow } from "../features/BrowserWindow";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface DprControlsProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

export const DprControls = ({ tasks, toggleTask }: DprControlsProps) => {
  return (
    <div className="space-y-4">
      <label className="text-xs font-bold text-text-primary block mb-1">Today&apos;s Completed Tasks</label>
      <div className="space-y-3">
        {tasks.map(task => (
          <div 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            className="flex items-center gap-3 p-2.5 bg-bg-canvas/50 hover:bg-bg-canvas border border-border-default rounded-xl cursor-pointer select-none transition-all"
          >
            <input
              type="checkbox"
              checked={task.done}
              readOnly
              className="h-4 w-4 rounded border-border-default text-blue-600 accent-blue-600"
            />
            <span className={`text-xs ${task.done ? "line-through text-text-muted" : "text-text-primary font-medium"}`}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface DprOutputProps {
  tasks: Task[];
  dprProgress: number;
}

export const DprOutput = ({ tasks, dprProgress }: DprOutputProps) => {
  return (
    <BrowserWindow title="dpr-generator.os / report-preview">
      <div className="space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-border-default">
          <div>
            <h4 className="text-xs font-bold text-text-primary">Daily Progress Summary</h4>
            <p className="text-[9px] text-text-muted">Sector 62 Plaza • Day Shift</p>
          </div>
          <span className={`text-[9px] px-2 py-0.5 rounded font-bold ${
            dprProgress === 100 
              ? "bg-emerald-500/10 text-emerald-600" 
              : "bg-amber-500/10 text-amber-600"
          }`}>
            {dprProgress === 100 ? "Ready for Sign-off" : "Draft report"}
          </span>
        </div>

        {/* Progress Ring / Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-semibold text-text-primary">
            <span>Daily Work Completion</span>
            <span>{dprProgress}%</span>
          </div>
          <div className="w-full bg-bg-canvas h-2 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full transition-all duration-500" style={{ width: `${dprProgress}%` }}></div>
          </div>
        </div>

        {/* Verified Details */}
        <div className="border border-border-default rounded-xl p-3 bg-bg-canvas/30 text-[10px] space-y-1.5">
          <div className="flex justify-between">
            <span className="text-text-muted">Completed Activities:</span>
            <span className="font-semibold text-text-primary">{tasks.filter(t => t.done).length} / {tasks.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-muted">Weather report:</span>
            <span className="font-semibold text-text-primary">Clear (34°C)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-muted">Labor present:</span>
            <span className="font-semibold text-text-primary">128 workers verified</span>
          </div>
        </div>
      </div>
    </BrowserWindow>
  );
};
