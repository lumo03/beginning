import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick} className="w-max h-min m-4 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-sm md:px-5">{props.text}</button>
    )
}

export default Button;