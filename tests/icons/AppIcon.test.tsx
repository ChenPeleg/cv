import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AppIcon } from '../../src/icons/AppIcon';

describe('AppIcon Component', () => {
    it('renders svg icon correctly', () => {
        const { container } = render(<AppIcon name="address-book" />);
        const svg = container.querySelector('svg');
        expect(svg).toBeTruthy();
        expect(svg?.getAttribute('id')).toBe('icon-svg-address-book');
    });

    it('renders with custom class', () => {
        const { container } = render(<AppIcon name="address-book" className="custom-class" />);
        const svg = container.querySelector('svg');
        expect(svg?.getAttribute('class')).toContain('custom-class');
    });
});
