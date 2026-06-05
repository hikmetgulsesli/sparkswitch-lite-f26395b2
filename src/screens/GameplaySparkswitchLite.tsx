// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - SparkSwitch Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bolt, Pause, Play, Settings, Sparkles, Trophy, User } from "lucide-react";


export type GameplaySparkswitchLiteActionId = "pause-1" | "settings-2" | "start-game-3" | "play-1" | "rankings-2" | "profile-3";

export interface GameplaySparkswitchLiteProps {
  actions?: Partial<Record<GameplaySparkswitchLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplaySparkswitchLite({ actions, runtime }: GameplaySparkswitchLiteProps) {
  void runtime;
  return (
    <>
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none z-0"></div>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-lg py-sm border-b border-outline-variant/30 shadow-[0_0_20px_rgba(71,214,255,0.2)] bg-surface-container-low/80 backdrop-blur-xl">
      <div className="font-display-sm text-display-sm font-extrabold tracking-tighter text-primary italic">
                  SPARKSWITCH LITE
              </div>
      <div className="flex gap-md">
      <button aria-label="Pause" className="text-primary hover:text-tertiary transition-colors active:scale-95 duration-100 flex items-center justify-center p-sm rounded-full hover:bg-surface-bright/20" type="button" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Settings" className="text-on-surface-variant hover:text-tertiary transition-colors active:scale-95 duration-100 flex items-center justify-center p-sm rounded-full hover:bg-surface-bright/20" type="button" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Play Area */}
      <main className="flex-grow relative z-10 flex items-center justify-center pt-[72px]">
      {/* HUD Elements */}
      <div className="absolute top-playfield-margin left-playfield-margin flex flex-col gap-sm z-20">
      <div className="hud-panel px-md py-sm rounded border-l-2 border-l-primary flex flex-col">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Score</span>
      <span className="font-label-score text-label-score text-primary">002,450</span>
      </div>
      <div className="hud-panel px-md py-xs rounded flex items-center gap-sm">
      <Sparkles className="text-tertiary text-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono text-tertiary">COMBO x4</span>
      </div>
      </div>
      <div className="absolute top-playfield-margin right-playfield-margin flex flex-col gap-sm z-20 items-end">
      <div className="hud-panel px-md py-sm rounded border-r-2 border-r-secondary-container flex flex-col items-end">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Level</span>
      <span className="font-label-score text-label-score text-secondary">04</span>
      </div>
      <div className="hud-panel px-md py-xs rounded flex items-center gap-sm">
      <span className="font-label-mono text-label-mono text-on-surface-variant">MULTIPLIER</span>
      <span className="font-label-score text-label-score text-primary-fixed-dim">x3</span>
      </div>
      </div>
      {/* Playfield Container */}
      <div className="relative w-[300px] h-[600px] max-h-[819px] bg-surface-container-lowest/50 border border-outline-variant/20 rounded-xl overflow-hidden backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.5)]">
      {/* Timing Rail Container */}
      <div className="absolute inset-0 flex justify-center gap-xl py-xl">
      {/* Left Rail (Blue) */}
      <div className="relative h-full w-[2px] bg-primary-container/20">
      <div className="absolute inset-0 w-full bg-primary-container rail-glow" style={{filter: "drop-shadow(0 0 4px var(--tw-colors-primary-container))"}}></div>
      {/* Target Zone */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[32px] h-[12px] border-y-2 border-primary-container bg-surface-dim/80 backdrop-blur-md flex items-center justify-center">
      <div className="w-[4px] h-[4px] rounded-full bg-primary-container animate-pulse"></div>
      </div>
      {/* Moving Pulse */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[16px] h-[32px] bg-primary glow-primary rounded-full pulse-animation z-10" style={{animationDuration: "1.5s"}}></div>
      </div>
      {/* Right Rail (Pink) */}
      <div className="relative h-full w-[2px] bg-secondary-container/20">
      <div className="absolute inset-0 w-full bg-secondary-container rail-glow" style={{filter: "drop-shadow(0 0 4px var(--tw-colors-secondary-container))", opacity: "0.5"}}></div>
      {/* Target Zone */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[32px] h-[12px] border-y-2 border-outline-variant bg-surface-dim/50 backdrop-blur-md flex items-center justify-center">
      </div>
      </div>
      </div>
      {/* Visual Flare - Perfect Hit Indicator (Hidden by default, shown for comp) */}
      <div className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-display-sm text-display-sm text-tertiary font-extrabold italic drop-shadow-[0_0_10px_rgba(0,252,168,0.8)] opacity-0 animate-bounce pointer-events-none" style={{opacity: "0.9", animation: "bounce 1s infinite"}}>
                      PERFECT!
                  </div>
      </div>
      {/* Initial State Overlay (Simulated Active) */}
      <div className="absolute inset-0 z-40 flex items-center justify-center bg-background/80 backdrop-blur-[20px]">
      <div className="flex flex-col items-center gap-lg hud-panel p-xl rounded-xl border-t-[4px] border-t-secondary-container shadow-[0_0_30px_rgba(0,0,0,0.8)] text-center">
      <div className="flex flex-col gap-sm">
      <h1 className="font-display-lg text-display-lg text-on-surface">READY</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[300px]">Keep your focus sharp. Switch lanes to catch the pulse in the target zone.</p>
      </div>
      <button className="relative group mt-md px-xl py-md bg-surface border border-primary text-primary font-headline-md text-headline-md uppercase tracking-wider overflow-hidden transition-colors duration-200 hover:bg-primary hover:text-on-primary hover:glow-primary active:scale-95" type="button" data-action-id="start-game-3" onClick={actions?.["start-game-3"]}>
      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
      <span className="relative z-10 flex items-center gap-sm">
                              START GAME
                              <Play  style={{fontVariationSettings: "'FILL' 1"}} className="text-lg" aria-hidden={true} focusable="false" />
      </span>
      </button>
      <div className="flex gap-md mt-sm opacity-60">
      <div className="flex items-center gap-xs font-label-mono text-label-mono text-on-surface-variant">
      <span className="px-xs py-[2px] border border-outline-variant rounded text-[10px]">ESC</span> PAUSE
                          </div>
      <div className="flex items-center gap-xs font-label-mono text-label-mono text-on-surface-variant">
      <span className="px-xs py-[2px] border border-outline-variant rounded text-[10px]">R</span> RESTART
                          </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Hidden on md, visible on mobile as per logic rules for 'Play' tab) */}
      <nav className="md:hidden fixed bottom-0 w-full rounded-t-xl border-t-2 border-primary/50 shadow-[0_-4px_24px_rgba(0,0,0,0.8)] bg-surface-dim/90 backdrop-blur-lg z-50 flex justify-around items-center h-20 px-md pb-safe">
      <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-md py-xs shadow-[0_0_15px_rgba(0,210,255,0.4)]" href="#" data-action-id="play-1" onClick={(event) => { event.preventDefault(); actions?.["play-1"]?.(); }}>
      <Bolt  style={{fontVariationSettings: "'FILL' 1"}} className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline hover:bg-surface-bright/50 hover:text-primary transition-colors active:scale-90 px-md py-xs rounded-xl" href="#" data-action-id="rankings-2" onClick={(event) => { event.preventDefault(); actions?.["rankings-2"]?.(); }}>
      <Trophy className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">Rankings</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline hover:bg-surface-bright/50 hover:text-primary transition-colors active:scale-90 px-md py-xs rounded-xl" href="#" data-action-id="profile-3" onClick={(event) => { event.preventDefault(); actions?.["profile-3"]?.(); }}>
      <User className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">Profile</span>
      </a>
      </nav>
    </>
  );
}
