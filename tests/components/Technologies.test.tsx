import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Technologies from '../../src/components/Technologies';

describe('Technologies Component', () => {
    it('renders technology name and explanation', () => {
        const mockItem = {
            TechName: 'React',
            TechExplanation: 'A JavaScript library for building user interfaces'
        };

        render(<Technologies item={mockItem} />);

        expect(screen.getByText('React')).toBeTruthy();
        expect(screen.getByText('A JavaScript library for building user interfaces')).toBeTruthy();
    });
});
