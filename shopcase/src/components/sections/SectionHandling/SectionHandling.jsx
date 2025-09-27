import React from 'react'

export const SectionHandling = ({title}) => {
  return (
    <div className='flex flex-wrap px-10 my-5'>
        <div>
            
        </div>
        <p className='text-3xl'>{title}</p>
    </div>
  )
}

SectionHandling.defaultProps = {
}

SectionHandling.propTypes = {
 title: 'string'
}

export default SectionHandling
