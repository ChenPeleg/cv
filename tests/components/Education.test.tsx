import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Education from '../../src/components/Education';

describe('Education Component', () => {
    it('renders education details correctly', () => {
        const mockItem = {
            title: 'B.Sc. Computer Science',
            content: 'University of Tech',
            date: '2016 - 2020'
        };

        render(<Education item={mockItem} />);

        expect(screen.getByText('B.Sc. Computer Science')).toBeTruthy();
        expect(screen.getByText('University of Tech')).toBeTruthy();
        expect(screen.getByText('2016 - 2020')).toBeTruthy();
    });
});
