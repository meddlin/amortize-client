'use client'

import Table from './table';

const Form = () => {

    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
    }

    const formData = {
        salePrice: 0,
        downPayment: 0,
        mortgageDuration: 0,
        interestRate: 0,
        homeInsurance: 0,
        propertyTax: 0,
        mortgageInsurance: 0,
        extraMonthlyPayment: 0,
    }

    return (
        <>
            <form className="flex flex-col items-center justify-between p-24">
                <h2>Form content here</h2>

                <div>
                    <label>
                        <p>Sale Price</p>
                        <input name="salePrice" onChange={handleChange} value={formData.salePrice || ''} />
                    </label>
                    <label>
                        <p>Down Payment</p>
                        <input name="downPayment" onChange={handleChange} value={formData.downPayment || ''} />
                    </label>
                    <label>
                        <p>Mortgage Duration (yrs)</p>
                        <input name="mortgageDuration" onChange={handleChange} value={formData.mortgageDuration || ''} />
                    </label>
                    <label>
                        <p>Interest Rate (annual)</p>
                        <input name="interestRate" onChange={handleChange} value={formData.interestRate || ''} />
                    </label>
                </div>
                <div>
                    <label>
                        <p>Home Insurance</p>
                        <input name="homeInsurance" onChange={handleChange} value={formData.homeInsurance || ''} />
                    </label>
                    <label>
                        <p>Property Tax</p>
                        <input name="propertyTax" onChange={handleChange} value={formData.propertyTax || ''} />
                    </label>
                    <label>
                        <p>Mortgage Insurance</p>
                        <input name="mortgageInsurance" onChange={handleChange} value={formData.mortgageInsurance || ''} />
                    </label>
                    <label>
                        <p>Extra Monthly Payment</p>
                        <input name="extraMonthlyPayment" onChange={handleChange} value={formData.extraMonthlyPayment || ''} />
                    </label>
                </div>

                <button
                    type="submit"
                    onClick={() => alert('clicked')}
                >
                    Calculate
                </button>
            </form>
            <Table />
        </>
    );
};

export default Form;