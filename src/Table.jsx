import React from 'react';

const Table = ({ data }) => {
    return (
        <div className='w-full'>
            <table className='bg-[#3498db] rounded-sm flex flex-col'>
                <tbody>
                    <tr className='flex md:py-4 xs:py-1 justify-between'>
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>Action</th>
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>ID</th>
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>Start Date</th> 
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>End Date</th>
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>Month, Year</th> 
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>Dates Excluded</th> 
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>No. of Days</th> 
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>Lead Count</th> 
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>Expected DDR</th> 
                        <th className='md:text-base xs:text-[8px] lg:w-32 md:w-20 xs:w-8 xs:font-light md:font-semibold'>Last Updated</th>
                    </tr>
                    {data.map((data, index) => {
                        const days = (new Date(data.endDate) - new Date(data.startDate))
                            / (1000 * 60 * 60 * 24)
                            - (data.excludedDates.length)- 1;
                        return (
                            <tr className='flex px-0 py-4 bg-slate-400 w-full items-center justify-between text-center' key={index}>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'>*</td>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'>{data.count}</td>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'>{data.startDate}</td>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'>{data.endDate}</td>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'>{(new Date(data.startDate).getMonth() + 1)}</td>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'><ul>{data.excludedDates.map((date, index) => (<p key={index}>{8}</p>))}</ul></td>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'>{days}</td>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'>{data.leadCount}</td>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'>{Math.floor((data.leadCount) / (days))}</td>
                                <td className='lg:text-base md:text-xs xs:text-[7px] lg:w-32 md:w-20 xs:w-8 lg:font-normal xs:font-thin'>{data.lastUpdated.toISOString().split('T')[0]}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table