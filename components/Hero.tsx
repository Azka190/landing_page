import React from 'react'

function Hero() {
  return (
    <div className='flex gap-7 mt-4 font-["Poppins"]'> 
        <div className='py-32 ml-36 mt-24 ' >
            <h1 className='text-[40px] pb-3'>We create the best<br /> digital products</h1>
            <p className='pb-4'>We design and develop the best website, <br />always thinking about your users</p>
            <button className="h-[51px] px-7 bg-[#3285FF] shadow border border-black text-[#fffefe] text-base font-bold flex items-center justify-center">
                 Start Your Project
            </button>
        </div>
        <div >
            <img src="/Rectangle 1.png" alt="" className='ml-[190.5px]' />
        </div>
    </div>
  )
}

export default Hero