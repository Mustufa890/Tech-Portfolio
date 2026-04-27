'use client'
import Image from "next/image";
import { motion } from "motion/react"
export default function Home() {
  return (
  <>
  <motion.div 
   initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}className="Hero-sec justify-items-center text-center p-8 " >
  <h2 className=" text-white text-4xl sm:text-3xl md:text-6xl" >Build Fast Scale <br/> Smart  <span className="text-emerald-400" > Grow Digitally. </span> </h2>  
  <p className="text-center p-5 text-gray-400 text-3xl sm:text-2xl md:text-3xl " >Leveraging modern tech <br/> like Next.js </p>
  <Image className="w-2xl mask-b-from-5 rounded-md m-5 " src='/img1.jpg' loading="eager" alt="img1"  width={900} height={200} />
  <p className="text-white animate-bounce text-5xl  ">↓</p>
  </motion.div>
  <motion.div 
  initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
  className="About-sec justify-items-center items-center p-5 " >
  <h2 className=" text-center text-4xl sm:text-3xl md:text-5xl text-emerald-500 font-medium " > About Us </h2>
  <p className="text-center text-white lg:text-2xl sm:max-w-7rem m-3.5 " >We are a modern technology <br/> company  focused  on building  high  -performance <br/> <span className="text-emerald-300" > web applications </span> and   <span className="text-emerald-200" >  digital solutions. </span> </p>  
  </motion.div>
  <br/>
  < motion.div 
  initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
  className="skill justify-items-center items-center p-5 " >
  <h2 className="  text-white text-center text-4xl sm:text-3xl md:text-5xl " >Featured Skill </h2> 
  </motion.div>
  <motion.div className="Images flex items-center justify-center " >
  <Image   className="w-73" src='/react.png' width={400} height={400}  alt="react" /> 
  <Image  className="w-20 sm:w-20 md:22 " src='/nextjs.png' width={400} height={400}  alt="Next" />   
  </motion.div>
  <div className="justify-items-center" >
  
  </div>
  </>  
  );
}
