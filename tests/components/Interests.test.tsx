import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Interests from '../../src/components/Interets';

describe('Interests Component', () => {
    it('renders interest', () => {
        const mockItem = {
            hobi: 'Coding'
        };

        render(<Interests item={mockItem} />);

        expect(screen.getByText('Coding')).toBeTruthy();
    });
});
