'use client'

import React, { useState } from 'react';
import { 
    useReactTable, 
    createColumnHelper, 
    flexRender, 
    getCoreRowModel, 
    getPaginationRowModel,
} from "@tanstack/react-table";

const PhoneTable = ({ amortization }) => {    
    const columnHelper = createColumnHelper();
    const columns = [
        columnHelper.accessor('term', {
            header: () => <h3>Term</h3>,
            cell: info => {
                const value = info.getValue();
                return value + 1;
            }
        }),
        columnHelper.accessor('totalMonthlyCustomerPayment', {
            header: () => <h3>Total Mon. Pmt.</h3>,
            cell: info => {
                const value = info.getValue();
                return value ? `$${value.toFixed(2)}` : value;
            }
        }),
        columnHelper.accessor('termPayment', {
            header: () => <h3>P&I</h3>,
            cell: info => {
                const value = info.getValue();
                return value ? `$${value.toFixed(2)}` : value;
            },
        }),
        columnHelper.accessor('remaining', {
            header: () => <h3>Rem. Principal</h3>,
            cell: info => {
                const value = info.getValue();
                return value ? `$${value.toFixed(2)}` : value;
            },
        }),
        columnHelper.accessor('extraMonthlyPayment', {
            header: () => <h3>Extra Payment</h3>,
            cell: info => {
                const value = info.getValue();
                return value ? `$${value.toFixed(2)}` : value;
            },
        }),
    ];

    const table = useReactTable({
        columns: columns,
        data: (amortization && amortization.length > 0) ? amortization : [],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 400,
            },
        },
    })

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Amortization</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        See the calculated amortization table below.
                    </p>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
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
                                {table.getRowModel().rows.map((row) => (
                                    <tr 
                                        key={row.id} 
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

export default PhoneTable;