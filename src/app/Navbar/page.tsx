"use client"
import 'remixicon/fonts/remixicon.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function Navbar(){

    const [isMoved , setMotion] = useState(false);

    const barMove=()=>[
     
         setMotion(!isMoved)
    ]

      return(
      <>
      <div className="navbar w-full h-[10vh]  flex items-center justify-between box-border px-4">
        <div className={`side-navbar absolute flex flex-col items-center justify-center gap-4  top-16 transition-all duration-1000  bg-white z-50 drop-shadow-2xl shadow-black w-[40vw] h-[50vw] sm:w-[30vw] sm:h-[40vw] rounded-r-2xl ${isMoved?"left-0":"left-[-100%]"}`}>
            <Link href="/"><li className='list-none text-black z-50 text-[5vw] sm:text-[3vw] md:text-[3vw]  ' style={{textShadow:"1px 1px gray"}}>Home</li></Link>
            <Link href="/AllBlogs"><li className='list-none text-black  z-50 text-[5vw] sm:text-[3vw] md:text-[3vw] '>Blogs</li></Link>
            <Link href="/Author"><li className='list-none text-black z-50 text-[5vw] sm:text-[3vw] md:text-[3vw]'>Author</li></Link>
            <Link href="/Contact"><li className='list-none text-black z-50 text-[5vw] sm:text-[3vw] md:text-[3vw]'>Contact</li></Link>
        </div>
        <div className="logo-wrapper flex items-center gap-2">

      <div className="logo-navbar relative w-[9vw] h-[9vw] sm:w-[7vw] sm:h-[7vw] md:w-[5.5vw] md:h-[5.5vw] lg:w-[3vw] lg:h-[2.5vw]" style={{borderRadius: "50%"}}>
        <Image src="/images/blog11.jpg" alt="logo" layout='fill' style={{borderRadius:"50%"}} />
      </div>
      <div className="logo-title">
        <h1 className='text-black'>META-<span className='font-black'>BLOG</span></h1>
      </div>
        </div>
        <div className="lists  items-center gap-8 hidden sm:hidden md:flex lg:flex">
            <Link href="/"><li className='list-none'>Home</li></Link>
            <Link href="/AllBlogs"><li className='list-none'>Blogs</li></Link>
            <Link href="/Author"><li className='list-none'>Author</li></Link>
            <Link href="/Contact"><li className='list-none'>Contact</li></Link>
        </div>
        <div className="search-bar hidden sm:hidden md:block lg:block">
            <label htmlFor="search-blog"></label>
            <input type="text" id="search-blog" placeholder="Search Blog" className='search-blog px-2' style={{borderRadius:"20px" , border:"1px solid gray" , outline:"none"}}/>
        </div>
        <div className="menu-icon block sm:block md:hidden lg:hidden">
       <button onClick={barMove}> <i className="ri-menu-line text-[7vw] sm:text-[5vw]  "></i></button>
        </div>
      </div>
      
      </>
      );
}