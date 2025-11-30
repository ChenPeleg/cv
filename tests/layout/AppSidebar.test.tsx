import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AppSidebar } from '../../src/layout/AppSidebar';


vi.mock('../../src/components/profileImage.tsx', () => ({
    ProfileImage: () => <div data-testid="profile-image">ProfileImage</div>
}));
vi.mock('../../src/components/Education.tsx', () => ({
    default: () => <div data-testid="education">Education</div>
}));

describe('AppSidebar Component', () => {
    it('renders sidebar information', () => {
        const mockInfo = {
            name: 'John Doe',
            email: 'john@example.com',
            phone: '123-456-7890',
            website: 'johndoe.com',
            websiteUrl: 'http://johndoe.com',
            linkedin: 'http://linkedin.com/in/johndoe',
            linkedinName: 'johndoe',
            mediumLink: 'http://medium.com/@johndoe',
            mediumName: 'johndoe',
            aboutMe: 'I am a developer.',
            Education: [{}],
        };

        render(<AppSidebar info={mockInfo as any} />);

        expect(screen.getByText('John Doe')).toBeTruthy();
        expect(screen.getByText('Front-End Developer')).toBeTruthy();
        expect(screen.getByText('I am a developer.')).toBeTruthy();
        expect(screen.getByText('john@example.com')).toBeTruthy();
        
        expect(screen.getByTestId('profile-image')).toBeTruthy();
        expect(screen.getByTestId('education')).toBeTruthy();
    });
});
