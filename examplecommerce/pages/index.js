import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GrMenu, GrClose } from 'react-icons/Gr';
import React, { useState } from 'react';

export default function Home() {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className ='absolute inset-x-0 top-0 w-screen h-[60px] z-10 bg-zinc-200 drop-shadow-lg'>
        <div clasName = 'px-2 flex jusitfy-between items-center w-full h-full'>
          <div className  = 'flex items-center'>
            <h1 className = 'text-3xl font-bold mr-4 sm:text-4xl'>EXAMPLE.</h1>
            <ul className = 'hidden md:flex '>
              <li>Home</li>
              <li>about</li>
              <li>Support</li>
              <li>Platforms</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className='hidden md:flex pr-4 absolute top-0 right-0 pt-1 '>
            <button className= 'border-none bg-transparent text-black mr-4'>Sign In</button>
            <button className ='px-8 py-3'>Sign Up</button>
          </div>
          <div className = 'md:hidden absolute top-0 right-0 pt-3 pr-3' onClick={handleClick}>
            {!nav ? <GrMenu className = 'w-5' /> : <GrClose className = 'w-5'/>}  
          </div>
        </div>
      <ul className = {!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 '} >
        <li className = 'border-b-2 border-zinc-300 w-full'>Home</li>
        <li className = 'border-b-2 border-zinc-300 w-full'>about</li>
        <li className = 'border-b-2 border-zinc-300 w-full'>Support</li>
        <li className = 'border-b-2 border-zinc-300 w-full'>Platforms</li>
        <li className = 'border-b-2 border-zinc-300 w-full'>Pricing</li>
        <div className ='place-content-center my-4'>
          <button className= 'bg-transparent text-indigo-600 px-20 py-3 mb-4 '>Sign In</button>
          <button className ='px-20 py-3'>Sign Up</button>
        </div>
      </ul>
      </div>
      
     <div className="w-3/5 h-5/6 bg-white rounded-[50px] opacity-75 blur-sm">

     </div>

    </div>
  )
}
