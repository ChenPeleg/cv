import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ExportButtons from '../../src/components/Bottons/ExportButtons';

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
        
        const downloadBtn = screen.queryByTitle('Download CV') || screen.queryByTitle('Download CV as PDF');
        expect(downloadBtn).toBeTruthy();
    });
});
