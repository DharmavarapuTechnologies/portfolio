'use client'

import Skill from '@/components/Skill'
import { motion } from 'framer-motion'
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

type Props = {}

const Skills = (props: Props) => {

  const categories = [
    {
      name: 'Frontend Design',
      posts: [
        {
          id: 1,
          title: 'Does drinking coffee make you smarter?',
          date: '5h ago',
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "So you've bought coffee... now what?",
          date: '2h ago',
          commentCount: 3,
          shareCount: 2,
        },
      ],
    },
    {
      name: 'Backend Develop',
      posts: [
        {
          id: 1,
          title: 'Is tech making coffee better or worse?',
          date: 'Jan 7',
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: 'The most innovative things happening in coffee',
          date: 'Mar 19',
          commentCount: 24,
          shareCount: 12,
        },
      ],
    },
    {
      name: 'Machine Learning',
      posts: [
        {
          id: 1,
          title: 'Ask Me Anything: 10 answers to your questions about coffee',
          date: '2d ago',
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: '4d ago',
          commentCount: 1,
          shareCount: 2,
        },
      ],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-0 mx-auto items-center'>
      <h3 className='absolute top-6 uppercase tracking-[20px] text-[#F2F3F4] text-2xl'>Skills</h3>
      <h3 className='absolute top-20 uppercase tracking-[3px] text-sm text-[#F2F3F4]'>Hover over a skill for current proficiency</h3>
      <TabGroup className="-mt-28 lg:-mt-16">
        <TabList className="flex gap-4 items-center justify-center">
          {categories.map(({ name }) => (
            <Tab
              key={name}
              className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {categories.map(({ name, posts }) => (
            <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
              <div className='grid grid-cols-4 gap-5'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </motion.div>

  )
}

export default Skills