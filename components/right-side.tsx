"use client"
import { ModeToggle } from '@/components/toggle-mode';
import { Separator } from '@/components/ui/separator';
import DropDown from './drop-down';
import { Skeleton } from './ui/skeleton';
import useLoadingProvider from './provider/loading-provider';
import { usePathname } from 'next/navigation';

const RightSide = () => {

    const isSkeleton = useLoadingProvider();
    const pathname = usePathname();

    if (isSkeleton) {
        return (
            <div className='z-10'>
                <div className='hidden md:flex flex-col items-center justify-between ml-auto h-full w-[50px] p-[5px] dark:bg-slate-800'>
                    <div>
                        <Skeleton className='w-8 h-8 cursor-pointer my-2 bg-slate-200' />
                        <Skeleton className='bg-slate-200' />
                    </div>
                    <Skeleton className='w-full h-[200px] bg-slate-200' />
                    <Skeleton className='w-8 h-8 cursor-pointer bg-slate-200' />
                </div>

                <div className='fixed top-0 right-0 left-0 md:hidden flex '>
                    <div className='w-full md:hidden flex items-center justify-between bg-slate-200 p-[5px]'>
                        <div>
                            <Skeleton className='w-8 h-8 cursor-pointer my-2 bg-slate-200' />
                        </div>
                        <Skeleton className='font-bold bg-slate-200' />
                        <Skeleton className='w-8 h-8 cursor-pointer bg-slate-200' />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='z-10'>
            <div className='hidden md:flex flex-col items-center justify-between ml-auto h-full w-[50px] bg-slate-200 dark:bg-slate-800 p-[5px] shadow-2xl shadow-black'>
                <div className='relative flex flex-col items-center'>
                    <DropDown />
                    <Separator className='bg-black dark:bg-white w-10 ' />
                    <div className='absolute top-[150px] rotate-90 w-[200px]'>
                        <p className='font-bold  text-orange-500 underline text-nowrap'>
                            {
                                pathname === "/" && "HOME" ||
                                pathname === "/about-me" && "ABOUT ME" ||
                                pathname === "/projects" && "PROJECTS" ||
                                pathname === "/experience" && "EXPERIENCE" ||
                                pathname === "/education" && "EDUCATION" ||
                                pathname === "/testimonials" && "TESTIMONIES" ||
                                pathname === "/services" && "SERVICE"
                            }
                        </p>
                    </div>
                </div>
                <p className='font-bold rotate-90'>FUMBWE</p>
                <ModeToggle />
            </div>

            <div className='fixed top-0 right-0 left-0 md:hidden flex '>
                <div className='w-full md:hidden flex items-center justify-between bg-slate-200 dark:bg-slate-800 p-[5px] shadow'>
                    <div className='flex items-center'>
                        <DropDown />
                    </div>
                    <p className='font-bold'>FUMBWE</p>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default RightSide