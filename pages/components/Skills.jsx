import React from 'react'
import Link from 'next/link'
import { skillsData } from './pageAssets'

export default function Skills() {
    return (
        <>
        <h2 className='font-bold text-2xl pb-4'>Skills</h2>
        <div className='flex flex-row flex-wrap mx-auto justify-center md:w-4/6'>
            {/* Change to a ForEach maybe? */}
            {skillsData.map((item, index) => {
                return (
                    <Link href='#'>
                        <div className='rounded shadow flex-wrap justify-center p-6 m-4 md:-6 flex flex-col' key={index}>
                            <img src={item.urlName} key={index} />
                            <p key={index} className='font-bold'>{item.skillName}</p>
                            <ul key={index} className='font-italic'>
                                {item.skillItems.map((skill, index) => {
                                    return (
                                        <li key={index}>{skill}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </Link>
                )
            })}
        </div>
        </>
    )
}
