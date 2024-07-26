"use client"

import useLoadingProvider from '@/components/provider/loading-provider';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const ExperienceComponent = () => {
    const isSkeleton = useLoadingProvider();

    if (isSkeleton) {
        return (
            <div>
                <Skeleton className='w-[100px] h-[10px] bg-slate-200' />
                <Skeleton className='w-[400px] h-[20px] mt-20 bg-slate-200' />
                <Skeleton className='w-[300px] h-[10px] mt-5 bg-slate-200' />
                <Skeleton className='w-[100px] h-[10px] mt-5 bg-slate-200' />

                <Skeleton className='w-full h-[30px] my-2 bg-slate-200' />
                <Skeleton className='w-full h-[30px] my-2 bg-slate-200' />
                <Skeleton className='w-full h-[30px] my-2 bg-slate-200' />
                <Skeleton className='w-full h-[30px] my-2 bg-slate-200' />

                <Skeleton className='w-[100px] h-[10px] my-4 bg-slate-200' />

                <Skeleton className='w-full h-[30px] my-2 bg-slate-200' />
                <Skeleton className='w-full h-[30px] my-2 bg-slate-200' />
                <Skeleton className='w-full h-[30px] my-2 bg-slate-200' />
            </div>
        );
    }
    return (
        <div className='space-y-8'>
            <div>
                <h1 className='text-xl'>Experience</h1>
                <p className='bg-orange-800 w-[100px] h-[4px] rounded-[0px_0px_10px_10px]' />
            </div>
            <div className='space-y-2'>
                <p className='text-muted-foreground'>
                    I&apos;m a Web Developer at EdgeReach Tech hub with <br /> <span className='uppercase text-orange-800 dark:text-orange-500 text-2xl'><span className='underline'>3 months</span> experience.</span>
                </p>

                <h3>Responsibilities:</h3>
                <div>
                    <p className='bg-slate-200 dark:bg-slate-700 p-2 mt-2'>Developed and maintained web applications using HTML, CSS, JavaScript, and TypeScript</p>
                    <p className='bg-slate-200 dark:bg-slate-700 p-2 mt-2'>Collaborated with the design team to implement responsive and user-friendly interfaces</p>
                    <p className='bg-slate-200 dark:bg-slate-700 p-2 mt-2'>Optimized website performance and ensured cross-browser compatibility</p>
                    <p className='bg-slate-200 dark:bg-slate-700 p-2 mt-2'>Assisted in debugging and troubleshooting issues in existing codebases</p>
                </div>
            </div>

            <div className='space-y-2'>
                <h3>Achievement</h3>
                <div>
                    <p className='bg-slate-200 dark:bg-slate-700 p-2 mt-2'>Successfully delivered three client projects on time, receiving positive feedback for functionality and design.</p>
                    <p className='bg-slate-200 dark:bg-slate-700 p-2 mt-2'>Improved page load speed by 30% through code optimization and efficient resource management.</p>
                    <p className='bg-slate-200 dark:bg-slate-700 p-2 mt-2'>Implemented a component-based architecture, enhancing code reusability and maintainability.</p>
                </div>
            </div>

            <p className='text-center uppercase border-x-2 border-orange-500 rounded-[20px] border-b-[1px] hover:border-b-[3px] pt-10 pb-3'>The Hustle Side of Coding</p>
            <p>Sacrifices to be a Good Coder:</p>
            <div className='space-y-2'>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Social Life:</p>
                    <p >You might miss out on social events and leisure activities as you dedicate time to learning and building projects.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Time:</p>
                    <p>Long hours of coding, often late into the night, are common. It&apos;s essential to spend substantial time honing your skills, staying updated with new technologies, and working on projects.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Comfort:</p>
                    <p>Coding can sometimes mean sitting for extended periods, which can be physically taxing. It&apos;s important to take breaks and maintain a healthy lifestyle.</p>
                </div>
            </div>

            <p>Challenges in Progressing:</p>
            <div className='space-y-2'>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Dealing with Errors:</p>
                    <p>When you encounter errors in your code and lack someone to ask for help, it can be incredibly frustrating and time-consuming. This requires patience, persistence, and resourcefulness.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Continuous Learning:</p>
                    <p>The tech industry evolves rapidly, demanding continuous learning and adaptation. Keeping up with the latest trends and tools can be overwhelming but is necessary for staying relevant.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Problem Solving:</p>
                    <p>Developing strong problem-solving skills is crucial, as coding often involves tackling complex issues and finding efficient solutions. This can be mentally exhausting but is highly rewarding when you succeed.</p>
                </div>
            </div>

            <p>Facing challenges in coding is a natural and essential part of the learning process. <br />Here are some notes to encourage you:</p>
            <div className='space-y-2'>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Embrace the Journey:</p>
                    <p>Every coder, from beginners to experts, encounters errors and roadblocks. Each challenge you face is an opportunity to learn and grow. Embrace these moments as part of your journey to becoming a better coder.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Persistence Pays Off:</p>
                    <p>Progress in coding often comes from persistence. When you hit a wall, take a break, but don’t give up. Keep experimenting, researching, and trying different approaches. Every step forward, no matter how small, is progress.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Seek Help and Community:</p>
                    <p>You’re not alone in your struggles. The coding community is vast and supportive. Seek help from forums, online communities, mentors, or peers. Sharing your problems can lead to new insights and solutions.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Celebrate Small Wins:</p>
                    <p>Every bug you fix, every new concept you understand, and every project you complete are milestones worth celebrating. Recognize and appreciate your progress, no matter how minor it may seem.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Stay Curious and Open-Minded:</p>
                    <p>Coding is a continuous learning process. Stay curious, explore new technologies, and be open to different ways of solving problems. Your willingness to learn will propel you forward.</p>
                </div>
                <div className='flex flex-col md:flex-row items-center bg-slate-200 dark:bg-slate-700 p-4'>
                    <p className='min-w-[200px] font-bold uppercase text-muted-foreground'>Believe in Yourself:</p>
                    <p>Trust in your abilities and potential. The fact that you’re tackling coding challenges shows your dedication and passion. Believe that you can overcome any obstacle with time and effort.</p>
                </div>
            </div>

            <p>
                Remember, every expert coder started as a beginner. The challenges you face today will be the foundation of your expertise tomorrow. Keep pushing forward, stay motivated, and never underestimate the power of persistence. <span className='border-b-[5px] border-white rounded-[10px_0px]'>Happy coding!</span>
            </p>
        </div>
    )
}

export default ExperienceComponent