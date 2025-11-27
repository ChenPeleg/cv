import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import PersonalInfo from '../src/components/PersonalInfo';

describe('PersonalInfo Component', () => {
    it('should render the title and content when title exists', () => {
        const infoItem = {
            title: 'Address',
            content: 'New York, NY'
        };
        
        render(<PersonalInfo item={infoItem} />);
        
        expect(screen.getByText('Address')).toBeDefined();
        expect(screen.getByText('New York, NY')).toBeDefined();
    });

    it('should not render anything when title is empty', () => {
        const infoItem = {
            title: '',
            content: 'Some content'
        };
        
        const { container } = render(<PersonalInfo item={infoItem} />);
        
        // Component returns null when title is empty
        expect(container.querySelector('.item')).toBeNull();
    });

    it('should not render anything when title is undefined', () => {
        const infoItem = {
            content: 'Some content'
        };
        
        const { container } = render(<PersonalInfo item={infoItem} />);
        
        // Component returns null when title is missing
        expect(container.querySelector('.item')).toBeNull();
    });

    it('should render with correct CSS classes', () => {
        const infoItem = {
            title: 'Languages',
            content: 'English, Spanish'
        };
        
        const { container } = render(<PersonalInfo item={infoItem} />);
        
        expect(container.querySelector('.item')).toBeDefined();
        expect(container.querySelector('.technology-title')).toBeDefined();
        expect(container.querySelector('.project-tagline')).toBeDefined();
    });

    it('should display language information correctly', () => {
        const infoItem = {
            title: 'Languages',
            content: 'Hebrew - Mother tongue, English - Fluent'
        };
        
        render(<PersonalInfo item={infoItem} />);
        
        expect(screen.getByText('Languages')).toBeDefined();
        expect(screen.getByText('Hebrew - Mother tongue, English - Fluent')).toBeDefined();
    });
});
