import { render, screen } from '@testing-library/react';
import PartBox from './PartBox';

test('PartBox renders the correct text for the part provided', () => {
    const part = {
        id: 1,
        part_file: {
            id: 4,
            file_name: 'part-4.stl',
            units: 'mm'
        },
        quantity: 10,
    }
    render(<PartBox part={part}/>);
    const partName = screen.getByText('part-4.stl');
    expect(partName).toHaveClass('part_name');
    const input = screen.getByPlaceholderText(10);
    expect(input).toBeInTheDocument();
})