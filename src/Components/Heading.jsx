import React from 'react'
import {anticipate, motion} from 'motion/react';
const Heading = () => {
  return (
    <>
    
     <div className='h-35 w-full  flex  justify-between ' >
      <motion.h1 animate={{x:-100}} transition={{duration:2, repeat:Infinity ,ease:'anticipate'}} initial={{x:-0.5}} className='pl-[9%] text-5xl  font-medium tracking-wide leading-[60px]  text-gray-800'> Build With The Ones <br /> Who Show Up  </motion.h1>
      <p className='pr-[8%] pt-[4%] font-medium text-xl  text-gray-500 '> They aren't ambassadors. <br />They're proof.   </p>

    </div>

    </>
   
  )
}

export default Heading
