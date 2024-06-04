import React from 'react'
import BackgroundCircles from '../components/BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { Tilt } from 'react-tilt'
import HeroBgAnim from '../components/HeroBgAnim'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className='pt-32 overflow-hidden h-screen flex flex-col space-y-8 items-center justify-center text-center'>
            <BackgroundCircles />
            <div className='absolute flex items-center justify-center top-64'>
                <HeroBgAnim />
            </div>
            <Tilt>
                <Image
                    className='relative rounded-full h-32 w-32 mx-auto object-cover border-2-[#be1adb]'
                    src='/teja.jpeg'
                    width={200}
                    height={200}
                    alt='my image'
                />
            </Tilt>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-[#F2F3F4] pb-2 tracking-[15px]'>Software Developer</h2>
                <div className='pt-5'>
                    <Link href='about'><button className='heroButton'>About</button></Link>
                    <Link href='experience'><button className='heroButton'> Experience</button></Link>
                    <Link href='skills'><button className='heroButton'>Skills</button></Link>
                    <Link href='projects'><button className='heroButton'>Projects</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Hero