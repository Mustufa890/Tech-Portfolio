"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
const page = () => {
  return (
  <>
  <motion.div 
   initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
  className='justify-items-center p-8 ' >
  <h2 className='text-4xl sm:text-2xl md:text-5xl text-emerald-300' >Services</h2>
  <p className='text-center text-white m-5 ' >High-performance and SEO-friendly websites using Next.js. <br/> Optimized for fast loading and better Google ranking.</p>  
  </motion.div>
  <motion.div 
   initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
  className='justify-items-center  p-8 ' >


    {/* --------------------- */}
  <h2 className='text-4xl sm:text-2xl md:text-5xl text-emerald-300' >Portfolio</h2>
   <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">

      {/* Image */}
      <div className="overflow-hidden">
        <motion.img
          src="/book.png"
          alt="Project"
          width={600}
          height={400}
          className="w-full h-[260px] object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

     
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

    
      <div className="absolute bottom-0 p-5 w-full flex flex-col gap-3">
        
        
        <h3 className="text-white text-xl font-semibold tracking-wide">
         Book Application
        </h3>

       
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-white/10 text-white px-2 py-1 rounded-md">Reactjs</span>
          <span className="bg-white/10 text-white px-2 py-1 rounded-md">Tailwind</span>
         
        </div>

        
        <div className="flex gap-3 mt-2">
          <Link
            href="https://book-web-application.vercel.app/"
            className="text-sm px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Live
          </Link>
          <Link
            href="https://github.com/Mustufa890/Book-Web-Application"
            className="text-sm px-4 py-2 border border-white/40 text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Code
          </Link>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl" />
      </div>

    </div>
{/* ----------------- */}
<br/>

<div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">

      {/* Image */}
      <div className="overflow-hidden">
        <motion.img
          src="/Git.png"
          alt="Project"
          width={600}
          height={400}
          className="w-full h-[260px] object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

     
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

    
      <div className="absolute bottom-0 p-5 w-full flex flex-col gap-3">
        
        
        <h3 className="text-white text-xl font-semibold tracking-wide">
         GitHub
        </h3>

       
        {/* <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-white/10 text-white px-2 py-1 rounded-md">Next.js</span>
          <span className="bg-white/10 text-white px-2 py-1 rounded-md">Tailwind</span>
          <span className="bg-white/10 text-white px-2 py-1 rounded-md">MongoDB</span>
        </div> */}

        
        <div className="flex gap-3 mt-2">
          {/* <Link
            href="https://book-web-application.vercel.app/"
            className="text-sm px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Live
          </Link> */}
          <Link
            href="https://github.com/Mustufa890"
            className="text-sm px-4 py-2 border border-white/40 text-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Code
          </Link>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl" />
      </div>

    </div>

  

  </motion.div>
  </> 
  )
}

export default page