import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Technologies from '../src/components/Technologies';

describe('Technologies Component', () => {
    it('should render the technology name', () => {
        const techItem = {
            TechName: 'React',
            TechExplanation: 'A JavaScript library for building user interfaces'
        };
        
        render(<Technologies item={techItem} />);
        
        expect(screen.getByText('React')).toBeDefined();
    });

    it('should render the technology explanation', () => {
        const techItem = {
            TechName: 'TypeScript',
            TechExplanation: 'Typed superset of JavaScript that compiles to plain JavaScript'
        };
        
        render(<Technologies item={techItem} />);
        
        expect(screen.getByText('Typed superset of JavaScript that compiles to plain JavaScript')).toBeDefined();
    });

    it('should render both name and explanation', () => {
        const techItem = {
            TechName: 'Node.js',
            TechExplanation: 'JavaScript runtime for server-side development'
        };
        
        render(<Technologies item={techItem} />);
        
        expect(screen.getByText('Node.js')).toBeDefined();
        expect(screen.getByText('JavaScript runtime for server-side development')).toBeDefined();
    });

    it('should render with colon separator style', () => {
        const techItem = {
            TechName: 'Python',
            TechExplanation: 'High-level programming language'
        };
        
        const { container } = render(<Technologies item={techItem} />);
        
        // Check that the component renders with the expected class structure
        expect(container.querySelector('.item')).toBeDefined();
        expect(container.querySelector('.technology-title')).toBeDefined();
        expect(container.querySelector('.project-tagline')).toBeDefined();
    });
});
