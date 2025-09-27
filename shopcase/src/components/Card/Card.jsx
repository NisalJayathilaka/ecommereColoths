import React from 'react'


export const Card = ({imagePath, title,description, aciionArrow}) => {
    
  return (
    <div className='flex flex-col p-8'>
        <img className='max-h-[260px] max-w-[220px] min-h-[220px] min-w-[220px] 
        bg-cover bg-center rounded hover:scale-105 cur
        sor-pointer' src={imagePath} alt="dress"/>
        <div className='flex justify-between'>
        <div className='flex flex-col'>
        <p className='text-[16px] p-2'>{title}</p>
        <p className='text-[14px]'>{description}</p>
       </div>
         {aciionArrow && <div></div>}
       </div>
    </div>
  )
}
