'use client'

import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const PhoneTable = ({ amortization }) => {

    return (
        <div className="flex justify-center min-w-full">
            {amortization && amortization.length > 0 ? (
                <>
                    <div className="flex flex-col">        
                        <ul role="list" className="divide-y divide-gray-100">
                            <div className="flex gap-x-6">
                                <li className="max-w-[30px] font-semibold text-sm my-5 mr-1">Term</li>
                                <li className="max-w-[60px] font-semibold text-sm my-5 mx-1">Rem.</li>
                                <li className="max-w-[60px] font-semibold text-sm my-5 mx-1 whitespace">Term Payment</li>
                            </div>
                            {amortization.map((am) => (
                                <li key={am.term} className="flex justify-between py-2">
                                    <Disclosure>
                                        <div className="flex flex-col">
                                            <Disclosure.Button>
                                                <div className="flex gap-x-6">
                                                    <div 
                                                        className="min-w-[30px] text-sm leading-6 text-gray-500">
                                                        {am.term + 1}
                                                    </div>
                                                    <div 
                                                        className="min-w-[60px] text-sm leading-6 text-gray-500">
                                                        {`$${am.remaining.toFixed(2)}`}
                                                    </div>
                                                    <div 
                                                        className="min-w-[60px] text-sm leading-6 text-gray-500">
                                                        {`$${am.termPayment.toFixed(2)}`}
                                                    </div>
                                                </div>
                                            </Disclosure.Button>

                                            <Transition
                                                        enter="transition duration-100 ease-out"
                                                        enterFrom="transform scale-95 opacity-0"
                                                        enterTo="transform scale-100 opacity-100"
                                                        leave="transition duration-75 ease-out"
                                                        leaveFrom="transform scale-100 opacity-100"
                                                        leaveTo="transform scale-95 opacity-0"
                                                    >
                                            <Disclosure.Panel>
                                                <p>
                                                    Term: {am.Term ? am.term + 1 : ''}
                                                </p>
                                                <p>
                                                    Remaining: {am.remaining ? `$${am.remaining.toFixed(2)}` : ''}
                                                </p>
                                                <p>
                                                    Term Payment: {am.termPayment ? `$${am.termPayment.toFixed(2)}` : ''}
                                                </p>
                                                <p>
                                                    Principal Payment: {am.principalPayment ? `$${am.principalPayment.toFixed(2)}` : ''}
                                                </p>
                                                <p>
                                                    Interest Payment: {am.interestPayment ? `$${am.interestPayment.toFixed(2)}` : ''}
                                                </p>
                                                <p>
                                                    Total Monthly Payment: {am.totalMonthlyPayment ? `$${am.totalMonthlyPayment.toFixed(2)}` : ''}
                                                </p>
                                                <p>
                                                    Extra Monthly Payment: {am.extraMonthlyPayment ? `$${am.extraMonthlyPayment.toFixed(2)}` : ''}
                                                </p>
                                            </Disclosure.Panel>
                                            </Transition>
                                        </div>

                                    </Disclosure>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : 'No data to display yet.'}
        </div>
    );
};

export default PhoneTable;