import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CircleIcon } from '../../src/components/CircleIcon/CircleIcon';

describe('CircleIcon Component', () => {
    it('renders correctly', () => {
        const { container } = render(<CircleIcon name="save" />);
        expect(container.firstChild).toBeTruthy();
        // Could check for class names or if ImageIcon is rendered
    });
});
