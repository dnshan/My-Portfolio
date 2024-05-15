import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa';
// import { SiJava } from 'react-icons/si';


const Technologies = () => {
  return (
    <>
    <div className="border-b border=neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap item-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-5xl text-cyan-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-5xl text-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-5xl text-green-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-5xl text-green-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDatabase className="text-5xl text-gray-400"/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Technologies