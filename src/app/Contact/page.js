'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
const page = () => {

   const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

   const onSubmit = (data) =>{
    
   console.log(data);
   toast.success(' Signup Successfully'); 
   } 

  return (
  <>
   <div className='sec-sign justify-items-center  p-8 '>
  <div className='container flex items-center space-x-2.5 justify-center m-5.5'>
   <h3 className='text-center text-emerald-200 font-medium text-4xl' >Sign/Up</h3> 
  </div>
  <form  className='bg-gray-100   p-8 rounded-2xl ' onSubmit={handleSubmit(onSubmit)}>
  <Toaster/>
  <input className='bg-white rounded-md shadow shadow-gray-400 p-2.5 w-55 ' type="text" placeholder='Full Name'{...register("fullname" , {
  required:"Full Name is required",
  minLength:{
  value: 7,
  message:"Min 7 Character Required "  
  },
  pattern: {
  value: /^[A-Za-z]+$/,
  message: "Only letters allowed",
  }  
  })}
  />
   <p style={{ color: "red" }}> {errors.fullname?.message}</p>
   <br /><br />
   {/* Email */}
  <input className='bg-white rounded-md p-2.5 shadow shadow-gray-400  w-55 ' type="email" placeholder='Email'{...register("Email" , {
  required:"Email is required", 
  })}
  />
   <p style={{ color: "red" }}> {errors.Email?.message}</p>
   <br /><br />
   {/* Password */}
   <input className='bg-white rounded-md shadow shadow-gray-400 p-2.5 w-55 ' type="password" placeholder='Password'{...register("password" , {
  required:"Password is required",
  minLength:{
  value: 7,
  message:"Min 10 Character Required "  
  },
  // pattern: {
  // value: /^[A-Za-z]+$/,
  // message: "Only letters allowed",
  // }  
  })}
  />
   <p style={{ color: "red" }}> {errors.password?.message}</p>
   <br />
   
  <button type='submit' className='justify-center bg-emerald-300 p-2.5 text-white rounded-md '  >Submit</button>
  </form>  
  </div>

  </>  
  )
}

export default page