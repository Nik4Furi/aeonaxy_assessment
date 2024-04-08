import React from 'react'

const Loading = ({ w = '4',h='4' }) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className={`animate-spin rounded-full h-${h} w-${w} border-t-2 border-b-2 border-indigo-500`}> </div>
            </div>
        </>
    )
}

export default Loading
