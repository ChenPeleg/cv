import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppLayout } from '../src/layout/AppLayout';
import type { Information } from '../src/types/Information';

const mockInfo: Information = {
    name: 'Test Person',
    image: '../assets/images/profile.png',
    funnyProfileImages: [],
    email: 'test@example.com',
    phone: '+1 555-555-5555',
    website: 'test.example.com',
    websiteUrl: 'https://test.example.com',
    linkedinName: 'TestPerson',
    linkedin: 'https://www.linkedin.com/in/test-person/',
    mediumLink: 'https://medium.com/@testperson',
    mediumName: '@testperson',
    aboutMe: 'This is a test about me section.',
    Experiences: [
        {
            title: 'Test Company',
            subtitle: 'Software Developer',
            location: 'Test City',
            date: '2020-2023',
            explanation: 'Developed test software',
            toBeContinued: false
        }
    ],
    Career: 'Started as a Developer',
    Projects: [
        {
            projectName: 'Test Project',
            url: 'https://github.com/test/project',
            explanation: 'A test project description',
            links: []
        }
    ],
    technology: [
        {
            TechName: 'TypeScript',
            TechExplanation: 'Modern JavaScript with types'
        }
    ],
    Skills: [
        {
            skill: 'testing',
            percent: '100%'
        }
    ],
    Education: [
        {
            title: 'Test University',
            content: 'B.S. in Computer Science',
            date: '2015-2019'
        }
    ],
    Languages: [
        {
            language: 'English',
            level: 'Native'
        }
    ],
    Interests: [
        {
            hobi: 'Testing'
        }
    ],
    personalInfo: [
        {
            title: 'Address',
            content: 'Test City, Test Country'
        }
    ]
};

describe('AppLayout Component', () => {
    it('should render the name', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('Test Person')).toBeDefined();
    });

    it('should render the About Me content', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('This is a test about me section.')).toBeDefined();
    });

    it('should render the email link', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('test@example.com')).toBeDefined();
    });

    it('should render the phone link', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('+1 555-555-5555')).toBeDefined();
    });

    it('should render the website link', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('test.example.com')).toBeDefined();
    });

    it('should render the experience section', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('Test Company')).toBeDefined();
    });

    it('should render the education section', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('Test University')).toBeDefined();
    });

    it('should render the technology section', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('TypeScript')).toBeDefined();
    });

    it('should render the projects section', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('Test Project')).toBeDefined();
    });

    it('should render the personal info section', () => {
        render(<AppLayout info={mockInfo} />);
        
        expect(screen.getByText('Address')).toBeDefined();
    });
});
