'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='flex sticky p-5 top-0 flex-items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-transparent'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center space-x-2'>
                <span className='hidden md:inline-flex'>
                    <SocialIcon
                        style={{ width: 35, height: 35 }}
                        url="https://twitter.com"

                    />
                </span>
                <SocialIcon
                    style={{ width: 35, height: 35 }}
                    url="https://youtube.com"
                />
                <span className='hidden sm:inline-flex'>
                    <SocialIcon
                        style={{ width: 35, height: 35 }}
                        url="https://facebook.com"
                    />
                </span>

                <span className='hidden md:inline-flex'>
                    <SocialIcon
                        style={{ width: 35, height: 35 }}
                        url="https://instagram.com"
                    />
                </span>

                <span className='hidden md:inline-flex'>
                    <SocialIcon
                        style={{ width: 35, height: 35 }}
                        url="https://tiktok.com"
                    />
                </span>


                <SocialIcon
                    style={{ width: 35, height: 35 }}
                    url="https://linkedin.com"
                />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer space-x-2'>
                <SocialIcon
                    network='email'
                    style={{ width: 35, height: 35 }}
                    className='cursor-pointer'
                    fgColor='#F2F3F4'
                />
                <p className='uppercase hidden md:inline-flex text-small text-[#F2F3F4]'>Get In Touch</p>
            </motion.div>
        </header>
    )
}

export default Header