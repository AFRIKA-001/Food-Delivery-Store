import React from 'react'

function MarqueeImages({items}) {
  return (
    <div className='shrink-0 lg:h-30 lg:w-30 flex justify-center items-center text-6xl lg:text-8xl '>
      {items.image}
    </div>
  )
}

export default MarqueeImages
