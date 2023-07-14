import { render } from '@testing-library/react';
import Home from '../src/app/page';

it('renders a heading', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
})