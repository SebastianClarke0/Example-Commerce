import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GrMenu, GrClose } from 'react-icons/Gr';
import React, { useState } from 'react';

export default function Home() {
  const [nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="w-full h-200 bg-gradient-to-t from-gray-700 via-gray-900 to-black bg-cover bg-center p-24">
      <div className ='absolute inset-x-0 top-0 w-screen h-[60px] z-10 bg-white drop-shadow-lg'>
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
      <div>
        <div className = 'flex justify-center'>
          <img src='https://image-cdn.hypb.st/http%3A%2F%2Fhypebeast.com%2Fimage%2F2016%2F09%2Fstreetwear-fashion-photographers-vicky-grout-1.jpg?w=1600&cbr=1&q=90&fit=max'/>
        </div>
      </div>
      <div className="bg-white h-80 w-64 rounded-md p-4">
        <div className="flex justify-center items-center leading-none">
          <img
            src="https://i.pinimg.com/736x/b5/8a/f2/b58af28419aa88f3f46ac127b43dea47.jpg"
            alt="pic"
            class="h-40 w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
          />
        </div>
        <div class="p-3">
          <p class="block mb-1 font-extralight">Modelling</p>
          <p class="text-xs tracking-tighter text-gray-600">
            When it is your time, it’s your time. There is no point in worrying
            about what you can’t control.
          </p>
        </div>
        <div class="flex justify-between items-center p-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt=""
            class="rounded-full h-7"
          />
        </div>
      </div>    

    </div>
  )
}
