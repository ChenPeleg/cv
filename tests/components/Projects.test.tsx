import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Projects from '../../src/components/Projects/Projects';

describe('Projects Component', () => {
    it('renders project details', () => {
        const mockItem = {
            projectName: 'My Project',
            explanation: 'A cool project',
            url: 'http://example.com',
            links: []
        };

        render(<Projects item={mockItem} />);

        expect(screen.getByText('My Project')).toBeTruthy();
        expect(screen.getByText('A cool project')).toBeTruthy();
    });

    it('renders links when provided', () => {
        const mockItem = {
            projectName: 'My Project',
            explanation: 'A cool project',
            url: 'http://example.com',
            links: [
                { name: 'Demo', url: 'http://demo.com' }
            ]
        };

        render(<Projects item={mockItem} />);
    });
});
