import { GameRuntimeState } from '../game/game-runtime';

export const defaultFixture: GameRuntimeState = {
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

export const runningFixture: GameRuntimeState = {
  player: { lane: 1, position: 0 },
  obstacles: [{ lane: 0, position: 50 }],
  shards: [{ lane: 2, position: 30 }],
  score: 20,
  energy: 85,
  lives: 2,
  paused: false,
  gameOver: false,
  speed: 25,
};

export const gameOverFixture: GameRuntimeState = {
  player: { lane: 0, position: 0 },
  obstacles: [{ lane: 0, position: 2 }],
  shards: [],
  score: 50,
  energy: 10,
  lives: 0,
  paused: true,
  gameOver: true,
  speed: 20,
};
