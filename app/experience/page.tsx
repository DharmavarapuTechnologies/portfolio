'use client'

import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/data/constants';
import { motion } from 'framer-motion'
import React from 'react'
import 'react-vertical-timeline-component/style.min.css';


type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
      className='flex flex-col relativetext-center md:text-left md:flex-col max-w-7xl  justify-evenly mx-auto items-center h-screen'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#F2F3F4] text-2xl'>Experience</h3>
      {/* <div className='w-full flex flex-col snap-y snap-mandatory items-center justify-center space-y-5 mt-20'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div> */}
    </motion.div>
  )
}

export default Experience