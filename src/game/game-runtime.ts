export interface GameEntity {
  lane: number;
  position: number;
}

export interface GameRuntimeState {
  player: GameEntity;
  obstacles: GameEntity[];
  shards: GameEntity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
  gameOver: boolean;
  speed: number;
}

export type GameAction =
  | { type: 'TICK'; delta: number }
  | { type: 'MOVE_LEFT' }
  | { type: 'MOVE_RIGHT' }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'START' }
  | { type: 'RESTART' }
  | { type: 'COLLECT_SHARD'; index: number }
  | { type: 'HIT_OBSTACLE'; index: number };

const LANES = 3;
const PLAYFIELD_DEPTH = 100;

function createInitialState(): GameRuntimeState {
  return {
    player: { lane: 1, position: 0 },
    obstacles: [
      { lane: 0, position: 60 },
      { lane: 2, position: 80 },
    ],
    shards: [
      { lane: 1, position: 40 },
      { lane: 0, position: 90 },
    ],
    score: 0,
    energy: 100,
    lives: 3,
    paused: true,
    gameOver: false,
    speed: 20,
  };
}

function spawnObstacle(state: GameRuntimeState): GameEntity {
  const lane = Math.floor(Math.random() * LANES);
  return { lane, position: PLAYFIELD_DEPTH + Math.random() * 20 };
}

function spawnShard(state: GameRuntimeState): GameEntity {
  const lane = Math.floor(Math.random() * LANES);
  return { lane, position: PLAYFIELD_DEPTH + Math.random() * 30 };
}

export function gameReducer(state: GameRuntimeState, action: GameAction): GameRuntimeState {
  switch (action.type) {
    case 'START':
    case 'RESTART':
      return { ...createInitialState(), paused: false };

    case 'PAUSE':
      return { ...state, paused: true };

    case 'RESUME':
      return state.gameOver ? state : { ...state, paused: false };

    case 'MOVE_LEFT': {
      if (state.paused || state.gameOver) return state;
      const lane = Math.max(0, state.player.lane - 1);
      return { ...state, player: { ...state.player, lane } };
    }

    case 'MOVE_RIGHT': {
      if (state.paused || state.gameOver) return state;
      const lane = Math.min(LANES - 1, state.player.lane + 1);
      return { ...state, player: { ...state.player, lane } };
    }

    case 'TICK': {
      if (state.paused || state.gameOver) return state;
      const delta = action.delta;
      const step = (state.speed * delta) / 1000;

      let obstacles = state.obstacles
        .map((o) => ({ ...o, position: o.position - step }))
        .filter((o) => o.position > -10);

      let shards = state.shards
        .map((s) => ({ ...s, position: s.position - step }))
        .filter((s) => s.position > -10);

      // Spawn new entities occasionally
      if (Math.random() < 0.02) obstacles.push(spawnObstacle(state));
      if (Math.random() < 0.015) shards.push(spawnShard(state));

      // Collision: obstacle hits player
      let lives = state.lives;
      let energy = state.energy;
      let gameOver: boolean = state.gameOver;
      const playerHit = obstacles.some(
        (o) => o.lane === state.player.lane && o.position <= 5 && o.position >= -5
      );
      if (playerHit) {
        lives -= 1;
        energy = Math.max(0, energy - 20);
        obstacles = obstacles.filter(
          (o) => !(o.lane === state.player.lane && o.position <= 5 && o.position >= -5)
        );
        if (lives <= 0) gameOver = true;
      }

      // Collect shards
      let score = state.score;
      const collectedIndices: number[] = [];
      shards.forEach((s, i) => {
        if (s.lane === state.player.lane && s.position <= 5 && s.position >= -5) {
          collectedIndices.push(i);
        }
      });
      if (collectedIndices.length > 0) {
        shards = shards.filter((_, i) => !collectedIndices.includes(i));
        score += collectedIndices.length * 10;
        energy = Math.min(100, energy + 5);
      }

      return { ...state, obstacles, shards, score, energy, lives, gameOver };
    }

    case 'COLLECT_SHARD': {
      const shards = state.shards.filter((_, i) => i !== action.index);
      return { ...state, shards, score: state.score + 10, energy: Math.min(100, state.energy + 5) };
    }

    case 'HIT_OBSTACLE': {
      const obstacles = state.obstacles.filter((_, i) => i !== action.index);
      const lives = state.lives - 1;
      return {
        ...state,
        obstacles,
        lives,
        energy: Math.max(0, state.energy - 20),
        gameOver: lives <= 0,
      };
    }

    default:
      return state;
  }
}

export function createGameRuntime() {
  let state = createInitialState();
  let listeners: Array<(s: GameRuntimeState) => void> = [];
  let intervalId: ReturnType<typeof setInterval> | null = null;

  function dispatch(action: GameAction) {
    state = gameReducer(state, action);
    listeners.forEach((l) => l(state));
  }

  function subscribe(listener: (s: GameRuntimeState) => void) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  function getState() {
    return state;
  }

  function startLoop() {
    if (intervalId) return;
    intervalId = setInterval(() => {
      dispatch({ type: 'TICK', delta: 50 });
    }, 50);
  }

  function stopLoop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
    startLoop,
    stopLoop,
  };
}

export type GameRuntime = ReturnType<typeof createGameRuntime>;
