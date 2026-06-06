import { useEffect, useMemo, useState } from 'react';
import {
  GameplaySparkswitchLite,
  GameSettingsSparkswitchLite,
} from './screens';
import { useGameRuntime, getGlobalRuntime } from './features/sparkswitch-lite/sparkswitch-lite.store';

type AppView = 'gameplay' | 'settings';

export default function App() {
  const { state, actions } = useGameRuntime();
  const [view, setView] = useState<AppView>('gameplay');

  const runtime = useMemo(
    () => ({
      player: state.player,
      obstacles: state.obstacles,
      shards: state.shards,
      score: state.score,
      energy: state.energy,
      lives: state.lives,
      paused: state.paused,
    }),
    [state]
  );

  const gameplayActions = useMemo(
    () => ({
      'pause-1': () => actions.pause(),
      'settings-2': () => setView('settings'),
      'start-game-3': () => actions.start(),
      'play-1': () => actions.start(),
      'rankings-2': () => {},
      'profile-3': () => {},
    }),
    [actions]
  );

  const settingsActions = useMemo(
    () => ({
      'close-settings-1': () => setView('gameplay'),
      'button-2-2': () => {},
      'save-preferences-3': () => setView('gameplay'),
      'return-to-game-4': () => setView('gameplay'),
    }),
    []
  );

  useEffect(() => {
    const app = {
      state,
      actions: {
        ...actions,
        setView,
      },
    };
    (window as unknown as Record<string, unknown>).app = app;
    (globalThis as unknown as Record<string, unknown>).app = app;
  }, [state, actions]);

  return (
    <div
      data-setfarm-root="baseline"
      data-testid="setfarm-app-root"
      className="relative h-screen w-full overflow-hidden bg-slate-950 text-slate-50"
    >
      {view === 'gameplay' && (
        <GameplaySparkswitchLite actions={gameplayActions} runtime={runtime} />
      )}
      {view === 'settings' && (
        <GameSettingsSparkswitchLite actions={settingsActions} />
      )}
    </div>
  );
}
