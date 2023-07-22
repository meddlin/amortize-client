import { render } from '@testing-library/react';
import Table from '../../src/components/table';

it('renders a table', () => {
    const { container } = render(<Table />)
    expect(container).toMatchSnapshot()
})