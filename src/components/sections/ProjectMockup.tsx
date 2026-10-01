import React, { useState } from 'react';
import { 
  MapPin, 
  Car, 
  CheckCircle2, 
  Clock, 
  Radio, 
  PenTool, 
  Building2
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'orbit' | 'atlas';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  const [orbitActiveTab, setOrbitActiveTab] = useState<'schedule' | 'map'>('schedule');
  const [atlasActiveTab, setAtlasActiveTab] = useState<'kanban' | 'blueprint'>('kanban');

  if (type === 'orbit') {
    return (
      <div className="w-full h-full bg-slate-950 text-slate-100 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col font-sans select-none text-xs">
        {/* Window Topbar */}
        <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-slate-500 font-mono text-[11px] ml-2">orbit-simulation.galvanek.de</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium">
              <Radio className="w-2.5 h-2.5 animate-pulse" /> Pusher Live
            </span>
            <span className="text-slate-400 text-[10px] font-mono hidden sm:inline">CET (Berlin)</span>
          </div>
        </div>

        {/* Orbit App Header */}
        <div className="bg-slate-900/60 p-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-bold text-white text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
              O.R.B.I.T.
              <span className="text-[10px] font-normal px-1.5 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded">
                v2.4
              </span>
            </div>

            <div className="flex bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
              <button
                onClick={() => setOrbitActiveTab('schedule')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  orbitActiveTab === 'schedule'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Schedule Simulation
              </button>
              <button
                onClick={() => setOrbitActiveTab('map')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  orbitActiveTab === 'map'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Route Polylines
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
            <span className="text-slate-500">Run:</span>
            <span className="text-blue-400 font-mono font-semibold">Iteration #3 (Optimized)</span>
          </div>
        </div>

        {/* Orbit Metrics Strip */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-slate-900/30 border-b border-slate-800/80">
          <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col">
            <span className="text-[10px] text-slate-400">Avg. Travel / Lead</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-bold text-white">24.6 min</span>
              <span className="text-[10px] text-emerald-400 font-medium">-18.4%</span>
            </div>
          </div>
          <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col">
            <span className="text-[10px] text-slate-400">Visits / Week</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-bold text-white">14 visits</span>
              <span className="text-[10px] text-blue-400 font-medium">+3 slots</span>
            </div>
          </div>
          <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex flex-col">
            <span className="text-[10px] text-slate-400">Route Efficiency</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-bold text-emerald-400">94.2%</span>
              <span className="text-[10px] text-slate-500">Tier A</span>
            </div>
          </div>
        </div>

        {/* Interactive Content View */}
        <div className="p-3 flex-1 flex flex-col min-h-[220px]">
          {orbitActiveTab === 'schedule' ? (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium px-1">
                <span>Sales Rep: Marc Weber (Berlin Region)</span>
                <span className="text-slate-500">CW 42 • Mon - Fri</span>
              </div>

              {/* Simulated Calendar Rows */}
              <div className="space-y-1.5">
                <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full bg-blue-500" />
                    <div>
                      <div className="font-semibold text-white text-[11px] flex items-center gap-1.5">
                        Dr. Schmidt • Energetik GmbH
                        <span className="text-[9px] px-1 py-0.2 bg-blue-500/20 text-blue-300 rounded">Accepted</span>
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" /> 09:30 - 11:00 • Berlin-Mitte
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">35 min slot</span>
                </div>

                <div className="p-1.5 rounded-lg bg-slate-900/70 border border-slate-800/80 flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px]">Travel Segment: 32 km via A100 Highway</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400/90 font-medium">22 mins</span>
                </div>

                <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full bg-purple-500" />
                    <div>
                      <div className="font-semibold text-white text-[11px] flex items-center gap-1.5">
                        SolarPark Potsdam • Simulation Match
                        <span className="text-[9px] px-1 py-0.2 bg-purple-500/20 text-purple-300 rounded">Proposed #2</span>
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" /> 11:30 - 13:00 • Potsdam Süd
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-300">0 Overlap</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative rounded-lg bg-slate-900 border border-slate-800 p-3 h-full flex flex-col justify-between overflow-hidden">
              {/* Map Polyline Simulation Graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">Leaflet Route Sync</span>
                  <div className="text-[11px] font-bold text-white">Berlin Base → Potsdam → Brandenburg</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 text-[10px]">
                  Optimal Polyline
                </span>
              </div>

              {/* Waypoint Nodes */}
              <div className="relative z-10 py-4 flex items-center justify-around">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[9px] shadow-lg shadow-blue-500/50">
                    1
                  </div>
                  <span className="text-[10px] text-slate-300">Berlin HQ</span>
                </div>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-2 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] bg-slate-950 px-1 text-slate-400">
                    22 min
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-[9px] shadow-lg shadow-purple-500/50">
                    2
                  </div>
                  <span className="text-[10px] text-slate-300">Potsdam Süd</span>
                </div>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-purple-500 to-emerald-500 mx-2 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] bg-slate-950 px-1 text-slate-400">
                    18 min
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-[9px] shadow-lg shadow-emerald-500/50">
                    3
                  </div>
                  <span className="text-[10px] text-slate-300">Home Base</span>
                </div>
              </div>

              <div className="relative z-10 text-[10px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800">
                <span>Calculated via HERE / Leaflet engine</span>
                <span className="text-emerald-400 font-medium">Saved 42km total roundtrip</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Atlas Mockup
  return (
    <div className="w-full h-full bg-slate-900 text-slate-100 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col font-sans select-none text-xs">
      {/* Window Topbar */}
      <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-slate-500 font-mono text-[11px] ml-2">atlas.galvanek-bau.de</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-medium">
            <Building2 className="w-2.5 h-2.5" /> Galvanek-Bau ERP
          </span>
          <span className="text-slate-400 text-[10px] font-mono hidden sm:inline">Role: PM (Bauleiter)</span>
        </div>
      </div>

      {/* Atlas App Header */}
      <div className="bg-slate-950/80 p-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-white text-sm tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#FF6933] ring-4 ring-orange-500/20" />
            ATLAS
            <span className="text-[10px] font-normal px-1.5 py-0.5 bg-orange-500/10 text-orange-400 border border-orange-500/30 rounded">
              Montago Web
            </span>
          </div>

          <div className="flex bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
            <button
              onClick={() => setAtlasActiveTab('kanban')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                atlasActiveTab === 'kanban'
                  ? 'bg-[#FF6933] text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Kanban & Trades
            </button>
            <button
              onClick={() => setAtlasActiveTab('blueprint')}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                atlasActiveTab === 'blueprint'
                  ? 'bg-[#FF6933] text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Konva Blueprint
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
          <MapPin className="w-3 h-3 text-orange-400" />
          <span className="text-slate-300 font-medium">Wohnpark München-Ost (PLZ 81677)</span>
        </div>
      </div>

      {/* Atlas Strip: Vendor Coverage & Security */}
      <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950/40 border-b border-slate-800/80">
        <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60 flex flex-col">
          <span className="text-[10px] text-slate-400">Assigned Vendors</span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-sm font-bold text-white">18 Trades</span>
            <span className="text-[10px] text-orange-400 font-medium">Zipcode match</span>
          </div>
        </div>
        <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60 flex flex-col">
          <span className="text-[10px] text-slate-400">Gantt Milestone</span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-sm font-bold text-white">88% Target</span>
            <span className="text-[10px] text-emerald-400 font-medium">On Schedule</span>
          </div>
        </div>
        <div className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60 flex flex-col">
          <span className="text-[10px] text-slate-400">RBAC Security</span>
          <div className="flex items-baseline gap-1 mt-0.5">
            <span className="text-sm font-bold text-orange-400">JWT Token</span>
            <span className="text-[10px] text-slate-400">Auto-refresh</span>
          </div>
        </div>
      </div>

      {/* Atlas Content View */}
      <div className="p-3 flex-1 flex flex-col min-h-[220px]">
        {atlasActiveTab === 'kanban' ? (
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium px-1">
              <span>Construction Stage Workflow (@dnd-kit)</span>
              <span className="text-slate-500">4 Active Trades</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {/* Column 1 */}
              <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px] font-semibold text-slate-300 pb-1 border-b border-slate-800">
                  <span>In Ausführung (In Progress)</span>
                  <span className="px-1.5 py-0.2 bg-blue-500/20 text-blue-400 rounded text-[9px]">2</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-colors">
                  <div className="text-[11px] font-semibold text-white">Rohbauarbeiten Ebene 3</div>
                  <div className="text-[9px] text-slate-400 mt-1 flex items-center justify-between">
                    <span>Vendor: Becker Beton GmbH</span>
                    <span className="text-orange-400">Due: 24.10</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-colors">
                  <div className="text-[11px] font-semibold text-white">Elektro-Verkabelung OG1</div>
                  <div className="text-[9px] text-slate-400 mt-1 flex items-center justify-between">
                    <span>Vendor: VoltMaster AG</span>
                    <span className="text-emerald-400">Due: 29.10</span>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-[10px] font-semibold text-slate-300 pb-1 border-b border-slate-800">
                  <span>Abnahme / Inspection</span>
                  <span className="px-1.5 py-0.2 bg-orange-500/20 text-orange-400 rounded text-[9px]">1</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-orange-500/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-orange-500/10 rounded-bl-full pointer-events-none" />
                  <div className="text-[11px] font-semibold text-white flex items-center gap-1">
                    Protokoll #819 - Brandschutz
                  </div>
                  <div className="text-[9px] text-slate-400 mt-1 flex items-center justify-between">
                    <span className="text-orange-300 font-medium">Digital Signature Pending</span>
                    <CheckCircle2 className="w-3 h-3 text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative rounded-lg bg-slate-950 border border-slate-800 p-3 h-full flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider">Konva Canvas Engine</span>
                <div className="text-[11px] font-bold text-white">Architectural Blueprint Markup (Plan-OG2.pdf)</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-300 border border-orange-500/30 text-[10px] flex items-center gap-1">
                <PenTool className="w-2.5 h-2.5" /> Defect Inspection Tool
              </span>
            </div>

            {/* Blueprint Grid & Annotation Pin */}
            <div className="relative my-3 p-3 bg-slate-900/90 rounded border border-dashed border-slate-700 flex items-center justify-around">
              <div className="text-[10px] text-slate-400 font-mono">Room 204 • Zone B</div>
              
              <div className="flex items-center gap-2 p-1.5 rounded bg-orange-950/70 border border-orange-500/60 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <span className="text-[10px] font-medium text-orange-200">
                  Defect #42: Conduit Spacing Deviation
                </span>
                <span className="text-[9px] px-1 bg-rose-500/30 text-rose-300 rounded font-mono">HRB-109</span>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800">
              <span>Synchronized to Project Manager & Vendor via Pusher</span>
              <span className="text-emerald-400 font-medium">Audit Log Stored</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
