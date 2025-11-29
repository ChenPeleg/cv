import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProjectLinks from '../../src/components/Projects/ProjectLinks';

describe('ProjectLinks Component', () => {
    it('renders link title', () => {
        const mockItem = {
            title: 'Demo',
            url: 'http://demo.com'
        };

        render(<ProjectLinks item={mockItem} />);

        expect(screen.getByText('Demo')).toBeTruthy();
        expect(screen.getByText('Demo').getAttribute('href')).toBe('http://demo.com');
    });
});
