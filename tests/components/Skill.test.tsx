import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Skill from '../../src/components/Skill';

describe('Skill Component', () => {
    it('renders skill name and percentage', () => {
        const mockItem = {
            skill: 'React',
            percent: '90%'
        };

        render(<Skill item={mockItem} />);

        expect(screen.getByText('React')).toBeTruthy();
        expect(screen.getByText('React')).toBeTruthy();
        const levelBar = screen.getByText((content, element) => {
             return element?.className === 'level-bar-inner' && element?.getAttribute('data-level') === '90%';
        });
        expect(levelBar).toBeTruthy();
    });
});
