"use client"

import "@/components/skills.css"
import useLoadingProvider from "./provider/loading-provider";
import { Skeleton } from "./ui/skeleton";
import { Loader } from "lucide-react";

const Skills = () => {
    const isSkeleton = useLoadingProvider();

    if (isSkeleton) {
        return (
            <main className="space-y-8 pt-10">
                <Skeleton className='w-[100px] h-[30px] bg-slate-200' />
                <Skeleton className='w-[70px] h-[30px] bg-slate-200 mx-auto' />
                <Skeleton className='w-full h-[700px] bg-slate-200 mx-auto' />
            </main>
        );
    }
    return (
        <main className="space-y-8 pt-10">
            <h1 className='uppercase font-bold text-sm'>Let talk about my <span className='border-2 border-orange-700 p-2 rounded-[20px_0px_20px_0px] text-orange-600'>Skills</span></h1>
            <p className="text-center text-nowrap">Those are what my tools are:</p>
            <table>
                <thead>
                    <tr>
                        <th>Technology</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="pl-4 text-orange-700 font-bold">HTML</td>
                        <td className="text-black dark:text-muted-foreground">
                            I have a solid understanding of HTML (HyperText Markup Language), which is the standard language for creating and structuring content on the web. I can effectively use HTML to create the backbone of any website, ensuring that the content is well-organized and accessible.
                        </td>
                    </tr>
                    <tr>
                        <td className="pl-4 text-orange-700 font-bold">CSS</td>
                        <td className="text-black dark:text-muted-foreground">
                            I am proficient in CSS (Cascading Style Sheets), which I use to style and design web pages. With CSS, I can control the layout, colors, fonts, and overall visual presentation, allowing me to create responsive and visually appealing websites that provide a great user experience.
                        </td>
                    </tr>
                    <tr>
                        <td className="pl-4 text-orange-700 font-bold">TypeScript</td>
                        <td className="text-black dark:text-muted-foreground">
                            I am skilled in TypeScript, a typed superset of JavaScript that adds static types. Using TypeScript, I can write more robust and maintainable code, catching errors early in the development process. This enhances code quality and developer productivity, especially in large codebases.
                        </td>
                    </tr>
                    <tr>
                        <td className="pl-4 text-orange-700 font-bold">React.js</td>
                        <td className="text-black dark:text-muted-foreground">
                            I have extensive experience with React.js, a powerful JavaScript library for building user interfaces. React allows me to create reusable UI components and manage the state of complex applications efficiently. It’s my go-to tool for developing dynamic and high-performance web applications.
                        </td>
                    </tr>
                    <tr>
                        <td className="pl-4 text-orange-700 font-bold">Next.js</td>
                        <td className="text-black dark:text-muted-foreground">
                            I am proficient in Next.js, a React framework that provides server-side rendering and static site generation out-of-the-box. With Next.js, I can build fast, SEO-friendly, and scalable web applications. Its features like file-based routing and API routes streamline the development process, making it easier to deploy production-ready applications.
                        </td>
                    </tr>
                    <tr>
                        <td className="pl-4 text-orange-700 font-bold">shadcn ui</td>
                        <td className="text-black dark:text-muted-foreground">
                            I also have experience using shadcn, a component library for UI development. Shadcn offers pre-styled and customizable UI components that help speed up the development process. By integrating shadcn components into my projects, I can quickly build elegant and functional user interfaces tailored to the needs of each project.
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default Skills;










{/* <p>I am a full-stack developer with a strong background in JavaScript, React, and Node.js. I have experience working with various databases, including MongoDB, and have experience building RESTful APIs and GraphQL APIs.</p>
<p>I am also proficient in various programming languages, including Python, Java, and C++. I am also familiar with various development tools, including Git, Docker, and Kubernetes.</p>
<p>I am currently working remotely and have experience collaborating with teams on various projects.</p>
<p>I am also an avid reader and enjoy learning new technologies and programming languages.</p>
<p>I have a strong communication and problem-solving skills, as well as a deep understanding of computer science principles.</p>
<p>I am currently looking for opportunities to work with innovative and dynamic teams.</p> */}