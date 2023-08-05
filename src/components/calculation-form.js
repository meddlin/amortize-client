'use client'

import { useState } from 'react';
import { Formik, Form, ErrorMessage } from "formik";
import { number, object, string, date } from 'yup';
import Table from './table';
import { amortizationSchedule } from '../utilities/calculations';

const CalculationForm = () => {
    const [schedule, setSchedule] = useState([]);

    const FormSchema = object().shape({
        salePrice: number().required('Sale price is required'),
        downPayment: number().optional(),
        mortgageDuration: number().required('Mortgage duration is required'),
        interestRate: number().required('Interest rate is required'),
        homeInsurance: number().optional(),
        propertyTax: number().optional(),
        mortgageInsurance: number().optional(),
        extraMonthlyPayment: number().optional(),
    });

    const initialValues = {
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
            <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const schedule = amortizationSchedule(values.salePrice, values.interestRate, values.mortgageDuration);
                    console.log(`Schedule: ${JSON.stringify(schedule)}`);
                    
                    setSchedule(schedule);
                    
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ handleChange, handleBlur, handleReset, handleSubmit, values, errors, touched, isValid, dirty }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="flex justiyf-center items-center">
                                <div className="flex flex-col">
                                    <div className="grow mt-6 divide-y divide-gray-200">
                                        <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">Sale Price</label>
                                        <div className="mt-2 mr-5 flex flex-col">
                                            <input 
                                                type="number"
                                                name="salePrice"
                                                id="salePrice"
                                                data-testid="salePrice"
                                                className={ `${errors.salePrice && touched.salePrice ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6` }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.salePrice}
                                            />
                                            <ErrorMessage name="salePrice" component="span" className="error text-xs text-red-700" />
                                        </div>
                                    </div>
                                    <div className="grow mt-6 divide-y divide-gray-200">
                                        <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">Down Payment</label>
                                        <div className="mt-2 mr-5 flex flex-col">
                                            <input 
                                                type="number"
                                                name="downPayment"
                                                id="downPayment"
                                                data-testid="downPayment"
                                                className={ `${errors.downPayment && touched.downPayment ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6` }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.downPayment}
                                            />
                                            <ErrorMessage name="downPayment" component="span" className="error text-xs text-red-700" />
                                        </div>
                                    </div>
                                    <div className="grow mt-6 divide-y divide-gray-200">
                                        <label htmlFor="mortgageDuration" className="block text-sm font-medium text-gray-700">Mortgage Duration (years)</label>
                                        <div className="mt-2 mr-5 flex flex-col">
                                            <input 
                                                type="number"
                                                name="mortgageDuration"
                                                id="mortgageDuration"
                                                data-testid="mortgageDuration"
                                                className={ `${errors.mortgageDuration && touched.mortgageDuration ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6` }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.mortgageDuration}
                                            />
                                            <ErrorMessage name="mortgageDuration" component="span" className="error text-xs text-red-700" />
                                        </div>
                                    </div>
                                    <div className="grow mt-6 divide-y divide-gray-200">
                                        <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">Interest Rate (annual)</label>
                                        <div className="mt-2 mr-5 flex flex-col">
                                            <input 
                                                type="number"
                                                name="interestRate"
                                                id="interestRate"
                                                data-testid="interestRate"
                                                className={ `${errors.interestRate && touched.interestRate ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6` }
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.interestRate}
                                            />
                                            <ErrorMessage name="interestRate" component="span" className="error text-xs text-red-700" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="grow mt-6 divide-y divide-gray-200">
                                    <label htmlFor="homeInsurance" className="block text-sm font-medium text-gray-700">Home Insurance</label>
                                    <div className="mt-2 mr-5 flex flex-col">
                                        <input 
                                            type="number"
                                            name="homeInsurance"
                                            id="homeInsurance"
                                            data-testid="homeInsurance"
                                            className={ `${errors.homeInsurance && touched.homeInsurance ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6` }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.homeInsurance}
                                        />
                                        <ErrorMessage name="homeInsurance" component="span" className="error text-xs text-red-700" />
                                    </div>
                                </div>
                                <div className="grow mt-6 divide-y divide-gray-200">
                                    <label htmlFor="propertyTax" className="block text-sm font-medium text-gray-700">Property Tax</label>
                                    <div className="mt-2 mr-5 flex flex-col">
                                        <input 
                                            type="number"
                                            name="propertyTax"
                                            id="propertyTax"
                                            data-testid="propertyTax"
                                            className={ `${errors.propertyTax && touched.propertyTax ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6` }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.propertyTax}
                                        />
                                        <ErrorMessage name="propertyTax" component="span" className="error text-xs text-red-700" />
                                    </div>
                                </div>
                                <div className="grow mt-6 divide-y divide-gray-200">
                                    <label htmlFor="mortgageInsurance" className="block text-sm font-medium text-gray-700">Mortgage Insurance</label>
                                    <div className="mt-2 mr-5 flex flex-col">
                                        <input 
                                            type="number"
                                            name="mortgageInsurance"
                                            id="mortgageInsurance"
                                            data-testid="mortgageInsurance"
                                            className={ `${errors.mortgageInsurance && touched.mortgageInsurance ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6` }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mortgageInsurance}
                                        />
                                        <ErrorMessage name="mortgageInsurance" component="span" className="error text-xs text-red-700" />
                                    </div>
                                </div>
                                <div className="grow mt-6 divide-y divide-gray-200">
                                    <label htmlFor="extraMonthlyPayment" className="block text-sm font-medium text-gray-700">Extra Monthly Payment</label>
                                    <div className="mt-2 mr-5 flex flex-col">
                                        <input 
                                            type="number"
                                            name="extraMonthlyPayment"
                                            id="extraMonthlyPayment"
                                            data-testid="extraMonthlyPayment"
                                            className={ `${errors.extraMonthlyPayment && touched.extraMonthlyPayment ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6` }
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.extraMonthlyPayment}
                                        />
                                        <ErrorMessage name="extraMonthlyPayment" component="span" className="error text-xs text-red-700" />
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => handleReset()}
                                    className={!(dirty && isValid) ? "disabled-btn text-gray-400" : "block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                    disabled={!(dirty && isValid)}
                                >
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className={!(dirty && isValid) ? "disabled-btn text-gray-400" : "block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                    disabled={!(dirty && isValid)}
                                >
                                    Calculate
                                </button>
                            </div>
                        </form>
                )}
            </Formik>

            <Table amortization={schedule} />
        </>
    );
};

export default CalculationForm;