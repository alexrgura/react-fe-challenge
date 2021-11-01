import { render, screen } from '@testing-library/react';
import ButtonBar from './ButtonBar';

test('ButtonBar renders the right number of buttons', () => {
    render(<ButtonBar pages={4} clickFunction={() => {}} page={1} />);
    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons).toHaveLength(6);
})

test('ButtonBar highlights the correct button', () => {
    render(<ButtonBar pages={4} clickFunction={() => {}} page={3} />);
    const highlightedButton = screen.getByText(3);
    expect(highlightedButton).toHaveClass('selected');
})