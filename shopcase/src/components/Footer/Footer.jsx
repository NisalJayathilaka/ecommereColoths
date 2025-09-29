import React from 'react'

export const Footer = ({content}) => {
    
  return (
    <div className='bg-black py-8'>
        <div className='flex p-8 justify-around'>
         {content?.items?.map((item) => {
            return (
                <div key={item.id} className='flex flex-col p-4'>
                    <h1 className='text-lg text-white pb-4'>{item.title}</h1>
                    {item?.list?.map((subItem) => (
                        console.log(subItem),
                        <a key={subItem.id} 
                        href={subItem.path} className='text-sm text-gray-400 pb-2 hover:text-white cursor-pointer'>
                        {subItem.label}
                        </a>
                    ))}
                    {item?.description && <p className='text-sm text-gray-400 pb-2 hover:text-white cursor-pointer'>
                        {item.description}
                    </p>}
                </div>
            )
         })}
        </div>
        <p className='text-lg text-white text-center content-center'>
        copyRight</p>
    </div>
  )
}
