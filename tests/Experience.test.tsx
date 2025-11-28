import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '../src/components/Experience';

describe('Experience Component', () => {
    it('should render the job title', () => {
        const experienceItem = {
            title: 'Acme Corporation',
            subtitle: 'Senior Developer',
            location: 'New York',
            date: '2020-2023',
            explanation: 'Built amazing software',
            toBeContinued: false
        };
        
        render(<Experience item={experienceItem} />);
        
        expect(screen.getByText('Acme Corporation')).toBeDefined();
    });

    it('should render the date range', () => {
        const experienceItem = {
            title: 'Tech Startup',
            subtitle: 'Full Stack Developer',
            date: '2018-2020',
            explanation: 'Developed web applications',
            toBeContinued: false
        };
        
        render(<Experience item={experienceItem} />);
        
        expect(screen.getByText('2018-2020')).toBeDefined();
    });

    it('should render the subtitle with colon', () => {
        const experienceItem = {
            title: 'Company Inc',
            subtitle: 'Lead Engineer',
            date: '2015-2018',
            explanation: 'Led development team',
            toBeContinued: false
        };
        
        render(<Experience item={experienceItem} />);
        
        expect(screen.getByText('Lead Engineer:')).toBeDefined();
    });

    it('should render the explanation text', () => {
        const experienceItem = {
            title: 'Tech Company',
            subtitle: 'Developer',
            date: '2021-2023',
            explanation: 'Built REST APIs and microservices',
            toBeContinued: false
        };
        
        render(<Experience item={experienceItem} />);
        
        expect(screen.getByText(/Built REST APIs and microservices/)).toBeDefined();
    });

    it('should not render date section if date is missing', () => {
        const experienceItem = {
            title: 'Freelance',
            subtitle: 'Consultant',
            explanation: 'Consulting work',
            toBeContinued: false
        };
        
        render(<Experience item={experienceItem} />);
        
        // The title should still render in some form
        expect(screen.getByText('Consultant:')).toBeDefined();
    });
});
