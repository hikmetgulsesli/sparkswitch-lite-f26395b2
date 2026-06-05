// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - SparkSwitch Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { X } from "lucide-react";


export type GameSettingsSparkswitchLiteActionId = "close-settings-1" | "button-2-2" | "save-preferences-3" | "return-to-game-4";

export interface GameSettingsSparkswitchLiteProps {
  actions?: Partial<Record<GameSettingsSparkswitchLiteActionId, () => void>>;

}

export function GameSettingsSparkswitchLite({ actions }: GameSettingsSparkswitchLiteProps) {
  return (
    <>
      {/* Blurred Background simulating gameplay */}
      <div className="absolute inset-0 z-0 opacity-40 blur-md pointer-events-none" data-alt="Abstract cyber-minimalist gameplay background with high-velocity neon blue rails moving vertically across a deep void black playfield. Glowing pink timing indicators and sharp geometric obstacles create a sense of extreme speed and precision. The overall aesthetic is heavily stylized, blending dark brutalism with vibrant futuristic light trails." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABmPgI9bStgpF-diS6n7WfEt-eCwQ--kQTk8iAgWsjnwCIyucFFl2ERX55hcLGA-4yvGjAJDfDN5IJ7D2LiKeVNZkBmN_Mrtvyl8wH0kZEjVF49eZLW_2p3C3DOv8eNUkPo3AhUUYNFWYYHfQoFS-1Ix-6tAXI5pxGSpRxHOqyova9veaeFOFllB_y-tL87M7lgFKOK-lufrmUypSaoKqVP-1CDbH8secQIxucOqynjLrByApESnTMtMpyDQ-YlzzGsb3i7EKxLqs')", backgroundSize: "cover", backgroundPosition: "center"}}>
      </div>
      {/* Overlay Backdrop */}
      <div className="absolute inset-0 bg-surface-lowest/60 backdrop-blur-[20px] z-10"></div>
      {/* Top App Bar (Suppressed via filter, not rendered as this is an overlay modal) */}
      {/* Settings Overlay Modal */}
      <div className="relative z-20 w-full max-w-md mx-md glass-panel border border-primary/50 rounded-xl overflow-hidden neon-glow-primary flex flex-col shadow-2xl">
      {/* Modal Header */}
      <div className="border-t-[4px] border-secondary-container px-lg py-md flex items-center justify-between border-b border-outline-variant/30">
      <h2 className="font-headline-md text-headline-md text-on-surface">Settings</h2>
      <button aria-label="Close settings" className="text-on-surface-variant hover:text-tertiary transition-colors active:scale-95 duration-100 flex items-center justify-center" type="button" data-action-id="close-settings-1" onClick={actions?.["close-settings-1"]}>
      <X  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Modal Content */}
      <div className="p-lg flex flex-col gap-lg">
      {/* Difficulty Slider */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-mono text-label-mono text-primary uppercase tracking-widest">Difficulty</label>
      <div className="flex items-center gap-md">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Slow</span>
      <input className="w-full h-1 bg-surface-variant rounded-full appearance-none cursor-pointer accent-primary" max="5" min="1" type="range" defaultValue="3" />
      <span className="font-body-sm text-body-sm text-secondary">Hyper</span>
      </div>
      </div>
      {/* Visual Options */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-mono text-label-mono text-primary uppercase tracking-widest">Visuals</label>
      <div className="flex items-center justify-between bg-surface-container-high p-sm rounded-lg border border-outline-variant/30">
      <span className="font-body-sm text-body-sm">Motion Blur</span>
      <button aria-checked={true} className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary" role="switch" type="button" aria-label="Button 2" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-surface-dim transition"></span>
      </button>
      </div>
      </div>
      {/* Input Help */}
      <div className="flex flex-col gap-sm">
      <label className="font-label-mono text-label-mono text-primary uppercase tracking-widest">Controls</label>
      <div className="bg-surface-container-high p-md rounded-lg border border-outline-variant/30 flex flex-col gap-xs">
      <div className="flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Switch Rails</span>
      <div className="flex gap-2">
      <span className="bg-surface-dim border border-outline-variant px-2 py-1 rounded font-label-mono text-label-mono text-on-surface">SPACE</span>
      <span className="bg-surface-dim border border-outline-variant px-2 py-1 rounded font-label-mono text-label-mono text-on-surface">CLICK</span>
      </div>
      </div>
      <div className="flex justify-between items-center mt-2">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Pause</span>
      <span className="bg-surface-dim border border-outline-variant px-2 py-1 rounded font-label-mono text-label-mono text-on-surface">ESC</span>
      </div>
      </div>
      </div>
      </div>
      {/* Modal Actions */}
      <div className="px-lg pb-lg pt-sm flex flex-col gap-md">
      <button className="w-full py-md border border-primary text-primary font-label-mono text-label-mono uppercase tracking-widest hover:bg-primary hover:text-surface-dim hover:neon-glow-primary transition-colors duration-200 active:scale-95 rounded-lg" type="button" data-action-id="save-preferences-3" onClick={actions?.["save-preferences-3"]}>
                      SAVE PREFERENCES
                  </button>
      <button className="w-full py-sm text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface transition-colors" type="button" data-action-id="return-to-game-4" onClick={actions?.["return-to-game-4"]}>
                      RETURN TO GAME
                  </button>
      </div>
      </div>
    </>
  );
}
