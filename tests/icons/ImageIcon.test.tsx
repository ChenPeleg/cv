import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ImageIcon } from '../../src/icons/ImageIcon';

describe('ImageIcon Component', () => {
    it('renders image icon correctly', () => {
        render(<ImageIcon name="save" />);
        const img = screen.getByRole('img');
        expect(img).toBeTruthy();
        expect(img.getAttribute('src')).toBeTruthy();
    });

    it('renders null for invalid icon name', () => {
        const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        const { container } = render(<ImageIcon name={'invalid-name' as any} />);
        expect(container.firstChild).toBeNull();
        expect(consoleSpy).toHaveBeenCalledWith('Image icon "invalid-name" not found');
        consoleSpy.mockRestore();
    });
});
