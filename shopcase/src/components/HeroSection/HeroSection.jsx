import React from 'react'
import backgroundImage from '../../assets/image/hero-img.jpg'

export const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover flex-start bg-center text-left h-svh w-full' 
    style={{backgroundImage : `url(${backgroundImage})`}}>
        <div className='absolute top-0 left-0 right-0 bottom-0'>
  <main className='container mx-auto px-6 md:px-12 text-left py-40'>
    <h1 className='text-4xl md:text-6xl font-bold text-black leading-tight mb-6'>
      Discover Your Style with <br/>Shopcase
    </h1>
    <p className='text-lg md:text-2xl text-gray-600 mb-8'>
      Trendy fashion, unbeatable prices.
    </p>
    <a
      href="/shop"
      className='bg-amber-400 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-500 transition duration-300 inline-block'
    >
      Shop Now
    </a>
  </main>
</div>

    </div>
  )
}
