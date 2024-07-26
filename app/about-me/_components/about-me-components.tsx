"use client"

import useLoadingProvider from '@/components/provider/loading-provider';
import { Skeleton } from '@/components/ui/skeleton';
import { ChevronDown, Pointer } from 'lucide-react';
import React from 'react'

const AboutMeComponent = () => {
    const isSkeleton = useLoadingProvider();

    if (isSkeleton) {
        return (
            <div className='mt-10 p-2'>
                <Skeleton className='w-[200px] h-[50px] bg-slate-200 mt-10 p-2' />

                <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 p-2' />
                <Skeleton className='w-full h-[20px] bg-slate-200 mt-6' />
                <Skeleton className='w-full h-[20px] bg-slate-200 mt-2' />
                <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-2' />

                <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10 ml-auto' />
                <Skeleton className='w-full h-[20px] bg-slate-200 mt-2' />
                <Skeleton className='w-full h-[20px] bg-slate-200 mt-2' />
                <Skeleton className='w-full h-[20px] bg-slate-200 mt-2' />
                <Skeleton className='w-full h-[20px] bg-slate-200 mt-2' />
                <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-2' />

                <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-10' />
                <Skeleton className='w-full h-[20px] bg-slate-200 mt-6' />
                <Skeleton className='w-full h-[20px] bg-slate-200 mt-2' />
                <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-2' />


                <Skeleton className='w-full h-[20px] bg-slate-200 mt-6' />
                <Skeleton className='w-full h-[20px] bg-slate-200 mt-2' />
                <Skeleton className='w-[100px] h-[20px] bg-slate-200 mt-2' />
            </div>
        );
    }

    return (
        <div className='space-y-8 mt-10 p-2'>
            <h1 className='text-4xl uppercase mt-10'>About <span className='dark:text-orange-500 text-orange-800 border-b-2 border-dashed border-orange-800 rounded-[0px_0px_10px_10px] pb-2'>Me</span></h1>
            <div>
                <p>
                    <span className='dark:text-orange-500 text-orange-800 text-2xl font-bold border-b-[1px] border-dashed border-orange-800 rounded-[0px_0px_10px_10px] pb-2 block my-10'>
                        My Story
                    </span>
                    Hello! I&apos;m <span className='text-orange-800 dark:text-orange-500 underline'>Manyenzi J Happy</span>, a passionate individual from the beautiful country of <span className='text-orange-800 dark:text-orange-500 underline'>Rwanda</span>. Born and raised in the Western Province, specifically in the Rubavu district, I have always been surrounded by a rich cultural heritage and stunning landscapes. My journey in life has been fueled by a love for technology, creativity, and a strong sense of community.
                </p>
            </div>

            <div>
                <p>
                    <span className='dark:text-orange-500 text-orange-800 text-xl md:text-2xl font-bold border-b-[1px] border-dashed border-orange-800 rounded-[0px_0px_10px_10px] pb-2 block my-10 text-end'>
                        Personal Interests and Hobbies
                    </span>
                    When I&apos;m not immersed in coding, you can find me enjoying some of my favorite activities:

                    <br /><span className='font-bold text-sm text-orange-800'>
                        Coding:
                    </span>
                    It&apos;s not just a profession for me; it&apos;s a passion. I love solving problems and creating innovative solutions through code.
                    <br /><span className='font-bold text-sm text-orange-800'>
                        Listening to Music:
                    </span>
                    Music is a universal language that speaks to the soul. I enjoy exploring different genres and finding new tunes to inspire me.
                    <br /><span className='font-bold text-sm text-orange-800'>
                        Spending Time with Friends:
                    </span>
                    I cherish the moments spent with friends, whether it&apos;s sharing stories, laughing together, or simply enjoying each other&apos;s company.
                    <br /><span className='font-bold text-sm text-orange-800'>
                        Drinking Water &apos;AMAZI&apos;:
                    </span>
                    I have a fondness for water, or <span className='text-orange-800 dark:text-orange-500 underline'>&apos;amazi&apos;</span> as we call it in <span className='text-orange-800 dark:text-orange-500 underline'>Kinyarwanda.</span> Staying hydrated keeps me refreshed and focused.
                </p>
            </div>

            <p>
                I believe in the power of community and the importance of nurturing relationships. Whether it&apos;s collaborating on a project or spending quality time with friends, I value the connections that enrich my life.
            </p>

            <p>
                Thank you for taking the time to learn more about me. I look forward to connecting with like-minded individuals and contributing to the tech community in meaningful ways.
            </p>
        </div>
    )
}

export default AboutMeComponent;