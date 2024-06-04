'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

const About = (props: Props) => {

  const [text, count] = useTypewriter({
    words: [
      'Mohan Teja',
      'Full Stack Developer',
      'Machine Learning Engineer',
      'Deep Learning Engineer',
      'AI Developer'
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-col max-w-7xl justify-evenly mx-auto items-center snap-center text-[#F2F3F4]'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-[#F2F3F4] text-2xl'>About</h3>
      <div className='flex flex-col text-center md:text-left md:flex-row max-w-7xl mx-auto items-center justify-center px-0 md:px-10 space-y-5 space-x-0 md:space-x-10 mt-24'>
        <motion.img
          initial={{
            x: -200,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className='flex-shrink-0 w-36 h-36 rounded-full object-cover sm:w-56 sm:h-56 md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[450px]'
          src={'teja.jpeg'}
          alt="hero-image"
        />

        <motion.div
          initial={{
            x: 200,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className='px-10 md:px-0 flex flex-col items-center justify-center space-y-4'>
          <div className='font font-semibold text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] flex gap-[12px]'>
            <span className='mr-3'>I am <span className='text-[#b1e4ee] font-bold uppercase'>{text}</span> <Cursor cursorColor='#FAEBD7' /></span>
          </div>
          <div className='flex flex-col space-y-3'>
            <p className='text-sm md:text-lg'>
              Hello Everyone, My name is Mohanteja. I am a full stack Machine Learning and Deep Learning Engineer with impressive experience over implementing ML/DL algorithms such as Linear Regression, CNN, RNN, Time series, Reinforcement (Q Learning), etc., using PyTorch and create an API over Relational database using Django or FastAPI that can be deployed over AWS services such as EC2, ECS, Beanstalk, Lightsail, etc., or just in Bedrock or SageMaker.
            </p>
            <p className='hidden md:text-sm lg:text-lg md:block'>
              I am also skilled in frontend frameworks such as Nextjs/React along with popular 3D web framework Babylone.js. Desiging Animated videos using Blender along with editing videos and adding VFX to them using Devinci Resolve and Fusion is one of my hobbies.
            </p>
          </div>
        </motion.div>
      </div>
      <div className='flex justify-center items-center space-x-0 md:space-x-20 space-y-4 md:space-y-0 md:flex-row flex-col'>
        <button className='aboutButton'>
          <SocialIcon
            style={{ width: 35, height: 35 }}
            network='github'
          />
          <h3>GITHUB</h3>
        </button>
        <button className='aboutButton py-3'>
          <Image src='resume.svg' width={20} height={20} alt='resume icon' className='color-white text-white border-white decoration-w' />
          <h3>RESUME</h3>
        </button>
      </div>
    </motion.div>
  )
}

export default About 