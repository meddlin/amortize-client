import { render } from '@testing-library/react';
import CalculationForm from '../../src/components/calculation-form';

it('renders the calculation form', () => {
    const { container } = render(<CalculationForm />)
    expect(container).toMatchSnapshot()
})