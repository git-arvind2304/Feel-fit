  import React from 'react'
 import Nav from './Components/Nav'
 import Heading from './Components/Heading'
 import Cards from './Components/Cards'
 import Shop from './Components/Shop'
 import Footer from './Components/Footer'
 
 const App = () => {
   return (
     <div className='h-265 w-full bg-gray-200 rounded-2xl'>
<Nav />
<Heading/>
<Cards/>
<Shop/>
<Footer/>
 
     </div>
   )
 }
 
 export default App
 