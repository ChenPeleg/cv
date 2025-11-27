import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../src/components/Projects/Projects';

describe('Projects Component', () => {
    it('should render the project name', () => {
        const projectItem = {
            projectName: 'Awesome Project',
            url: 'https://github.com/example/awesome',
            explanation: 'An awesome project description',
            links: []
        };
        
        render(<Projects item={projectItem} />);
        
        expect(screen.getByText('Awesome Project')).toBeDefined();
    });

    it('should render the project explanation', () => {
        const projectItem = {
            projectName: 'My App',
            url: 'https://myapp.com',
            explanation: 'A mobile app for productivity',
            links: []
        };
        
        render(<Projects item={projectItem} />);
        
        expect(screen.getByText('A mobile app for productivity')).toBeDefined();
    });

    it('should render the project URL when no links are provided', () => {
        const projectItem = {
            projectName: 'Simple Project',
            url: 'https://github.com/simple/project',
            explanation: 'A simple project',
            links: []
        };
        
        render(<Projects item={projectItem} />);
        
        expect(screen.getByText('https://github.com/simple/project')).toBeDefined();
    });

    it('should render project links when provided', () => {
        const projectItem = {
            projectName: 'Multi-link Project',
            url: 'https://github.com/multi/project',
            explanation: 'A project with multiple links',
            links: [
                { title: 'Demo Site', url: 'https://demo.example.com' },
                { title: 'Documentation', url: 'https://docs.example.com' }
            ]
        };
        
        render(<Projects item={projectItem} />);
        
        expect(screen.getByText('Demo Site')).toBeDefined();
        expect(screen.getByText('Documentation')).toBeDefined();
    });

    it('should have correct link attributes for project name', () => {
        const projectItem = {
            projectName: 'External Project',
            url: 'https://external.example.com',
            explanation: 'Opens in new tab',
            links: []
        };
        
        render(<Projects item={projectItem} />);
        
        const link = screen.getByRole('link', { name: 'External Project' });
        expect(link.getAttribute('href')).toBe('https://external.example.com');
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
});
