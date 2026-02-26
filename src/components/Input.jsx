import React from 'react'

export default function Input({value , onChange , className,  label, placeHolder , type="text",name}) {
  return (
    <div className={`${className} flex flex-col gap-1`}>
        <label className='text-[18px] font-bold ' htmlFor="input">{label}</label>
        <input required className={`${className}  outline-none border px-3 py-2 rounded-md`} type={type} name={name} id="input" onChange={onChange} value={value} placeholder={placeHolder} />
    </div>
  )
}
