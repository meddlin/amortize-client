'use client'

import { useState } from 'react';
import { Formik, Form, ErrorMessage } from "formik";
import { number, object, string, date } from 'yup';
import Table from './table';
import { amortizationSchedule } from '../utilities/calculations';
import { Disclosure } from '@headlessui/react';
import NumberInput from './form/number-input';

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

    const resetData = () => {
        setSchedule([]);
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={(values) => {
                    const data = amortizationSchedule(
                        values.salePrice, 
                        values.downPayment, 
                        values.interestRate, 
                        values.mortgageDuration,
                        values.homeInsurance,
                        values.propertyTax,
                        values.extraMonthlyPayment
                    );
                    setSchedule(data);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, handleReset, values, errors, touched, isValid, dirty }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center">
                            
                            <div className="flex justify-center items-center">
                                <div className="flex flex-col">

                                    <div className="grow mt-6 divide-y divide-gray-200">
                                        <NumberInput title={'Sale Price'} type={'number'} name={'salePrice'} id={'salePrice'}
                                            value={values.salePrice} 
                                            touched={touched.salePrice} 
                                            errors={errors.salePrice} handleChange={handleChange} handleBlur={handleBlur} 
                                        />
                                    </div>
                                    <div className="grow mt-6 divide-y divide-gray-200">
                                        <NumberInput title={'Down Payment'} type={'number'} name={'downPayment'} id={'downPayment'}
                                            value={values.downPayment} 
                                            touched={touched.downPayment} 
                                            errors={errors.downPayment} handleChange={handleChange} handleBlur={handleBlur} 
                                        /> 
                                    </div>
                                    <div className="grow mt-6 divide-y divide-gray-200">
                                        <NumberInput title={'Mortgage Duration (months)'} type={'number'} name={'mortgageDuration'} id={'mortgageDuration'} 
                                            value={values.mortgageDuration} 
                                            touched={touched.mortgageDuration} 
                                            errors={errors.mortgageDuration} handleChange={handleChange} handleBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="grow mt-6 divide-y divide-gray-200">
                                        <NumberInput title={'Interest Rate (annual)'} type={'number'} name={'interestRate'} id={'interestRate'}
                                            value={values.interestRate} 
                                            touched={touched.interestRate} 
                                            errors={errors.interestRate} handleChange={handleChange} handleBlur={handleBlur}
                                        />
                                    </div>

                                    <Disclosure>
                                        <Disclosure.Button className="py-2">
                                            Additional Information
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="text-gray-500">
                                            <div className="grow mt-3 divide-y divide-gray-200">
                                                <NumberInput title={'Home Insurance'} type={'number'} name={'homeInsurance'} id={'homeInsurance'}
                                                    value={values.homeInsurance} 
                                                    touched={touched.homeInsurance} 
                                                    errors={errors.homeInsurance} handleChange={handleChange} handleBlur={handleBlur}
                                                />
                                            </div>
                                            <div className="grow mt-3 divide-y divide-gray-200">
                                                <NumberInput title={'Property Tax'} type={'number'} name={'propertyTax'} id={'propertyTax'}
                                                    value={values.propertyTax} 
                                                    touched={touched.propertyTax} 
                                                    errors={errors.propertyTax} handleChange={handleChange} handleBlur={handleBlur}
                                                />
                                            </div>
                                            <div className="grow mt-3 divide-y divide-gray-200">
                                                <NumberInput title={'Mortgage Insurance'} type={'number'} name={'mortgageInsurance'} id={'mortgageInsurance'}
                                                    value={values.mortgageInsurance} 
                                                    touched={touched.mortgageInsurance} 
                                                    errors={errors.mortgageInsurance} handleChange={handleChange} handleBlur={handleBlur}
                                                />
                                            </div>
                                            <div className="grow mt-3 divide-y divide-gray-200">
                                                <NumberInput title={'Extra Monthly Payment'} type={'number'} name={'extraMonthlyPayment'} id={'extraMonthlyPayment'}
                                                    value={values.extraMonthlyPayment} 
                                                    touched={touched.extraMonthlyPayment} 
                                                    errors={errors.extraMonthlyPayment} handleChange={handleChange} handleBlur={handleBlur}
                                                />
                                            </div>
                                        </Disclosure.Panel>
                                    </Disclosure>

                                </div>
                            </div>

                            <div className="flex flex-row justify-center">
                                <button
                                    type="button"
                                    onClick={() => {
                                        resetData()
                                        handleReset()
                                    }}
                                    className={!(dirty && isValid) ? "disabled-btn text-gray-400 my-5 mr-5" : "my-5 mr-5 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                    disabled={!(dirty && isValid)}
                                >
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className={!(dirty && isValid) ? "disabled-btn text-gray-400 my-5 ml-5" : "my-5 ml-5 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                    disabled={!(dirty && isValid)}
                                >
                                    Calculate
                                </button>
                            </div>

                        </div>
                    </form>
                )}
            </Formik>

            {schedule && schedule.length > 0 ? (
                <Table amortization={schedule} />
            ) : ''}
        </>
    );
};

export default CalculationForm;