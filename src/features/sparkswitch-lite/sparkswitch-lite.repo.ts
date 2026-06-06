import { GameRuntimeState } from '../../game/game-runtime';

const STORAGE_KEY = 'sparkswitch-lite:highscore';

export interface PersistedScore {
  score: number;
  date: string;
}

export function saveHighScore(state: GameRuntimeState): PersistedScore {
  const entry: PersistedScore = { score: state.score, date: new Date().toISOString() };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: PersistedScore[] = raw ? JSON.parse(raw) : [];
    list.push(entry);
    list.sort((a, b) => b.score - a.score);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 10)));
  } catch {
    // ignore storage errors
  }
  return entry;
}

export function loadHighScores(): PersistedScore[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearHighScores() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
