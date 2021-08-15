import React from 'react'
import Link from 'next/link'
import { projectData } from './pageAssets'

export default function AboutME() {
    return (
        <>
        <h2 className='font-bold text-2xl py-6'>About Me</h2>
        <div className='flex flex-col flex-wrap mx-auto justify-center md:w-4/6 p-6 pt-0'>
            <p className='pb-3'>I'm a recent graduate from Cal Poly San Luis Obispo, having finished my BS in Graphic Communication in March of 2020. I am passionate about designing applications for mobile and web that put people first, while still looking great.</p>
            <p>When I'm not working, you can find me climbing or skiing depending on the season. Or if not, building and modifying mechanical keyboards!</p>
            <button className='block p-8'>Contact Me</button>
        </div>
        </>
    )
}
