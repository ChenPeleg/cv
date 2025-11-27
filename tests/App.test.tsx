import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
    it('should render the CV page', () => {
        render(<App />);
        
        // Check that the name is rendered
        expect(screen.getByText('Chen Peleg')).toBeDefined();
    });

    it('should render the Front-End Developer tagline', () => {
        render(<App />);
        
        expect(screen.getByText('Front-End Developer')).toBeDefined();
    });

    it('should render the About Me section', () => {
        render(<App />);
        
        expect(screen.getByText('About Me')).toBeDefined();
    });

    it('should render the Contact Me section', () => {
        render(<App />);
        
        expect(screen.getByText('Contact Me')).toBeDefined();
    });

    it('should render the Experience section', () => {
        render(<App />);
        
        expect(screen.getByText('Experience')).toBeDefined();
    });

    it('should render the Skills & Proficiency section', () => {
        render(<App />);
        
        expect(screen.getByText(/Skills & Proficiency/)).toBeDefined();
    });

    it('should render the Education section', () => {
        render(<App />);
        
        expect(screen.getByText('Education')).toBeDefined();
    });
});
