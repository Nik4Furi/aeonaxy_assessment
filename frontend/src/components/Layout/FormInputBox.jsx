import React from 'react'

const FormInputBox = ({ value, handleChange, label,name, type='text', maxL = 20, minL = 2, placeholder,readOnly=false,required=true }) => {
    return (
        <>
            <div className='mb-5'>
                <label htmlFor={label} className='capitalize'  >{label}</label>
                <input id={label} name={name} type={type} required={required} maxLength={maxL} minLength={minL} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={placeholder} value={value} onChange={handleChange} readOnly={readOnly} />
            </div>
        </>
    )
}

export default FormInputBox
