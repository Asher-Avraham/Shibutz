'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Key, useState } from 'react'
import WeekTableData from '../db.json'
import CellCard from './CellCard'
const WeekTable = () => {
    const [weekData, setWeekData] =
        useState<Array<(string | number)[][]>>(WeekTableData)
    const handleCellChange = (newValue: string) => {
        console.log('##################')
        console.log('inside weektable')
        console.log('newValue', newValue)
        console.log('##################')
    }
    return (
        <Table className="p-2 m-2">
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead className="w-[100px]">Sunday</TableHead>
                    <TableHead>Monday</TableHead>
                    <TableHead>Tuesday</TableHead>
                    <TableHead>Wendsday</TableHead>
                    <TableHead>Thursday</TableHead>
                    <TableHead>Friday</TableHead>
                    <TableHead className="text-right">Shabbat</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {weekData.map((row: any[], index: Key | null | undefined) => (
                    <TableRow key={index}>
                        {row.map((cell: any) => (
                            <TableCell key={cell}>
                                <CellCard
                                    content={cell}
                                    handleCellChange={handleCellChange}
                                />{' '}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default WeekTable
