import React from 'react'
import { Wishlist } from '../common/Wishlist'
import { AccountIcon } from '../common/AccountIcon'
import { CartIcon } from '../common/CartIcon'

export const Navigation = () => {
  return (
    <nav className='flex justify-between items-center py-6 px-8'>
      <div className='flex items-center gap-6'>
      {/* logo */}
        <h2 className='text-3xl font-bold'>Shopcase</h2>
      </div>
      <div className='flex items-center gap-6'>
        <a href="/" className='text-lg font-medium text-gray-600 hover:text-gray-900'>Shop</a>
        <a href="/men" className='text-lg font-medium text-gray-600 hover:text-gray-900'>Men</a>
        <a href="/women" className='text-lg font-medium text-gray-600 hover:text-gray-900'>Women</a>
        <a href="/kid" className='text-lg font-medium text-gray-600 hover:text-gray-900'>Kid</a>
      </div>

      <div className='flex items-center gap-4'>
       {/* search icon */}
      <div className='border rounded flex overflow-hidden'>
      <button className='flex items-center justify-center px-4 border focus:outline-none'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
          <input type="text" placeholder="Search..." className="px-4 py-2 focus:outline-none"/>
      </button>
      </div>
      </div>

      <div className='flex items-center gap-4'>
        {/*account icon */}
        <ul className='flex items-center gap-8'>
            <li><button><Wishlist /></button></li>
            <li><button><AccountIcon /></button></li>
            <li><a href='/cart-items'><CartIcon /></a></li>
        </ul>
      </div>
    </nav>
  )
}
