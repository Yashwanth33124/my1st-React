import React from 'react'

const CommonInput=({label,name,id,placeholder,value,onChange,type })=>{
  return (
    <div>
      <label >
   {label}
      </label>
      <input 
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
       />
    </div>
  )
}

export default CommonInput
