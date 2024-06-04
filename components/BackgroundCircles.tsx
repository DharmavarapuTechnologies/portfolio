import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
        initial = {{
            opacity: 0,
        }}
        animate = {{
            scale: [1, 2, 2, 3, 1],
            opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 0.1],
        }}
        transition={{
            duration: 2.5
        }}
        className='relative flex justify-center items-center'>
        <div className='absolute border border-[#F2F3F4] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#F2F3F4] rounded-full h-[300px] w-[300px] mt-52' />
        <div className='absolute border border-[#F2F3F4] rounded-full h-[500px] w-[500px] mt-52' />
        <div className='absolute border border-[#F7AB0A] rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse' />
        <div className='hidden lg:inline-flex rounded-full border border-[#F2F3F4] h-[800px] w-[800px] mt-52 absolute' />
    </motion.div>
  )
}

export default BackgroundCircles