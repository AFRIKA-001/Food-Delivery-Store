import React from 'react'

function Inputs({label,id, ...props}) {



  return (
    <div className=' text-xl lg:text-2xl '>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} required />
    </div>
  )
}

export default Inputs
