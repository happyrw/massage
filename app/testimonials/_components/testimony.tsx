"use client"

import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, MoveLeftIcon, MoveUpIcon } from 'lucide-react';
import React, { useState } from 'react'

const Testimony = () => {
    const [showBox, setShowBox] = useState(false);
    return (
        <div>
            <div className={cn('bg-white w-[500px] absolute bottom-0 right-[100px] transition-height', showBox ? 'h-[500px]' : 'h-10')}>
                <div className='flex items-center justify-between p-2'>
                    <h1 className='text-start uppercase text-sm text-orange-800'>Message your testimony here</h1>
                    <button className='cursor-pointer' onClick={() => setShowBox((current) => !current)}>
                        {!showBox && <ChevronUp className='w-7 h-7' />}
                        {showBox && <ChevronDown className='w-7 h-7' />}
                    </button>
                </div>
                <Separator className='w-full ' />
            </div>
        </div>
    )
}

export default Testimony