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
            header: () => <h3 className="max-w-[75px]">Total Mon. Pmt.</h3>,
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
            header: () => <h3 className="max-w-[75px]">Rem. Principal</h3>,
            cell: info => {
                const value = info.getValue();
                return value ? `$${value.toFixed(2)}` : value;
            },
        }),
        // columnHelper.accessor('extraMonthlyPayment', {
        //     header: () => <h3>Extra Payment</h3>,
        //     cell: info => {
        //         const value = info.getValue();
        //         return value ? `$${value.toFixed(2)}` : value;
        //     },
        // }),
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
        <div className="flex justify-center">
            <table className="divide-y divide-gray-300">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
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
                                <td key={cell.id} className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PhoneTable;