import { render, screen } from '@testing-library/react';
import PartList from './PartList';


test('PartList renders a list of parts of the correct length', () => {
    const parts = [...new Array(20)].map((part, id) => ({
        id: id + 1,
        part_file: { id: id + 1, file_name: `part-${id + 1}.stl`, units: 'mm' },
        quantity: 10,
      }));
    render(<PartList list={parts}/>);
    const partBoxes = screen.getAllByRole("listitem")
    const partLists = screen.getAllByRole("list")
    expect(partBoxes).toHaveLength(20)
    expect(partLists).toHaveLength(1)
  });