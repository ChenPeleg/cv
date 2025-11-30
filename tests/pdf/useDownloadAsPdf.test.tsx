import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useDownloadAsPdf } from '../../src/pdf/useDownloadAsPdf';

// Mock jspdf
const mockSave = vi.fn();
const mockHtml = vi.fn().mockReturnValue({
    save: mockSave
});

vi.mock('jspdf', () => ({
    jsPDF: class {
        html = mockHtml;
    }
}));

describe('useDownloadAsPdf Hook', () => {
    it('should download pdf', async () => {
        const { result } = renderHook(() => useDownloadAsPdf());
        
        // Mock document.getElementById
        const mockElement = document.createElement('div');
        mockElement.id = 'cv-wrapper';
        document.body.appendChild(mockElement);

        await result.current.downloadAsPdf();

        expect(mockHtml).toHaveBeenCalled();
        expect(mockSave).toHaveBeenCalledWith('chen-peleg.pdf');
        
        // Cleanup
        document.body.removeChild(mockElement);
    });
});
