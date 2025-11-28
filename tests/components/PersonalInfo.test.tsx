import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PersonalInfo from '../../src/components/PersonalInfo';

describe('PersonalInfo Component', () => {
    it('renders title and content when title is provided', () => {
        const mockItem = {
            title: 'Email',
            content: 'test@example.com'
        };

        render(<PersonalInfo item={mockItem} />);

        expect(screen.getByText('Email')).toBeTruthy();
        expect(screen.getByText('test@example.com')).toBeTruthy();
    });

    it('renders nothing when title is missing', () => {
        const mockItem = {
            content: 'Just content'
        };
        const { container } = render(<PersonalInfo item={mockItem} />);
        expect(container.firstChild).toBeNull();
    });
});
