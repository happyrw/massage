"use client"

import useLoadingProvider from '@/components/provider/loading-provider';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const Education = () => {
    const isSkeleton = useLoadingProvider();

    if (isSkeleton) {
        return (
            <div>
                <Skeleton className='w-[100px] h-[20px] mt-10 bg-slate-200' />
                <Skeleton className='w-[250px] h-[20px] mt-5 bg-slate-200' />

                <div className='flex items-center gap-10'>
                    <div>
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                    </div>

                    <div>
                        <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[600px] h-[10px] mt-10 bg-slate-200' />
                    </div>
                </div>
                <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                <div className='flex items-center gap-10'>
                    <div>
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                    </div>

                    <div>
                        <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[600px] h-[10px] mt-10 bg-slate-200' />
                    </div>
                </div>
                <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                <div className='flex items-center gap-10'>
                    <div>
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[100px] h-[10px] mt-10 bg-slate-200' />
                    </div>

                    <div>
                        <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                        <Skeleton className='w-[300px] h-[10px] mt-10 bg-slate-200' />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='bg-slate-200 dark:bg-slate-700 flex flex-col items-start gap-5 p-10'>
            <h1 className='text-4xl'>Education</h1>

            <p className='text-2xl dark:text-orange-500 text-orange-800 underline underline-offset-8'>University of Rwanda</p>
            <div className='space-y-2 text-black dark:text-muted-foreground'>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Degree:</p>
                    <p>Undergraduate (Year 3)</p>
                </div>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Major:</p>
                    <p>Not specified</p>
                </div>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Location:</p>
                    <p>Huye (previously Gikondo)</p>
                </div>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'> Note:</p>
                    <p>Shifted from Gikondo to Huye; personally, I did not like the decision taken.</p>
                </div>
            </div>

            <p className='text-2xl dark:text-orange-500 text-orange-800 underline underline-offset-8'>College de Gisenyi Inyemeramihigo</p>
            <div className='space-y-2 text-black dark:text-muted-foreground'>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Level:</p>
                    <p>Secondary Education</p>
                </div>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Years Attended:</p>
                    <p>All six years</p>
                </div>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Major:</p>
                    <p>MEG (Mathematics, Economics, and Geography)</p>
                </div>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Location:</p>
                    <p>Gisenyi</p>
                </div>
            </div>

            <p className='text-2xl dark:text-orange-500 text-orange-800 underline underline-offset-8'>Rusamaza Primary School</p>
            <div className='space-y-2 text-black dark:text-muted-foreground'>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Level:</p>
                    <p>Primary Education</p>
                </div>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Location:</p>
                    <p>Rusamaza</p>
                </div>
                <div className='flex items-center'>
                    <p className='min-w-[200px]'>Note:</p>
                    <p>This was my first schooling in Rwanda, and I am proud of my progress.</p>
                </div>
            </div>
        </div>
    )
}

export default Education;   