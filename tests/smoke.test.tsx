import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../src/App';

describe('smoke test', () => {
    it('should render App without crashing', () => {
        render(<App />);
        expect(document.body).toBeTruthy();
    })
});
