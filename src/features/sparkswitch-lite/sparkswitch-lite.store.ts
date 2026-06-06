import { useState, useEffect, useCallback } from 'react';
import { createGameRuntime, GameRuntimeState, GameAction } from '../../game/game-runtime';

let globalRuntime = createGameRuntime();

export function getGlobalRuntime() {
  return globalRuntime;
}

export function resetGlobalRuntime() {
  globalRuntime.stopLoop();
  globalRuntime = createGameRuntime();
  return globalRuntime;
}

export function useGameRuntime(): {
  state: GameRuntimeState;
  actions: {
    moveLeft: () => void;
    moveRight: () => void;
    pause: () => void;
    resume: () => void;
    start: () => void;
    restart: () => void;
  };
} {
  const [state, setState] = useState<GameRuntimeState>(globalRuntime.getState());

  useEffect(() => {
    return globalRuntime.subscribe(setState);
  }, []);

  const moveLeft = useCallback(() => globalRuntime.dispatch({ type: 'MOVE_LEFT' }), []);
  const moveRight = useCallback(() => globalRuntime.dispatch({ type: 'MOVE_RIGHT' }), []);
  const pause = useCallback(() => globalRuntime.dispatch({ type: 'PAUSE' }), []);
  const resume = useCallback(() => globalRuntime.dispatch({ type: 'RESUME' }), []);
  const start = useCallback(() => {
    globalRuntime.dispatch({ type: 'START' });
    globalRuntime.startLoop();
  }, []);
  const restart = useCallback(() => {
    globalRuntime.dispatch({ type: 'RESTART' });
    globalRuntime.startLoop();
  }, []);

  return { state, actions: { moveLeft, moveRight, pause, resume, start, restart } };
}
