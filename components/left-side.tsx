"use client"

import SocialMediaIcons from '@/components/socialmedia-icons';
import { Progress } from '@/components/ui/normal-progress';
import { CircularProgress } from '@/components/ui/rounded-progress';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import useLoadingProvider from './provider/loading-provider';
import { Skeleton } from './ui/skeleton';
import { LoaderIcon } from 'lucide-react';

const LeftSide = () => {

    const isSkeleton = useLoadingProvider();

    if (isSkeleton) {
        return (
            <div className='w-full md:min-w-[250px] md:max-w-[250px] h-full mt-10 pb-5 md:pb-0 md:mt-0'>
                <div className='w-full h-[200px] flex flex-col items-center justify-center'>
                    <div className='relative w-[60px] h-[60px] rounded-full bg-slate-200'>
                        <Skeleton className='object-cover rounded-full' />
                    </div>
                    <Skeleton className='h-2 w-[50px] bg-slate-200 mt-2' />
                    <Skeleton className='h-2 w-[150px] bg-slate-200 mt-2' />
                </div>
                <div className='p-2 space-y-3 mt-4'>
                    <div className='space-y-2'>
                        <div className='flex w-full items-center justify-between'>
                            <Skeleton className='font-semibold text-sm h-2 w-[100px] bg-slate-200 mt-2' />
                            <Skeleton className='text-sm text-muted-foreground h-2 w-[40px] bg-slate-200 mt-2' />
                        </div>
                        <div className='flex w-full items-center justify-between'>
                            <Skeleton className='font-semibold text-sm h-2 w-[60px] bg-slate-200 mt-2' />
                            <Skeleton className='text-sm text-muted-foreground bg-slate-200 mt-2 w-[50px] h-2' />
                        </div>
                        <div className='flex w-full items-center justify-between'>
                            <Skeleton className='font-semibold text-sm h-2 w-[120px] bg-slate-200 mt-2' />
                            <Skeleton className='text-sm h-2 w-[80px] bg-slate-200 mt-2' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <LoaderIcon className='animate-spin mt-5' />
                </div>
            </div>
        );
    }

    return (
        <div className='dark:bg-slate-800 bg-slate-100 w-full md:min-w-[250px] md:max-w-[250px] h-full mt-10 pb-5 md:pb-0 md:mt-0'>
            <div className='dark:bg-slate-700 bg-white w-full h-[200px] flex flex-col items-center justify-center'>
                <div className='relative w-[60px] h-[60px] rounded-full bg-slate-600 border-2 border-sky-700'>
                    <Image src="/t.jpg" alt="profile" fill className='object-cover rounded-full' />
                    <div className='absolute bottom-2 -right-1 w-4 h-4 rounded-full bg-green-400 z-10'></div>
                </div>
                <h1 className='dark:text-white font-bold'>J. Happy</h1>
                <p className='text-muted-foreground text-sm'>Software Engineer</p>

            </div>

            <div className='p-2 space-y-3 mt-4'>
                <div className='space-y-2'>
                    <div className='flex w- full items-center justify-between'>
                        <h2 className='font-semibold text-sm'>Residence:</h2>
                        <p className='text-sm text-muted-foreground'>Rwanda</p>
                    </div>
                    <div className='flex w- full items-center justify-between'>
                        <h2 className='font-semibold text-sm'>City:</h2>
                        <p className='text-sm text-muted-foreground'>Gisenyi</p>
                    </div>
                    <div className='flex w- full items-center justify-between'>
                        <h2 className='font-semibold text-sm'>Contact:</h2>
                        <p className='text-sm text-muted-foreground'>+250781705734</p>
                    </div>
                </div>
                <Separator className='bg-muted-foreground' />
            </div>

            <div className='my-5 px-2 space-y-4'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col items-center'>
                        <CircularProgress value={90} size={60} className="text-blue-500" />
                        <p className='text-xs text-muted-foreground mt-2'>HTML</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <CircularProgress value={70} size={60} className="text-blue-500" />
                        <p className='text-xs text-muted-foreground mt-2'>CSS</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <CircularProgress value={50} size={60} className="text-blue-500" />
                        <p className='text-xs text-muted-foreground mt-2'>TypeScript</p>
                    </div>
                </div>
                <Separator className='bg-muted-foreground' />
            </div>

            <div className='p-2 space-y-3'>
                <div>
                    <div className='flex w- full items-center justify-between mb-2'>
                        <h2 className='font-semibold text-sm'>React js:</h2>
                        <p className='text-sm text-muted-foreground'>90%</p>
                    </div>
                    <Progress value={90} />
                </div>
                <div>
                    <div className='flex w- full items-center justify-between mb-2'>
                        <h2 className='font-semibold text-sm'>Next js:</h2>
                        <p className='text-sm text-muted-foreground'>80%</p>
                    </div>
                    <Progress value={80} />
                </div>
                <div>
                    <div className='flex w- full items-center justify-between mb-2'>
                        <h2 className='font-semibold text-sm'>Shadcn ui:</h2>
                        <p className='text-sm text-muted-foreground'>70%</p>
                    </div>
                    <Progress value={70} />
                </div>
            </div>

            <div className=''>
                <SocialMediaIcons />
            </div>

        </div>
    )
}

export default LeftSide