import { render, screen } from '@testing-library/react';
import Dungeons  from "./Components/DungeonsData/Dungeons";



describe('Testing Dungeons Component', () => {
  test('header renders with The Edition of Dungeons and Dragons API', () => {
    render(<Dungeons />);
    const linkElement = screen.getByText(/The 5th Edition Dungeons and Dragons API/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('Test Dungeons Component with 7 buttons', async () => {
    render(<Dungeons />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(7);
  });
  test('Test Dungeons Component with 1 Search box', async () => {
    render(<Dungeons />);
    const searchBoxList = await screen.findAllByRole('searchbox');
    expect(searchBoxList).toHaveLength(1);
  });
  test('Test Dungeons Component with Preview icon', async () => {
    render(<Dungeons />);
    const previewIcon = await screen.findByText('Preview')
    expect(previewIcon);
  });
  test('Test Dungeons Component  that contains rows of data', async () => {
    render(<Dungeons />);
    const rowData = await screen.findAllByRole('row')
    expect(rowData).not.toHaveLength(0);
  });
});