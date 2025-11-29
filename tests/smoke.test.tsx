import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../src/App';

describe('smoke test', () => {
    it('should render App without crashing', () => {
        render(<App />);
        // You might want to add a more specific assertion here based on your App's content
        // For now, just checking if it renders is a good start.
        // For example, if your app has a specific text or element:
        // expect(screen.getByText(/some text/i)).toBeInTheDocument();
        expect(document.body).toBeTruthy();
    })
});
