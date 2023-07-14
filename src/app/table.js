'use client'

import React, { useState } from 'react';
import { 
    useReactTable, 
    createColumnHelper, 
    flexRender, 
    getCoreRowModel, 
    getPaginationRowModel,
    getFilteredRowModel,
    getFacetedRowModel,
    getSortedRowModel,
    getFacetedUniqueValues,
    getFacetedMinMaxValues,
    sortingFns,
} from "@tanstack/react-table";

const Table = () => {
    // const { amortization, isLoadingAmortization, isErrorAmortization } = useAmortization();
    const amortization = [];
    
    const columnHelper = createColumnHelper();
    const columns = [
        columnHelper.accessor('term', {
            header: () => <h3>Term</h3>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('monthlyPayments', {
            header: () => <h3>Monthly Payments</h3>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('principal', {
            header: () => <h3>Principal</h3>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('interest', {
            header: () => <h3>Interest</h3>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('remainingPrincipal', {
            header: () => <h3>Rem. Principal</h3>,
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('extraPayment', {
            header: () => <h3>Extra Payment</h3>,
            cell: info => info.getValue(),
        }),
    ];

    const table = useReactTable({
        columns: columns,
        data: (amortization && amortization.length > 0) ? amortization : [],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 30,
            },
        },
    })

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Amortization</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        See the calculated amortization table below.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Some button
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            {/* <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    Term
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Title
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Email
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    Role
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr> */}
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th key={header.id} className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            {
                                                header.isPlaceholder 
                                                ? null 
                                                : (
                                                    <>
                                                        <div>
                                                            {flexRender(
                                                                header.column.columnDef.header, header.getContext() 
                                                            )}
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Data here</td>
                            </tr>

                            {/* {people.map((person) => (
                                <tr key={person.email}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        {person.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                        Edit<span className="sr-only">, {person.name}</span>
                                    </a>
                                    </td>
                                </tr>
                            ))} */}

                            {table.getRowModel().rows.map((row) => (
                                <tr 
                                    key={row.id} 
                                    onClick={() => setCurrentPurchaseOrder(row.original)}
                                    className="leading-4 text-sm hover:bg-slate-100 hover:cursor-pointer">
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Table;