'use client'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
     const [menuOpen, setMenuOpen] = React.useState(false)
    const navItems = ['Products', 'Services',  'Pricing', 'About']; 
  return (
  <>
  <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>
            <nav className="   px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between relative">
             <Link href='/' className='text-4xl text-emerald-300 font-serif' >Portfolio</Link>   

                <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
                 <nav className={`px-4 py-1.5 rounded-full space-x-10 text-sm transition-colors `} >
                 <Link href='/' >Home</Link>   
                 <Link href='/Services' >Services</Link>   
                 <Link href='/Contact' >Contact</Link>   
                 </nav> 
                </div>

                <button className="hidden md:flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-emerald-300 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0">
                    Get started
                    <span className="size-7 rounded-full bg-white flex items-center justify-center">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                </button>

                <button onClick={() => setMenuOpen(!menuOpen)} className="  md:hidden bg-emerald-400 flex flex-col gap-1.5 cursor-pointer  border-0 p-1">
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
                  
                    <Link href='/' className='m-4' >Home</Link>   
                    <Link href='/Services' className='m-4' >Services</Link>   
                    <Link href='/Contact' className='m-4' >Contact</Link>
                    
                        <button className="flex items-center justify-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 text-sm font-medium px-5 py-2.5 rounded-full cursor-pointer border-0 mt-3 w-fit">
                            Get started
                            <span className="size-7 rounded-full bg-white flex items-center justify-center">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="#3f3f47" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                        </button>
                    </div>
                )}
            </nav>
  </>  
  )
}

export default Navbar