 import React from 'react'
 import {motion} from 'motion/react';
 const Shop = () => {
   return (
    <>
    
      <div className='h-50 w-full '> 

     <motion.button whileTap={{scale:0.95}} className='bg-lime-500 cursor-pointer font-medium text-base p-2.5 pl-[3%] pr-[3%] mt-[10%] ml-[43%] rounded-2xl'><i class="ri-shopping-bag-2-fill"></i> Shop the Stack</motion.button>
     </div>
    
    </>
   
   )
 }
 
 export default Shop
 