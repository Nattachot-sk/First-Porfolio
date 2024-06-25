import React from 'react'
import { motion, useScroll , useTransform } from "framer-motion"

function Mybio() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress)
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div>
      <motion.div
        style={{ scale }}
      >
        <motion.div
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
      <div className='w-full h-full'>
        <h1 className='text-blue-500 font-[jaro] font-bold text-[65px]'>Welcome</h1>
        <h1 className='text-indigo-500 text-[45px]'>I am junior developer</h1>
        <h1 className='text-blue-500 font-[jose] text-[25px] mt-3'>This is my first project.</h1>
        <p className='text-white font-[jose] text-[25px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat, ipsam ipsum ex nemo voluptates?</p>
      </div>
    </div>
  )
}

export default Mybio
