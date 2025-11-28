import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Language from '../../src/components/Language';

describe('Language Component', () => {
    it('renders language and level', () => {
        const mockItem = {
            language: 'English',
            level: 'Native'
        };

        render(<Language item={mockItem} />);

        expect(screen.getByText('English')).toBeTruthy();
        expect(screen.getByText('(Native)')).toBeTruthy();
    });
});
