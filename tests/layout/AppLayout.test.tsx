import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AppLayout } from '../../src/layout/AppLayout';

// Mock child components
vi.mock('../../src/components/Bottons/ExportButtons.tsx', () => ({
    default: () => <div data-testid="export-buttons">ExportButtons</div>
}));
vi.mock('../../src/layout/AppSidebar.tsx', () => ({
    AppSidebar: () => <div data-testid="app-sidebar">AppSidebar</div>
}));
vi.mock('../../src/layout/AppMainContent.tsx', () => ({
    AppMainContent: () => <div data-testid="app-main-content">AppMainContent</div>
}));

describe('AppLayout Component', () => {
    it('renders layout structure', () => {
        const mockInfo = {};

        render(<AppLayout info={mockInfo as any} />);

        expect(screen.getByTestId('export-buttons')).toBeTruthy();
        expect(screen.getByTestId('app-sidebar')).toBeTruthy();
        expect(screen.getByTestId('app-main-content')).toBeTruthy();
    });
});
