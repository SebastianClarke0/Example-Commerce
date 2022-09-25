import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GrMenu, GrClose } from 'react-icons/Gr';

export default function Home() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <div className ='absolute inset-x-0 top-0 w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg'>
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
          <div className='hidden md:flex pr-4'>
            <button className= 'border-none bg-transparent text-black mr-4'>Sign In</button>
            <button className ='px-8 py-3'>Sign Up</button>
          </div>
          <div className = 'md:hidden'>
          <GrMenu className = 'w-5' />  
          </div>
        </div>
      </div>
      
     <div className="w-3/5 h-5/6 bg-white rounded-[50px] opacity-75 blur-sm">

     </div>

    </div>
  )
}
