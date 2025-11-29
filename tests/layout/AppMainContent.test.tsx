import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AppMainContent } from '../../src/layout/AppMainContent';

// Mock child components
vi.mock('../../src/components/Experience.tsx', () => ({
    default: () => <div data-testid="experience">Experience</div>
}));
vi.mock('../../src/components/Technologies.tsx', () => ({
    default: () => <div data-testid="technologies">Technologies</div>
}));
vi.mock('../../src/components/Projects/Projects.tsx', () => ({
    default: () => <div data-testid="projects">Projects</div>
}));
vi.mock('../../src/components/PersonalInfo.tsx', () => ({
    default: () => <div data-testid="personal-info">PersonalInfo</div>
}));

describe('AppMainContent Component', () => {
    it('renders main content sections', () => {
        const mockInfo = {
            Experiences: [{}],
            technology: [{}],
            Projects: [{}],
            personalInfo: [{}]
        };

        render(<AppMainContent info={mockInfo as any} />);

        // Using getByRole with name which handles text content within the element
        expect(screen.getByRole('heading', { name: /Experience/i })).toBeTruthy();
        expect(screen.getByRole('heading', { name: /Skills & Proficiency/i })).toBeTruthy();
        expect(screen.getByRole('heading', { name: /Projects and articles/i })).toBeTruthy();
        expect(screen.getByRole('heading', { name: /Personal information/i })).toBeTruthy();

        expect(screen.getByTestId('experience')).toBeTruthy();
        expect(screen.getByTestId('technologies')).toBeTruthy();
        expect(screen.getByTestId('projects')).toBeTruthy();
        expect(screen.getByTestId('personal-info')).toBeTruthy();
    });
});
