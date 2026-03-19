import React from 'react'
import {motion} from 'motion/react';
'use client'
const Cards = () => {
  return (

    <>
      <div id='Main' className='h-130 w-full  flex gap-7 pl-[7.5%] pt-4  '>
       
<motion.div drag dragConstraints={{left:0, right:0, top:0, bottom:0 }} whileHover={{ scale: 0.95 }} id="part1" className='bg-[url("assets/486592687_n.jpg")]  bg-cover  bg-center cursor-pointer   h-120 w-90 rounded-2xl '>
 

</motion.div>

<motion.div  drag dragConstraints={{left:0, right:0, top:0, bottom:0 }} whileHover={{ scale: 0.95 }} id="part2" className='bg-[url("assets/17794801_n.jpg")]      bg-center   cursor-pointer   bg-cover  h-120 w-90 bg-pink-400 rounded-2xl'>
 
</motion.div>

<motion.div  
drag dragConstraints={{left:0, top:0,  right:0 , bottom:0 }} whileHover={{ scale: 0.95 }} id="part3" className=' bg-[url("assets/42949266_n.jpg")]     cursor-pointer     bg-cover  bg-center        h-120 w-90  rounded-2xl'>
 
</motion.div>



    </div>
    
    
    </>
  
  )
}

export default Cards
