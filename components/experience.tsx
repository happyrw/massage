"use client"

import React from 'react'
import useLoadingProvider from './provider/loading-provider';
import { Skeleton } from './ui/skeleton';
import { LoaderIcon } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

const Experience = () => {
    const isSkeleton = useLoadingProvider();

    if (isSkeleton) {
        return (
            <div className='flex flex-col md:flex-row items-center justify-between dark:bg-black/15 p-4'>
                <div className='space-y-5'>
                    <Skeleton className='w-[150px] h-[30px] bg-slate-200' />
                    <Skeleton className='w-[170px] h-[30px] bg-slate-200' />
                    <Skeleton className='w-[150px] h-[20px] bg-slate-200' />
                </div>
                <div className='relative '>
                    <Skeleton className='w-[400px] h-[400px] bg-slate-200' />
                </div>
            </div>
        );
    }

    return (
        <div className='flex flex-col md:flex-row items-center justify-between dark:bg-black/15 p-4'>
            <div className='space-y-5'>
                <h1 className='text-xl font-bold'>Welcome to my portfolio, <span className='block text-orange-700 text-3xl'>Happy to have <span className='underline text-green-800'>you!</span></span></h1>
                <p className='mt-4 text-muted-foreground'>Let make the difference</p>
                <Button className='bg-orange-700 text-white px-10 dark:hover:text-black'>Talk to me!</Button>
            </div>
            <div className='relative w-[400px] h-[400px]'>
                <Image src="/no.png" alt="me" fill className='object-cover rotate-12' />
            </div>
        </div>
    )
}

export default Experience