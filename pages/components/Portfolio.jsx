import React from 'react'
import Link from 'next/link'
import { projectData } from './pageAssets'

export default function PortfolioLinks() {
    return (
        <>
        <h2 className='font-bold text-2xl pb-4'>Projects</h2>
        <div className='flex flex-row flex-wrap mx-auto justify-center md:w-4/6'>
            {projectData.map((item, index) => {
                return (
                    <Link href={item.urlImg}>
                        <div className='max-w-xs rounded shadow flex-wrap justify-center p-6 m-4 md:-6' key={index}>
                            <img src={item.urlName} key={index} />
                            <p key={index} className='font-bold'>{item.projectName}</p>
                            <p key={index} className='pb-3 italic'>{item.projectType}</p>
                            <p key={index}>{item.projectDescription}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
        </>
    )
}
