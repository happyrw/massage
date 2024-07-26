"use client"

import React from 'react';
import Image from 'next/image';

const SocialMediaIcons = () => {
    const handleClick = (platform: any) => {
        let url;
        switch (platform) {
            case 'instagram':
                url = 'https://www.instagram.com';
                break;
            case 'whatsapp':
                url = 'https://wa.me/+250781705734';
                break;
            case 'linkedin':
                url = 'https://www.linkedin.com/in/manyenzi-j-happy-818b45289';
                break;
            default:
                url = '#';
        }
        window.open(url, '_blank');
    };

    return (
        <div className='flex items-center justify-between px-4 mt-2'>
            <button onClick={() => handleClick('instagram')}>
                <Image
                    src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
                    alt="instagram"
                    width={90}
                    height={90}
                    className='object-cover w-[30px] h-[30px] cursor-pointer'
                />
            </button>
            <button onClick={() => handleClick('linkedin')}>
                <Image
                    src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                    alt="linkedin"
                    width={90}
                    height={90}
                    className='object-cover w-[30px] h-[30px] cursor-pointer'
                />
            </button>
            <button onClick={() => handleClick('whatsapp')}>
                <Image
                    src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                    alt="whatsapp"
                    width={90}
                    height={90}
                    className='object-cover w-[30px] h-[30px] cursor-pointer'
                />
            </button>
        </div>
    );
};

export default SocialMediaIcons;
