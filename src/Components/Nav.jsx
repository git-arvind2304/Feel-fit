import React from 'react'
import {motion} from 'motion/react';
const nav = () => {
  return (
    <>
    <div class="h-50 w-full ">
<div class="flex items-center justify-between p-10">

    <div class="">
  <motion.h1 animate={{ y:22 }} transition={{duration: 1,}} className='font-sans font-medium text-2xl text-gray-700'>FORMULA</motion.h1>
    </div>
  
<motion.div animate={{y:22}} transition={{duration: 1}} className='flex items-center justify-evenly gap-10 font-sans text-lg font-medium
 text-gray-700 cursor-pointer hover:text-gray-900'> 
<h4>Products<i   className=" text-2xl absolute top-[7.5%]  ri-arrow-drop-down-line"></i></h4>
<h4>Stacks</h4>
<h4>Science</h4>
<h4>Athletes</h4>
<h4>Blog</h4>
<motion.h4 whileTap={{scale:0.95}} className='bg-lime-400 px-5 py-2 rounded-2xl '>Buy</motion.h4>
</motion.div>


</div>



    </div>
    
    </>
  )
}

export default nav
