"use client"

import React from 'react'
import useLoadingProvider from './provider/loading-provider';
import { Skeleton } from './ui/skeleton';

const YearsOfExperience = () => {
    const isSkeleton = useLoadingProvider();

    if (isSkeleton) {
        return (
            <div className='flex flex-wrap items-center justify-between w-full border-[1px] border-black/15 p-4 rounded-[0px_0px_30px_30px]'>
                <div className='flex items-center gap-2'>
                    <Skeleton className='w-[10px] h-[30px] bg-slate-200' />
                    <Skeleton className='w-[70px] h-[30px] bg-slate-200' />
                </div>
                <div className='flex items-center gap-2'>
                    <Skeleton className='w-[10px] h-[30px] bg-slate-200' />
                    <Skeleton className='w-[70px] h-[30px] bg-slate-200' />
                </div>
                <div className='flex items-center gap-2'>
                    <Skeleton className='w-[10px] h-[30px] bg-slate-200' />
                    <Skeleton className='w-[70px] h-[30px] bg-slate-200' />
                </div>
                <div className='flex items-center gap-2'>
                    <Skeleton className='w-[10px] h-[30px] bg-slate-200' />
                    <Skeleton className='w-[70px] h-[30px] bg-slate-200' />
                </div>
            </div>
        );
    }
    return (
        <div className='flex flex-wrap items-center justify-between w-full border-[1px] border-black/15 p-4 rounded-[0px_0px_30px_30px]'>
            <div className='flex items-center gap-2'>
                <p className='text-orange-700 text-sm'>10+</p>
                <p className='text-sm'>Years experience</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-orange-700 text-sm'>103</p>
                <p className='text-sm'>Completed projects</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-orange-700 text-sm'>38</p>
                <p className='text-sm'>Happy customers</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-orange-700 text-sm'>20+</p>
                <p className='text-sm'>Honors and awards</p>
            </div>
        </div>
    )
}

export default YearsOfExperience