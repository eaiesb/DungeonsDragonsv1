import { render, screen } from '@testing-library/react';
import Dungeons from "../DungeonsData/Dungeons";
describe('Testing APIs', () => {
    test('Testing getAll API', async () => {
        render(<Dungeons /> );
        const apiList = await screen.findAllByRole('grid');
        expect(apiList).not.toHaveLength(0);
    });
});