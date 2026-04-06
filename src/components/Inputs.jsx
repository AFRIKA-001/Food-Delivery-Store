import React from 'react'

function Inputs({label,id, ...props}) {



  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} required />
    </div>
  )
}

export default Inputs
