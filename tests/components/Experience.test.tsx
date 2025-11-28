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

        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
        expect(screen.getByText('2020 - Present')).toBeInTheDocument();
        expect(screen.getByText('Developing cool stuff.')).toBeInTheDocument();
        expect(screen.getByText('Senior:')).toBeInTheDocument();
    });

    it('renders without date if not provided', () => {
         const mockItem = {
            title: 'Project Manager',
            explanation: 'Managing projects.',
        };
        render(<Experience item={mockItem} />);
        expect(screen.getByText('Project Manager')).toBeInTheDocument();
        expect(screen.queryByText('2020 - Present')).not.toBeInTheDocument();
    });
});
