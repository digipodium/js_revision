import React from 'react'

const MyButton = ({ children, className, id }) => {
    return (
        <button id={id}
            className={`bg-black text-white rounded px-3 py-1 ${className}`}>
            {children}
        </button>
    )
}

export default MyButton