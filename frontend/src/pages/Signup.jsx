import React from 'react';
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
     <div className='p-4 w-2/6 rounded bg-gray-800'>
     <div className='text-2xl font-semibold flex justify-center'>Sign Up</div>
     <input
     name="username" 
     type='username' 
     placeholder="username" 
     className='bg-gray-700 px-3 py-2 my-3 w-full rounded'>
     </input>

     <input
     name="email" 
     type='email' 
     placeholder="xyz@example.com" 
     className='bg-gray-700 px-3 py-2 my-3 w-full rounded'>
     </input>

     <input
     name="password" 
     type='password' 
     placeholder="password" 
     className='bg-gray-700 px-3 py-2 my-3 w-full rounded'>
     </input>
     
     <div className='w-full flex justify-between items-center'>
    <button className='bg-blue-400 text-xl font-semibold text-white px-3 py-2 
    my-3 rounded hover:bg-blue-900 transition duration-300'>
       Sign Up
       </button>
       <Link to="/login" className='hover:text-green-500'>Already having an account? Login here</Link>
    </div>
     </div>
    </div>
  );
};

export default Signup;