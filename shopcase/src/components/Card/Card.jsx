import React from 'react'
import { ArrowIcon } from '../common/ArrowIcon'


export const Card = ({imagePath, title,description, aciionArrow,height,width}) => {
    
  return (
    <div className='flex flex-col p-6'>
        <img className='bg-cover bg-center rounded hover:scale-105 cursor-pointer' 
        style={{ height: height || "240px", width: width || "200px" }}
        src={imagePath} alt="dress"/>
        <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
        <p className='text-[16px] p-1'>{title}</p>
        <p className='text-[12px] p-1 text-gray-600'>{description}</p>
       </div>
         {aciionArrow && <span className='cursor-pointer pr-2 items-center'><ArrowIcon /></span>}
       </div>
    </div>
  )
}
