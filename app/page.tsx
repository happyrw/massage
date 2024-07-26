import Description from '@/components/description';
import Experience from '@/components/experience';
import LeftSide from '@/components/left-side';
import RightSide from '@/components/right-side';
import Skills from '@/components/skills';
import YearsOfExperience from '@/components/years-of-experience';
import React from 'react'

const HomePage = async () => {

  return (
    <main className='flex flex-col md:flex-row items-center md:p-4 p-1 md:h-[100vh] gap-5'>
      <LeftSide />
      <div className='flex bg-black/15 dark:bg-slate-900 h-full w-full p-2 md:p-4 gap-0 md:gap-5'>
        <div className='h-full w-full overflow-y-auto space-y-5'>
          <Experience />
          <YearsOfExperience />
          <Skills />
          <Description />
        </div>
        <RightSide />
      </div>
    </main>
  )
}

export default HomePage;