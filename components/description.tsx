"use client"

import Image from 'next/image'
import React from 'react'
import useLoadingProvider from './provider/loading-provider';
import { Skeleton } from './ui/skeleton';

const tools = [
    {
        icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
        alt: 'HTML',
        title: 'HTML',
        bold: 'HyperText Markup Language:',
        note: " The standard language for creating web pages. It structures the content on the web, such as text, images, and links. HTML forms the backbone of web development and is essential for building the foundation of any website."
    },
    {
        icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000',
        alt: 'CSS',
        title: 'CSS',
        bold: "Cascading Style Sheets:",
        note: "A stylesheet language used to describe the presentation of a document written in HTML. CSS controls the layout, colors, fonts, and overall visual appearance of web pages. It allows for the creation of responsive and visually appealing designs."
    },
    {
        icon: 'https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000',
        alt: 'typeScript',
        title: 'TypeScript',
        bold: "Typed JavaScript:",
        note: " A superset of JavaScript that adds static types. TypeScript improves code quality and developer productivity by providing type checking at compile time, making it easier to catch errors early and maintain large codebases. It integrates seamlessly with modern JavaScript frameworks."
    },
    {
        icon: 'https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000',
        alt: 'React',
        title: 'React.js',
        bold: "JavaScript Library for Building User Interfaces:",
        note: "Developed by Facebook, React allows developers to create reusable UI components. It uses a virtual DOM for efficient updates and rendering, making it ideal for building dynamic and high-performance web applications."
    },
    {
        icon: 'https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000',
        alt: 'Next.js',
        title: 'Next.js',
        bold: "React Framework for Production:",
        note: "Built on top of React, Next.js provides server-side rendering, static site generation, and other optimizations out-of-the-box. It simplifies the development of fast, SEO-friendly, and scalable web applications with features like file-based routing and API routes."
    },
    {
        icon: 'https://th.bing.com/th/id/OIP.pm9Kgu_pE5Qiys5c0oNxiwAAAA?rs=1&pid=ImgDetMain',
        alt: 'shadcn ui',
        title: 'shadcn ui',
        bold: "Component Library for UI Development:",
        note: "(Shadow Components) is a library that offers pre-styled and customizable UI components. It helps streamline the development process by providing a set of ready-to-use components, which can be easily integrated and styled to fit the needs of your project."
    }
]

const Description = () => {
    const isSkeleton = useLoadingProvider();

    if (isSkeleton) {
        return (
            <main>
                <div className='mt-10'>
                    <Skeleton className='w-[200px] h-[20px] bg-slate-200 mx-auto' />
                    <Skeleton className='w-[100px] h-[20px] bg-slate-200 mx-auto' />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 gap-2'>
                    {tools.map((tool) => (
                        <div className='flex flex-col items-center space-y-2 px-2 py-5' key={tool.icon}>
                            <div className='flex items-center justify-center'>
                                <Skeleton
                                    className='w-[50px] h-[50px] bg-slate-200'
                                />
                            </div>
                            <Skeleton className='w-[40px] h-[20px] bg-slate-200' />
                            <div>
                                <Skeleton className='w-[200px] h-[170px] bg-slate-200' />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        );
    }
    return (
        <main>
            <div className='mt-10'>
                <h1 className='text-center font-serif uppercase'>Let talk a little bit about my skills</h1>
                <p className='w-[200px] h-2 bg-orange-700 mx-auto rounded-[0px_0px_10px_10px] mt-3'></p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 gap-2'>
                {tools.map((tool) => (
                    <div className='flex flex-col items-center space-y-2 bg-white/15 dark:bg-slate-800 px-2 py-5' key={tool.icon}>
                        <div className='border-2 border-orange-500 w-[80px] h-[80px] rounded-full flex items-center justify-center'>
                            <Image
                                src={tool.icon}
                                alt={tool.alt}
                                width={90}
                                height={90}
                                className='object-cover w-[50px] h-[50px] cursor-pointer'
                            />
                        </div>
                        <p>{tool.title}</p>
                        <div>
                            <p className='dark:text-muted-foreground leading-5 text-xs h-[170px] overflow-y-auto'>
                                <span className='font-bold dark:text-white'>{tool.bold}</span> {tool.note}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Description