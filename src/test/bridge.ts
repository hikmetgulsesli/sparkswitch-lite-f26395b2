import { createGameRuntime, GameRuntimeState, GameAction, gameReducer } from '../game/game-runtime';

export { createGameRuntime, gameReducer };
export type { GameRuntimeState, GameAction };

export function createTestRuntime(initial?: Partial<GameRuntimeState>) {
  const runtime = createGameRuntime();
  if (initial) {
    // Seed state by dispatching a no-op then merging initial overrides via direct mutation for tests
    const s = runtime.getState();
    Object.assign(s, initial);
  }
  return runtime;
}

export function tick(runtime: ReturnType<typeof createGameRuntime>, times = 1) {
  for (let i = 0; i < times; i++) {
    runtime.dispatch({ type: 'TICK', delta: 50 });
  }
}
