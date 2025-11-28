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

        expect(screen.getByText('React')).toBeInTheDocument();
        // The percentage is in a data attribute, so we might check if the element exists
        // or check the style if it was applied as width (it's data-level in the component)
        const levelBar = screen.getByText((content, element) => {
             return element?.className === 'level-bar-inner' && element?.getAttribute('data-level') === '90%';
        });
        expect(levelBar).toBeInTheDocument();
    });
});
