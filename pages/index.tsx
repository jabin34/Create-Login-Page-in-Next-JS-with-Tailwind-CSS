import type { NextPage } from 'next'
import Head from 'next/head'
import {FaFacebookF,FaLinkedinIn ,FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
        <div className='w-3/5 p-5'>
          <div className='text-left font-bold'>
              <span className='text-green-700'>Company Name</span>
             </div>
             <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-700 mb-2'>Sign in to Account</h2>
              <div className='border-2  border-green-700 w-10 inline-block  mb-2'></div>
              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-700 hover:text-white'>
                  <FaFacebookF className='text-sm'></FaFacebookF>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-700 hover:text-white'>
                  <FaLinkedinIn className='text-sm'/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-700 hover:text-white'>
                  <FaGoogle className='text-sm'/>
                </a>
              </div>
              <p className=' text-gray-400 my-3'> or use your email account</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-2'/>
                  <input  type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none flex-1'/>
                </div>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 m-2'/>
                  <input  type="password" name="password" placeholder='Password' className='bg-gray-100 outline-none flex-1'/>
                </div>
                <div className='flex w-64 mb-5 justify-between'>
                  <label className='flex items-center text-xs'>
                    <input type="checkbox" name="remember" className='mr-1'/>
                    Remember me
                  </label>
                  <a href='#' className='text-xs'>Forgot Password?</a>
                </div>
                <a href='#' className=' border-2 border-green-700 rounded-full px-12 py-2 inline-block font-semibold text-green-700 hover:bg-green-700 hover:text-white'>
             Sign In</a>
              </div>
             </div>
        </div>
         <div className='w-2/3 bg-green-700  text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
           <h2 className='text-3xl font-bold mb-2'> Hello,Friends </h2>
           <div className='border-2  border-white w-10 inline-block  mb-2'></div>
           <p className='mb-10'> Fill up personal information and start journey with us.</p>
           <a href='#' className=' border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-700'>
             Sign Up</a>
          </div>
       </div> 
        
      </main>

    
    </div>
  )
}

export default Home
