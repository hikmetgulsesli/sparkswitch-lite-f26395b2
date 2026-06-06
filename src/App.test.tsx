import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('exposes window.app with state and actions', () => {
    render(<App />);
    const app = (window as unknown as Record<string, unknown>).app as {
      state: { score: number };
      actions: Record<string, unknown>;
    };
    expect(app).toBeDefined();
    expect(app.state).toBeDefined();
    expect(app.actions).toBeDefined();
  });
});
