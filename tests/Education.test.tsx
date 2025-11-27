import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Education from '../src/components/Education';

describe('Education Component', () => {
    it('should render the education title', () => {
        const educationItem = {
            title: 'MIT',
            content: 'Computer Science',
            date: '2015-2019'
        };
        
        render(<Education item={educationItem} />);
        
        expect(screen.getByText('MIT')).toBeDefined();
    });

    it('should render the education content', () => {
        const educationItem = {
            title: 'Stanford University',
            content: 'B.S. in Computer Science',
            date: '2010-2014'
        };
        
        render(<Education item={educationItem} />);
        
        expect(screen.getByText('B.S. in Computer Science')).toBeDefined();
    });

    it('should render the date range', () => {
        const educationItem = {
            title: 'Harvard',
            content: 'MBA',
            date: '2016-2018'
        };
        
        render(<Education item={educationItem} />);
        
        expect(screen.getByText('2016-2018')).toBeDefined();
    });

    it('should render all education fields together', () => {
        const educationItem = {
            title: 'Oxford University',
            content: 'Ph.D. in Mathematics',
            date: '2020-2024'
        };
        
        render(<Education item={educationItem} />);
        
        expect(screen.getByText('Oxford University')).toBeDefined();
        expect(screen.getByText('Ph.D. in Mathematics')).toBeDefined();
        expect(screen.getByText('2020-2024')).toBeDefined();
    });
});
