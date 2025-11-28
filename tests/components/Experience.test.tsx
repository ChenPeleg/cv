import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Experience from '../../src/components/Experience';

describe('Experience Component', () => {
    it('renders experience details correctly', () => {
        const mockItem = {
            title: 'Software Engineer',
            date: '2020 - Present',
            explanation: 'Developing cool stuff.',
            subtitle: 'Senior',
            toBeContinued: false
        };

        render(<Experience item={mockItem} />);

        expect(screen.getByText('Software Engineer')).toBeTruthy();
        expect(screen.getByText('2020 - Present')).toBeTruthy();
        expect(screen.getByText('Developing cool stuff.')).toBeTruthy();
        expect(screen.getByText('Senior:')).toBeTruthy();
    });

    it('renders without date if not provided', () => {
         const mockItem = {
            title: 'Project Manager',
            explanation: 'Managing projects.',
        };
        render(<Experience item={mockItem} />);
        expect(screen.getByText('Project Manager')).toBeTruthy();
        expect(screen.queryByText('2020 - Present')).toBeNull();
    });
});
