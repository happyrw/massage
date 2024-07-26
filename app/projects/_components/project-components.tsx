"use client"

import useLoadingProvider from '@/components/provider/loading-provider'
import { Skeleton } from '@/components/ui/skeleton'
import { MoveRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectComponent = () => {
    const isSkeleton = useLoadingProvider();

    if (isSkeleton) {
        return (
            <div className='space-y-8 pt-10 md:pt-0'>
                <Skeleton className='w-[200px] h-[50px] bg-slate-200 mt-10 p-2' />
                <Skeleton className='w-[100px] h-[20px] bg-slate-200 my-5 p-2 ml-auto' />
                <Skeleton className='w-[100px] h-[20px] bg-slate-200 my-10 p-2' />
                <Skeleton className='w-full h-[20px] bg-slate-200 p-2' />
                <Skeleton className='w-full h-[20px] bg-slate-200 my-10 p-2' />
                <div>
                    <div className='flex flex-col justify-between w-[600px] mt-2 md:flex-row md:items-center'>
                        <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 p-2' /> <Skeleton className='w-[400px] h-[20px] bg-slate-200 mt-10 p-2' />
                    </div>
                    <div className='flex flex-col justify-between w-[600px] mt-2 md:flex-row md:items-center'>
                        <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 p-2' /> <Skeleton className='w-[400px] h-[20px] bg-slate-200 mt-10 p-2' />
                    </div>
                    <div className='flex flex-col justify-between w-[600px] mt-2 md:flex-row md:items-center'>
                        <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 p-2' /> <Skeleton className='w-[400px] h-[20px] bg-slate-200 mt-10 p-2' />
                    </div>
                    <div className='flex flex-col justify-between w-[600px] mt-2 md:flex-row md:items-center'>
                        <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 p-2' /> <Skeleton className='w-[400px] h-[20px] bg-slate-200 mt-10 p-2' />
                    </div>
                    <div className='flex flex-col justify-between w-[600px] mt-2 md:flex-row md:items-center'>
                        <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 p-2' /> <Skeleton className='w-[400px] h-[20px] bg-slate-200 mt-10 p-2' />
                    </div>
                    <div className='flex flex-col justify-between w-[600px] mt-2 md:flex-row md:items-center'>
                        <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 p-2' /> <Skeleton className='w-[400px] h-[20px] bg-slate-200 mt-10 p-2' />
                    </div>
                    <div className='flex flex-col justify-between w-[600px] mt-2 md:flex-row md:items-center'>
                        <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 p-2' /> <Skeleton className='w-[400px] h-[20px] bg-slate-200 mt-10 p-2' />
                    </div>
                </div>
                <div>
                    <Skeleton className='w-[200px] h-[20px] bg-slate-200 mt-10 p-2' />
                    <Skeleton className='w-[300px] h-[20px] bg-slate-200 mt-10 p-2' />
                    <Skeleton className='w-[300px] h-[20px] bg-slate-200 mt-10 p-2' />
                    <Skeleton className='w-[300px] h-[20px] bg-slate-200 mt-10 p-2' />
                    <Skeleton className='w-[300px] h-[20px] bg-slate-200 mt-10 p-2' />
                </div>
                <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 p-2' />
                <Skeleton className='w-[90px] h-[20px] bg-slate-200 mt-10 p-2' />
                <div className='grid grid-cols-2 p-2 gap-4'>
                    <Skeleton className='w-full h-[20px] bg-slate-200 mt-10 p-2' />
                    <Skeleton className='w-full h-[20px] bg-slate-200 mt-10 p-2' />
                </div>
            </div>
        );
    }
    return (
        <div className='space-y-8 pt-10 md:pt-0'>
            <h1 className='text-4xl uppercase mt-10'>Projects</h1>
            <h2 className='dark:text-orange-500 text-orange-800 text-xl md:text-2xl font-bold border-b-[1px] border-dashed border-orange-800 rounded-[0px_0px_10px_10px] pb-2 block my-5 text-end'>Aura Shop</h2>
            <p className='dark:text-orange-500 text-orange-800 text-xl md:text-2xl font-bold pb-2 my-10'>Project Overview</p>
            <p>
                Aura Shop is an e-commerce platform designed to provide a seamless shopping experience for users. The project highlights the integration of modern web technologies and a focus on performance, usability, and scalability.
            </p>
            <p className='dark:text-orange-500 text-orange-800 text-xl md:text-2xl font-bold pb-2 my-10'>
                Tools Used:
            </p>
            <div>
                <div className='flex flex-col mt-2 md:flex-row md:items-center'>
                    <p className='w-[200px] mr-2 text-orange-800 dark:text-orange-500'>Next.js:</p> For server-side rendering and static site generation.
                </div>
                <div className='flex flex-col mt-2 md:flex-row md:items-center'>
                    <p className='w-[200px] mr-2 text-orange-800 dark:text-orange-500'>Tailwind CSS:</p> For utility-first CSS styling.
                </div>
                <div className='flex flex-col mt-2 md:flex-row md:items-center'>
                    <p className='w-[200px] mr-2 text-orange-800 dark:text-orange-500'>CSS:</p> For custom styling and layout adjustments.
                </div>
                <div className='flex flex-col mt-2 md:flex-row md:items-center'>
                    <p className='w-[200px] mr-2 text-orange-800 dark:text-orange-500'>Uploadthing:</p> For handling file uploads.
                </div>
                <div className='flex flex-col mt-2 md:flex-row md:items-center'>
                    <p className='w-[200px] mr-2 text-orange-800 dark:text-orange-500'>shadcn:</p> For UI components and design system.
                </div>
                <div className='flex flex-col mt-2 md:flex-row md:items-center'>
                    <p className='w-[200px] mr-2 text-orange-800 dark:text-orange-500'>TypeScript:</p> For type safety and better development experience.
                </div>
                <div className='flex flex-col mt-2 md:flex-row md:items-center'>
                    <p className='w-[200px] mr-2 text-orange-800 dark:text-orange-500'>Node.js:</p> For server-side logic and backend integration.
                </div>
            </div>
            <p className='dark:text-orange-500 text-orange-800 text-xl md:text-2xl font-bold pb-2 my-10'>
                Project Features:
            </p>
            <div>
                <p className='mt-2 hover:text-orange-800 dark:hover:text-orange-700 flex items-center gap-4'><MoveRightIcon className='w-4 h-4' />User-friendly interface for browsing and purchasing products.</p>
                <p className='mt-2 hover:text-orange-800 dark:hover:text-orange-700 flex items-center gap-4'><MoveRightIcon className='w-4 h-4' />Responsive design for optimal viewing on all devices.</p>
                <p className='mt-2 hover:text-orange-800 dark:hover:text-orange-700 flex items-center gap-4'><MoveRightIcon className='w-4 h-4' />Secure user authentication and data handling.</p>
                <p className='mt-2 hover:text-orange-800 dark:hover:text-orange-700 flex items-center gap-4'><MoveRightIcon className='w-4 h-4' />Integration with third-party services for payments and shipping.</p>
                <p className='mt-2 hover:text-orange-800 dark:hover:text-orange-700 flex items-center gap-4'><MoveRightIcon className='w-4 h-4' />Admin dashboard for managing products, orders, and users.</p>
            </div>
            <p className='dark:text-orange-500 text-orange-800 text-xl md:text-2xl font-bold pb-2 my-10'>
                Live Project:
            </p>
            <Link href="https://aura-shop.vercel.app" className='underline text-black dark:text-muted-foreground font-bold'>Visit Aura Shop</Link>
            <div className='grid grid-cols-2 p-2 gap-4'>
                <div className='relative aspect-video'>
                    <Image src="/1.png" alt="project" fill className='object-cover fill' />
                </div>
                <div className='relative aspect-video'>
                    <Image src="/2.png" alt="project" fill className='object-cover fill' />
                </div>
            </div>
        </div>
    )
}

export default ProjectComponent