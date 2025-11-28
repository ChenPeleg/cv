import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProfileImage } from '../../src/components/profileImage';

describe('ProfileImage Component', () => {
    it('renders profile image', () => {
        const props = {
            profileImage: 'default.jpg',
            funnyImages: ['funny1.jpg', 'funny2.jpg']
        };

        render(<ProfileImage {...props} />);

        const img = screen.getByRole('img');
        expect(img).toBeTruthy();
        expect(img.getAttribute('src')).toBe('default.jpg');
    });

    it('changes image on click', () => {
        const props = {
            profileImage: 'default.jpg',
            funnyImages: ['funny1.jpg', 'funny2.jpg']
        };

        render(<ProfileImage {...props} />);

        const img = screen.getByRole('img');
        fireEvent.click(img);

        expect(img.getAttribute('src')).toBe('funny2.jpg'); // The logic in component starts at index 1
    });
});
