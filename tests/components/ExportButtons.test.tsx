import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ExportButtons from '../../src/components/Bottons/ExportButtons';

// Mock useDownloadAsPdf
vi.mock('../../src/pdf/useDownloadAsPdf.tsx', () => ({
    useDownloadAsPdf: () => ({
        downloadAsPdf: vi.fn()
    })
}));

describe('ExportButtons Component', () => {
    it('renders download and print buttons', () => {
        render(<ExportButtons />);
        
        // Check for titles
        expect(screen.getByTitle('Print CV')).toBeTruthy();
        
        // Depending on environment (localhost vs others), one of the download buttons will be shown
        // We can check if at least one exists
        const downloadBtn = screen.queryByTitle('Download CV') || screen.queryByTitle('Download CV as PDF');
        expect(downloadBtn).toBeTruthy();
    });
});
