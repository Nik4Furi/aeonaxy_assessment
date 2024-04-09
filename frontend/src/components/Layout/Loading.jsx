import React from 'react'

const Loading = ({ w = '12', h = '12' }) => {
    return (
        <>
            <div className="flex justify-center items-center ">
                <div className={`border border-t-4 border-gray-900 rounded-full w-${w} h-${h} animate-spin`}></div>
            </div>
        </>
    )
}

export default Loading
