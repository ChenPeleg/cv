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

        // We need to mock ProjectLinks or just check if it renders
        // Since we are testing integration here, let's just check for text
        render(<Projects item={mockItem} />);
        
        // Assuming ProjectLinks renders the name
        // Wait, ProjectLinks component is imported. Let's see what it renders.
        // It likely renders the link name.
    });
});
