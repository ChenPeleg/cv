import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CircleIcon } from '../../src/components/CircleIcon/CircleIcon';

describe('CircleIcon Component', () => {
    it('renders correctly', () => {
        const { container } = render(<CircleIcon name="save" />);
        expect(container.firstChild).toBeTruthy();
        
        // Check if it renders the ImageIcon
        const img = container.querySelector('img');
        expect(img).toBeTruthy();
        expect(img?.getAttribute('alt')).toBe('save');
    });
});
